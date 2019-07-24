import { Sdk } from './sdk'

let setting = {
  basePath: '../src',
  action: 'append'
}
function render(moduleName: string, config?: object) {
  new Sdk(moduleName, config)
}
function load() {
  let abc: number = 14
  alert('123')
  console.log(abc)
}

export function fook(){
  console.log('ll')
}
