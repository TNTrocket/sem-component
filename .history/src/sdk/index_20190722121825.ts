import { Sdk } from './sdk'
import { funny } from './test4';

let config = {
  basePath: '../src',
  action: 'append'
}
function render() {
  new Sdk('tt')
}
function load() {
  let abc: number = 14
  alert('123')
  console.log(abc)
}
render()
load()
funny()
export function fook(){
  console.log('ll')
}
