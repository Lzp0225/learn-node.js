function Pet(words) {
    this.words = words
    this.speak = function() {
        console.log(this.words)
    }
}

function Cat(words) {
    Pet.call(this, words)
    // Pet.apply(this, arguments)
}
var cat = new Cat('Cat继承了Pet的属性')
cat.speak()