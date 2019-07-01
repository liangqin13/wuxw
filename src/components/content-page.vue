<template lang='html'>
  <div>
  <transition>
      <div class="__content-wrapper">
        <div class="__content-navi">
            <!-- <slot name="navi">面包屑导航</slot> -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="item in breadcrumb" :key="item.name" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="__content-container">
          <div class="__top-container">
            <div class="__top-title" :class="{'__top-title-center':titleInCenter}">{{title}}</div>
            <div v-if="!titleInCenter" class="__top-function">
              <slot name="function">右侧按钮功能区域</slot>
            </div>
          </div>
          <div class="__content-body">
            <slot name="body">
              主要功能显示区域
            </slot>
          </div>
      </div>
    </div>
  </transition>
  </div>
</template>
<script>
export default {
  name: 'content-page',
  props: {
    titleInCenter: {
      type: Boolean,
      default: false,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    breadcrumb: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss">
@import '../theme/basic.scss';
.__content-wrapper{
  padding: 60px 20px 20px 0;
  width: 100%;
  height: 100vh;
  font-size: 14px;
  color: #333;
  background-color: #F1F2F3;
}
.__content-navi{
  padding: 20px;
}
.__content-container{
  // width: 100%;
  // height: 100vh;
  background-color: #FFF;
  border: 1px solid #e6e6e6;
}
.__top-container{
  display: flex;
  flex: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
  .__top-title{
    margin-left: 10px;
    font-size: 16px;
    &-center{
      flex: auto;
      font-size: 18px;
      text-align: center;
      color: $main-color;
    }
  }
  .__top-function{
    flex: auto;
    align-items: flex-end;
    align-self: flex-end;
  }
}
.__content-body{
  padding: 0;
}
</style>
