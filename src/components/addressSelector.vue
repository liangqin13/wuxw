<template>
  <div>
    <p>
      <span class="__title" :style="{'padding-left':titleLeftPadding+'px','width':titleWidth+'px','text-align':titleAlign}">
        <span class="required">{{required?'*':''}}</span>{{title?title:'地址'}}：
      </span>
      <el-cascader
        :style="{'width':width+'px'}"
        size="mini"
        :options="addressTree"
        v-model="selectedList"
        @change="onChanged"
        :props="properties">
      </el-cascader>
    </p>
  </div>
</template>
<script>
export default {
  name: 'AddressSelector',
  props: {
    title: {
      type: String,
      default () {
        return '选择地址'
      }
    },
    required: {
      type: Boolean,
      default () {
        return true
      }
    },
    titleAlign: {
      type: String,
      default () {
        return 'left'
      }
    },
    titleWidth: {
      type: Number,
      default () {
        return 50
      }
    },
    titleLeftPadding: {
      type: Number,
      default () {
        return 0
      }
    },
    width: {
      type: Number,
      default () {
        return 200
      }
    },
    // 下拉列表二维数据，下标对应地址结构
    address: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      properties: {
        value: 'id',
        label: 'name',
        children: 'children'
      },
      // 选择的结果
      selectedList: [],
      addressTree: []
    }
  },
  mounted () {
    // 获得地址对象
    this.addressTree = this.$store.state.addressTree
  },
  methods: {
    // 如果需要回显楼地址，需要在初始化selectedList后，调用该方法
    initSelectedList(selectedList) {
      this.selectedList = selectedList
    },
    onChanged(selectItems) {
      this.$emit('onChange', selectItems)
    }
  }
}
</script>
<style lang="scss">
.__table-flex{
  &-vertical {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  &-horizontal {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  // padding-bottom: 10px;
}
.__title{
  .required{
    color:red;
    font-size: 16px;
    font-weight: 600;
  }
}

</style>
