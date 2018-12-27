// const pet = {
//     words: 'tom',
//     speak() {
//         console.log(this.words)
//         console.log(this === pet)
//     }
// }
// pet.speak()

// function pet(words) {
//     this.words = words
//     console.log(this.words)
//     console.log(this === global)   // 这里的global 和 浏览器的window一样 都是顶层的对象
// }
// pet('james')

function Pet(words) {
    this.words = words
    this.speak = function() {
        console.log(this.words)
        console.log(this)
    }
}
let cat = new Pet('miao')
cat.speak()