interface config{
    action: string,
    [propName: string]: any;
}
export class Sdk {
    moduleName: string
    config: config
    $parent: any
    constructor(moduleName: string, config: config, ) {
        this.moduleName = moduleName
        this.config = config
        console.log('99')
    }
    loadScript() {
        let script: HTMLScriptElement = document.createElement('script')
        return new Promise((resolve, reject) => {
            script.src = this.moduleName
            document.head.appendChild(script)
            script.onload = () => {
                resolve(script)
            }
            script.onerror = () => {
                reject()
            }
        })

    }
    async loadMoudle() {
        await this.loadScript()
        console.log('hasLoad')
    }
    async run() {
        let div = document.createElement('div')
        div.className = 'module'
        $('body')[this.config.action](div)
        await this.loadMoudle().then(() => {
            window[this.moduleName](div, this.config.options)
          })
        console.log('loadMoudle')
    }
}