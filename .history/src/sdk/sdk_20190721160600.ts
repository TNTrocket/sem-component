export  class Sdk {
    publicSrc: string
    constructor(publicSrc: string) {
        this.publicSrc = publicSrc
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
        // return new Promise((resolve, reject)=>{
        //     this.loadScript().then(()=>{
        //         resolve()
        //     })
        // })
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