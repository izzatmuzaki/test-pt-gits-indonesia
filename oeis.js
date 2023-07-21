function A000124(n) {
    let result = '';
    let current = 0;

    for (let i = 1; i <= n; i++) {
        current += i;
        result += current;
        if (i !== n) {
            result += '-'
        }
    }

    return result;
}

const input = 7;
const output = A000124(input);
console.log(output);