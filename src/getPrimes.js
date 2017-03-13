/**
 * Created by Maranatha Ilesanmi on 3/11/2017.
 */

function getPrimes(n) {
    var array = [];
    var a;
    var primeNos = [];
    if (Number.isInteger(n)) {
        if (n < 0) {
            return "Negative numbers not allowed"
        } else if (n > 0) {
            for (a = 2; a <= n; a++) {
                if (!array[a]) {
                    primeNos.push(a);
                    for (b = a; b <= n; b += a) {
                        array[b] = true;
                    }
                }
            }
            return primeNos;
        } else if (n == 0) {
            empArr = [];
            return empArr;
        }
    } else {
        return "Invalid input"
    }

}