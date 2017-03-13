/**
 * Created by Maranatha Ilesanmi on 3/11/2017.
 */


function dataTypes(n) {
    if (typeof n == 'string') {
        return n.length;
    } else if (n == null) {
        return 'no value';
    } else if (typeof n == 'undefined') {
        return 'no value';
    } else if (typeof n == 'boolean') {
        return n;
    } else if (typeof n == 'number') {
        if (n > 100) {
            return 'more than 100';
        } else if (n < 100) {
            return 'less than 100';
        } else if (n == 100) {
            return 'equal to 100';
        }
    } else if (Array.isArray(n)) {
        if (n.length >= 3) {
            return n[2];
        } else {
            return undefined;
        }
    } else if (typeof n == 'function') {
        var callback = function(args){
            expect(args).toBeTruthy();
            if(args === true){
                return 'called callback'
            }
        };
        return callback(true);
    }
}