// eager
export const staticObject = {
    doSomeStuff() {
      console.log('some stuff')
    }
  }
  
  
  
  class Singleton {
    constructor() { 
        console.log('created')
    }
    doSomeStuff() {
        console.log('some stuff')
    }
  
    value = "initial"
  }
  
  // eager
  export const __eagerInstance = new Singleton()
  
  // let instance: Singleton = null
  // export const getInstance = () => {
  //   if (!instance) { 
  //       instance = new Singleton()
  //   }
  //   return instance
  // }
  
  // lazy
  // SINGLETON -> SINGLETON FACTORY
  export const produceSingleton = () => {
    let instance: Singleton = null
    const getInstance = () => {
      if (!instance) { 
          instance = new Singleton()
      }
      return instance
    }
  
    return { getInstance }
    // return getInstance
}