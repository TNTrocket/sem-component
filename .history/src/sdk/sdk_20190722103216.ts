export  class Sdk {
    publicSrc: string
    constructor(publicSrc: string) {
        this.publicSrc = publicSrc
        console.log('99')
    }
    loadScript() {
        let script: HTMLScriptElement = document.createElement('script')
        return new Promise((resolve, reject) => {
            script.src = this.publicSrc
            document.head.appendChild(script)
            script.onload = () => {
                resolve()
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
     await this.loadMoudle()
     console.log('loadMoudle')
    }
}
// function tDDes<T>(value:T):T{

//   return value
// }