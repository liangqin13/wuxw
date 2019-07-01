<template lang='html'>
  <div>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="close-btn" @click.stop="$emit('close')"><i class="el-icon-close"></i></div>
          <div class="modal-header">
            <slot name="header">
            </slot>
          </div>
          <div v-loading="loading" class="modal-body">
            <slot name="body">
              暂无数据
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    loading: {
      type: Boolean,
      default () {
        return false
      }
    }
  }
}
</script>
<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 20000;
  top: 40px;
  left: 65px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 85%;
  height: 80vh;
  min-height: 40%;
  min-width: 60%;
  margin: 0px auto;
  font-size: 16px;
  color: #333;
  padding: 0px 0px 10px 0px;
  background-color: #F1F2F3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  position: relative;
}
.close-btn {
  position: absolute;
  font-size: 26px;
  padding: 4px;
  color: #959595;
  top: 0;
  right: 0;
}
.modal-header {
  margin-top: 0;
  text-align: center;
  padding: 10px;
  line-height: 16px;
  border-bottom: 1px solid #D2D2D2;
}

.modal-body {
  overflow-y: auto;
  width: 100%;
  height: 95%;
  padding: 5px 20px;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
