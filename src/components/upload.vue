<template lang="html">
  <div :class="[prefixCls]">
    <div
      v-loading="loading"
      :class="classes"
      @click="handleClick">
      <slot></slot>
    </div>
    <slot name="tip"></slot>
    <upload-list
      v-if="showUploadList"
      :files="fileList"
      @on-file-remove="handleRemove"
      @on-file-preview="handlePreview"></upload-list>
  </div>
</template>

<script>
import { UploaderBuilder } from 'qiniu4js'
import UploadList from './upload-list'
import utils from '@/utils'
const prefixCls = 'fbd-upload'
export default {
  name: 'Upload',
  props: {
    token: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object
    },
    name: {
      type: String,
      default: 'file'
    },
    showUploadList: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      validator (value) {
        return utils.oneOf(value, ['select', 'drag'])
      },
      default: 'select'
    },
    format: {
      type: Array,
      default () {
        return []
      }
    },
    accept: {
      type: String
    },
    maxSize: {
      type: Number
    },
    beforeUpload: Function,
    onProgress: {
      type: Function,
      default () {
        return {}
      }
    },
    onSuccess: {
      type: Function,
      default () {
        return {}
      }
    },
    onError: {
      type: Function,
      default () {
        return {}
      }
    },
    onRemove: {
      type: Function,
      default () {
        return {}
      }
    },
    onPreview: {
      type: Function,
      default () {
        return {}
      }
    },
    onExceededSize: {
      type: Function,
      default () {
        return {}
      }
    },
    onFormatError: {
      type: Function,
      default () {
        return {}
      }
    },
    defaultFileList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
  },
  data () {
    return {
      loading: false,
      uploader: null,
      prefixCls: prefixCls,
      dragOver: false,
      fileList: [],
      tempIndex: 1
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-select`]: this.type === 'select',
          [`${prefixCls}-drag`]: this.type === 'drag',
          [`${prefixCls}-dragOver`]: this.type === 'drag' && this.dragOver
        }
      ]
    }
  },
  methods: {
    // 初始化上
    initUploader() {
      let DEBUG = false
      if (utils.getRunEnv() !== 'prod') {
        DEBUG = true
      }
      this.uploader = new UploaderBuilder()
        .debug(DEBUG)
        .domain({https: 'https://up-z1.qiniup.com', http: 'http://up-z1.qiniup.com'})
        .tokenFunc((setToken) => {
          setToken(this.token)
        })
        .retry(3)
        .saveKey(true)
        .size(1024 * 1024)
        .chunk(true)
        .auto(false)
        .multiple(this.multiple)
        .accept(this.format)
        .saveKey(true)
        .interceptor({
          // 验证文件大小
          onIntercept: (task) => {
            if (this.maxSize && task.file.size > this.maxSize * 1024) {
              this.onExceededSize(task.file, this.fileList)
              return true
            }
            return false
          }
        })
        .interceptor({
          // 验证文件大小
          onIntercept: (task) => {
            if (this.format.length) {
              const fileFormat = task.file.name.split('.').pop().toLocaleLowerCase()
              const checked = this.format.some(item => item.toLocaleLowerCase() === fileFormat)
              if (!checked) {
                this.onFormatError(task.file, this.fileList)
                return true
              }
              return false
            }
          }
        })
        .listener({
          onReady: (tasks) => {
            if (tasks.length > 0) {
              const files = []
              tasks.forEach(task => {
                files.push(task.file)
              })
              this.upload(files)
            }
          },
          onStart: (tasks) => {
            tasks.forEach(item => {
              this.handleStart(item.file)
            })
          },
          onTaskProgress: (task) => {
            this.handleProgress({ percent: task.progress }, task.file)
          },
          onTaskSuccess: (task) => {
            console.log('onTaskSuccess', task)
            this.handleSuccess(task.result, task.file)
          },
          onTaskFail: (task) => {
            console.log('onTaskFail', task)
            this.handleError(task.error, task.file)
          },
          onFinish (tasks) {
            console.log('onFinish', tasks)
          }
        })
        .build()
    },
    // 点击组件
    handleClick () {
      console.log('init uploader')
      this.initUploader()
      this.uploader.chooseFile()
      console.log('chooseFile')
    },
    // 上传一个文件
    upload (files) {
      if (!this.beforeUpload) {
        this.uploader.start()
        return
      }

      this.loading = true

      const before = this.beforeUpload(files)
      if (before && before.then) {
        before.then(result => {
          if (result) {
            this.uploader.start()
          } else {
            // this.onFormatError(files, this.fileList)
          }
        })
      } else if (before !== false) {
        this.uploader.start()
      } else {
        // beforeUpload要求停止上传
      }
    },
    handleStart (file) {
      file.uid = Date.now() + this.tempIndex++
      const _file = {
        status: 'uploading',
        name: file.name,
        size: file.size,
        percentage: 0,
        uid: file.uid,
        showProgress: true
      }
      console.log('handleStart')
      this.fileList.push(_file)
    },
    getFile (file) {
      const fileList = this.fileList
      let target
      fileList.every(item => {
        target = file.uid === item.uid ? item : null
        return !target
      })
      return target
    },
    handleProgress (e, file) {
      const _file = this.getFile(file)
      this.onProgress(e, _file, this.fileList)
      _file.percentage = e.percent || 0
    },
    handleSuccess (res, file) {
      this.loading = false
      const _file = this.getFile(file)

      if (_file) {
        _file.status = 'finished'
        _file.response = res

        // this.dispatch('FormItem', 'on-form-change', _file)
        this.onSuccess(res, _file, this.fileList)

        setTimeout(() => {
          _file.showProgress = false
        }, 1000)
      }
    },
    handleError (err, file) {
      this.loading = false
      const _file = this.getFile(file)
      const fileList = this.fileList

      _file.status = 'fail'

      fileList.splice(fileList.indexOf(_file), 1)

      this.onError(err, file)
    },
    handleRemove (file) {
      const fileList = this.fileList
      fileList.splice(fileList.indexOf(file), 1)
      this.onRemove(file, fileList)
    },
    handlePreview (file) {
      if (file.status === 'finished') {
        this.onPreview(file)
      }
    },
    clearFiles () {
      this.fileList = []
    }
  },
  watch: {
    defaultFileList: {
      immediate: true,
      handler (fileList) {
        this.fileList = fileList.map(item => {
          item.status = 'finished'
          item.percentage = 100
          item.uid = Date.now() + this.tempIndex++
          return item
        })
      }
    }
  },
  components: {
    'upload-list': UploadList
  }
}
</script>

<style lang="scss" scoped>
.fbd-upload {
  &-list {
    margin-top: 8px;
    &-file {
      padding: 4px;
      color: #657180;
      border-radius: 4px;
      transition: background-color .2s ease-in-out;
      overflow: hidden;
      position: relative;

      & > span {
        cursor: pointer;
        transition: color .2s ease-in-out;
        i{
          display: inline-block;
          width: 12px;
          height: 12px;
          color: #657180;
          text-align: center;
        }
      }

      &:hover {
        background: #f3f3f3;
        & > span{
          color: #3399ff;
          i{
              color: #657180;
          }
        }
        .#{upload-prefix-cls}-list-remove{
          opacity: 1;
        }
      }
    }
    &-remove {
      opacity: 0;
      font-size: 18px;
      cursor: pointer;
      float: right;
      margin-right: 4px;
      color: #999;
      transition: all .2s ease;
      &:hover{
        color: #444;
      }
    }
  }

  &-drag {
    background: #fff;
    border: 1px dashed #d7dde4;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: border-color .2s ease;

    &:hover{
        border: 1px dashed #3399ff;
    }
  }
  &-dragOver {
    border: 2px dashed #3399ff;
  }
}
</style>
