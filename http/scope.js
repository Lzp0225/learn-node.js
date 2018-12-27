const globalVariable = 'this is global variable'

function globalFunction() {
    const localVariable = 'this is local variable'
    console.log(globalVariable, ',', localVariable)
}
globalFunction()