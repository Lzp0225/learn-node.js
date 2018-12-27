let pet = {
    words: 'tom~',
    speak(say) {
        console.log(say + ' - ' + this.words)
    }
}

let cat = {
    words: 'Miao'
}

pet.speak.call(cat, 'Tmmmmm')  // 这里call()把pet.speak()内的this指向变成了cat  this.words相当于cat.words
// pet.speak.apply(cat, ['Tmmmmm']) apply() 与 call()作用一样 只是接受的参数方式不一样