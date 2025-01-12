const words = ['Hello', 'world'];
const wordsArr = words.map(function(x) {
    let arr = [];
    for(let i = 0; i < x.length; i++) {
        arr.push(x.charCodeAt(i));
    }
    return arr;
})
console.log(wordsArr);