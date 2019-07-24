interface config{
    action: string
}
export class Sdk {
    publicSrc: string
    config: config
    constructor(publicSrc: string, config: config) {
        this.publicSrc = publicSrc
        this.config = config
        console.log('99')
    }
    loadScript() {
        let script: HTMLScriptElement = document.createElement('script')
        return new Promise((resolve, reject) => {
            script.src = this.publicSrc
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
        div.className = 'gz-module'
        this.$parent[this.config.action](div)
        await this.loadMoudle().then(() => {
            window[this.moduleName](div, this.config.options)
          })
        console.log('loadMoudle')
    }
}