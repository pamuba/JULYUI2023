describe('calculator.js', function(){

    //Set up functions
    beforeAll(function(){

    });

    beforeEach(function(){
        
    });


    xit('should add numbers to total', function(){
        const calculator = new Calculator();
        calculator.add(5);
        expect(calculator.total).toBe(5);
    });
    xit('should multiply total to number', function(){
        const calculator = new Calculator();
        calculator.total = 5;
        calculator.multiply(5);
        expect(calculator.total).toBe(25);
    });
    xit('has constructor', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();
        // calculator.total = "0";
        expect(calculator).toEqual(calculator2);
    });
    it('initiates unique objects', function(){
        jasmine.addMatchers(customMatchers);

        const calculator = new Calculator();
        const calculator2 = new Calculator();
        // expect(calculator).toBeCalculator();
        expect(300).toBeCalculator(100,200);
        // calculator.total = "0";
        // expect(calculator).not.toBe(calculator2);
        expect(calculator).toBeTruthy();
        expect(calculator2).toBeTruthy();
        
    });
    xit('has common oprations', function(){
        const calculator = new Calculator();
        expect(calculator.add).toBeDefined();
        expect(calculator.subtracy).not.toBeDefined();
        expect(calculator.subtracy).toBeUndefined();
    });
    it('can overwirte total', function(){
        const calculator = new Calculator();
        calculator.total = null;
        expect(calculator.total).toBeNull();
        expect(calculator.constructor.name).toContain("Calc");
    });
    it('testing for NaN', function(){
        const calculator = new Calculator();
         calculator.total = 20;
         calculator.multiply('r');
         expect(calculator.total).toBeNaN();

        //total=3  calculator.multiply("r") expect(total).toBeNaN()
        
    });
    it('handles divide by zero', function(){
        const calculator = new Calculator();
        
        expect(function(){calculator.divide(0)}).toThrow();
        expect(function(){calculator.divide(0)}).toThrowError(Error, 'Cannot divide by zero');
    });
    it('handles divide by zero', function(){
        const calculator = new Calculator();
        calculator.total = -50;

        expect(calculator.add(20)).toBe(-30);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch('number');
    });


})