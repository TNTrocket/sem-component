import tpl from './index.ejs'
import './index.less'

function init (element, options) {
  if (!$(element).children().length) {
    $(element).html(tpl(Object.assign({}, {
      // 插件的默认属性配置默认配置
      hello: 'test world'
    }, options)))
  }
}
let HTMLTYPESTRING = 'HTMLTYPE'
window[HTMLTYPESTRING]()

export default init