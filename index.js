

function receivesAFunction(Spy) {
    Spy();
}

function returnsANamedFunction() {
    return function name() {};
}

function returnsAnAnonymousFunction() {
    return function () {} ;
}