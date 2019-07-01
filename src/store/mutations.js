// 修改store里state的值，通过store.commit()提交来修改
export const setUser = (state, { user }) => {
  state.user = user
}
