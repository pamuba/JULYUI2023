const customMatchers = {
    toBeCalculator: function(){
        return {
            compare: function(actual, start, end){
                const result = {
                    // pass: actual instanceof Calculator,
                    pass: (start <= actual) && (actual <= end),
                    message:''
                }
                if(result.pass){
                    result.message = ""
                }
                else{
                    result.message = "Expected "+ actual + "  to be instance of calculator"
                }
                return result;
            }
        }
    }
}