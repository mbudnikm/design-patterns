import { produceSingleton } from './singleton-fp';
import { Singleton } from './singleton-oop';


describe('Singleton', () => {
    describe('OOP', () => {

        beforeEach(() => {
            let i: Singleton = null // odzwierciedla to co jest w środku singletona
        })

        // testy są zależne od siebie
        it('should create at most one instance', () => {
            const i1 = Singleton.getInstance()
            const i2 = Singleton.getInstance()
            const i3 = Singleton.getInstance()

            expect(i1).toBe(i2)
            expect(i1).toBe(i3)
            expect(i2).toBe(i3)
        });

        xit('should have different value after change', () => {
            // START
            const i1 = Singleton.getInstance()
            i1.value = "different"

            expect(i1.value).toBe("different")
        });

        it('should have value=initial', () => {
            // START
            const i1 = Singleton.getInstance()

            expect(i1.value).toBe("initial")
        });

        it('should create an instance', () => {
            const i1 = Singleton.getInstance()

            expect(i1.doSomeStuff()).toBeUndefined()
        });
    })
    
    describe('FP', () => {

        let Singleton
        beforeEach(() => {
          Singleton = produceSingleton()
        })
    
        it('should create at most one instance', () => {
          // START
          const i1 = Singleton.getInstance();
          const i2 = Singleton.getInstance();
          const i3 = Singleton.getInstance();
    
          expect(i1).toBe(i2);
          expect(i1).toBe(i3);
          expect(i2).toBe(i3);
        });
    
        it('should have different value after change', () => {
          // START
          const i1 = Singleton.getInstance();
          i1.value = "different"
    
          expect(i1.value).toBe("different");
        });
    
        it('should have value=initial', () => {
          // START
          const i1 = Singleton.getInstance();
    
          expect(i1.value).toBe("initial");
        });
    
        it('should create an instance', () => {
          // START
          const i1 = Singleton.getInstance();
    
          expect(i1.doSomeStuff()).toBeUndefined();
        });
      });
})
