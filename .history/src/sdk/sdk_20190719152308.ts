export default class Sdk {
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
    loadMoudle() {
     this.loadScript()
    }
    run() {

    }
}
// function tDDes<T>(value:T):T{

//   return value
// }