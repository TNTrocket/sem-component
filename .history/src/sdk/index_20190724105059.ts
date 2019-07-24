import { Sdk } from './sdk'

let setting = {
  basePath: '../src',
  action: 'append'
}
function render(moduleName: string, config: object = {}) {
  let mainSDK = new Sdk(moduleName, {
    ...setting,
    ...config
  })
  mainSDK.run()
}

export default{
  render
}