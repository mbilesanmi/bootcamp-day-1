/**
 * Created by Maranatha Ilesanmi on 3/11/2017.
 */

describe("Prime number generator", function() {
    it("should return an array containing '2,3,5,7' for (10)", function(){
        expect(getPrimes(10)).toEqual([2,3,5,7]);
    });

    it("should return an array containing '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47' for (50)", function(){
        expect(getPrimes(50)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
    });

    it("should return an empty array for (0)", function(){
        expect(getPrimes(0)).toEqual([]);
    });

    it("should return 'Invalid input' for ('ad34ad')", function(){
        expect(getPrimes('ad34ad')).toEqual('Invalid input');
    });

    it("should return 'Invalid input' for ('sdjadbja')", function(){
        expect(getPrimes('sdjadbja')).toEqual('Invalid input');
    });

    it("should return 'Negative numbers not allowed' for (-8)", function(){
        expect(getPrimes(-8)).toEqual('Negative numbers not allowed');
    });

    it("should return 'Negative numbers not allowed' for (-53)", function(){
        expect(getPrimes(-53)).toEqual('Negative numbers not allowed');
    });

});