import tpl from './index.ejs'
import './index.less'

console.log('test')
function init (element, options) {
  console.log(element, options)
  if (!$(element).children().length) {
    $(element).html(tpl(Object.assign({}, {
      // 插件的默认属性配置默认配置
      hello: 'test world'
    }, options)))
  }
}

export default init