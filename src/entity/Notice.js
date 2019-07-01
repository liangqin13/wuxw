export default class Notice {
  createObject = () => {
    return {
      id: '',
      type: '',
      title: '',
      content: '',
      publishTime: new Date(),
      optionName: '',
      deleted: false
    }
  }
}
