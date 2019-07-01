exports.parseArg = function parseArg() {
  let argvs = process.argv; // 获得命令行参数
  // console.log('argvs: ', argvs);
  let result = {};

  let REG = /^--[a-zA-Z0-9]+\=[a-zA-Z0-9]+$/;

  argvs.map(function(item) {
    if (!REG.test(item)) {
      return
    }

    let arr = item.split('=');
    let key = arr[0].slice(2);

    result[key] = arr[1];
  })
  // console.log('result: ', result);
  return result;
}