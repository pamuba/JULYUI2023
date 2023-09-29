describe('get version', function(){
    let calculator;
    let calculator2
    //Set up functions
    beforeAll(function(){

    });

    beforeEach(function(){
         calculator = new Calculator();
         calculator2 = new Calculator();
    });
    it('fetches version from  external source.',  function(done){
        spyOn(window, 'fetch').and.returnValue(Promise.resolve(
            new Response('{"version":"2.0"}')
        ))
        calculator.version.then(function(version){
            expect(version).toBe('2.0');
            done();
        })
    })
})
describe('calculator.js', function(){

    let calculator;
    let calculator2
    //Set up functions
    beforeAll(function(){

    });

    beforeEach(function(){
         calculator = new Calculator();
         calculator2 = new Calculator();
    });


    it('should add numbers to total', function(){
        calculator.add(5);
        expect(calculator.total).toBe(5);
    });
    it('should multiply total to number', function(){
        calculator.total = 5;
        calculator.multiply(5);
        expect(calculator.total).toBe(25);
    });
    it('has constructor', function(){
        // calculator.total = "0";
        expect(calculator).toEqual(calculator2);
    });
    it('initiates unique objects', function(){
        jasmine.addMatchers(customMatchers);

        // expect(calculator).toBeCalculator();
        expect(300).toBeCalculator(100,400);
        // calculator.total = "0";
        // expect(calculator).not.toBe(calculator2);
        expect(calculator).toBeTruthy();
        expect(calculator2).toBeTruthy();
        
    });
    it('has common oprations', function(){
        expect(calculator.add).toBeDefined();
        expect(calculator.subtracy).not.toBeDefined();
        expect(calculator.subtracy).toBeUndefined();
    });
    it('can overwirte total', function(){
        calculator.total = null;
        expect(calculator.total).toBeNull();
        expect(calculator.constructor.name).toContain("Calc");
    });
    it('testing for NaN', function(){
         calculator.total = 20;
         calculator.multiply('r');
         expect(calculator.total).toBeNaN();

        //total=3  calculator.multiply("r") expect(total).toBeNaN()
        
    });
    it('handles divide by zero', function(){
        
        expect(function(){calculator.divide(0)}).toThrow();
        expect(function(){calculator.divide(0)}).toThrowError(Error, 'Cannot divide by zero');
    });
    it('return total', function(){
        calculator.total = -50;

        expect(calculator.add(20)).toBe(-30);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch('number');
    });

    //Tear Down 
    afterAll(()=>{

    });
    afterEach(()=>{
        calculator = null;
        calculator2 = null;
    })


})