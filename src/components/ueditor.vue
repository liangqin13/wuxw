<template>
  <div class="UE">
    <!--这个地方的大小是可以自己控制的-->
    <div id="editor" class="_editor-container">
    </div>
  </div>
</template>
<script>
export default {
  name: 'ueditor',
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      editor: null
    }
  },
  mounted() {
    // 实例化editor编辑器
    this.editor = window.UE.getEditor("editor")
    // 设置编辑器默认内容
    this.editor.addListener('ready', () => {
      this.editor.setContent(this.value)
    })
  },
  methods: {
    // 获取编辑器中的内容
    getUEContent () {
      return this.editor.getContent()
    },
    // 获取编辑器中的内容
    setUEContent (content) {
      return this.editor.setContent(content)
    }
  },
  destroyed() {
    // 将editor进行销毁
    this.editor.destroy()
  }
}
</script>

<style lang="scss" scope>
@import '../theme/basic.scss';
  ._editor-container{
    width: 100%;
    min-height: 400px;
  }
</style>
