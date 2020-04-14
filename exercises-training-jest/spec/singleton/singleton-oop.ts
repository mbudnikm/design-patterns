export class Singleton {
    private constructor() {
        console.log('created')
    }

    private static instance: Singleton | null = null

    static getInstance(): Singleton { 
        if (!Singleton.instance) { 
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }

    value = "initial"

    doSomeStuff() {
        console.log('some stuff')
    }
}

class SingletonFactory {
    static produce() {
        // anonymous class
        return class {
            private constructor() {
                console.log('created')
            }

            private static sth: Singleton | null = null

            static getInstance(): Singleton {
                if(!this.sth) {
                    this.sth = new this()
                }

                return this.sth
            }

            value = 'initial'

            doSomeStuff() {
                console.log('some stuff')
              }
        }
    }
}