export default class Sdk {
    publicSrc: string
    constructor(publicSrc: string) {
      this.publicSrc = publicSrc
    }
    loadScript<T>() :Promise<T> {
        let script = document.createElement('script')
        return new  Promise((resolve, reject) => {
           script.src = this.publicSrc
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