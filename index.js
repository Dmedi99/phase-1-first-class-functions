function receivesAFunction(aFunction){
    aFunction()
    return `I called back a function! :)`
}

function returnsANamedFunction(){
    function aNamedFunction(){
        return aNamedFunction
    }
return aNamedFunction()
}

function returnsAnAnonymousFunction(){
    return function(){
        return `I am returning an anonymous function!`
    }
}