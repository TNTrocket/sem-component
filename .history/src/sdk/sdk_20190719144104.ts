export default class Sdk {
    publicSrc: string
    constructor(publicSrc: string) {
        this.publicSrc = publicSrc
    }
    loadScript() {
        let script: HTMLScriptElement = document.createElement('script')
        return new Promise((resolve, reject) => {
            script.src = this.publicSrc
            script.onload = () => {
                resolve()
            }
            script.onerror = () => {
                reject()
            }
        })

    }
    loadMoudle() {

    }
    run() {

    }
}
// function tDDes<T>(value:T):T{

//   return value
// }