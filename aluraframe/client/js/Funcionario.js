class Funcionario {

    constructor(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }
}

let funcionarioProxy = new Proxy(new Funcionario('teste@alura'), {
    set(target, prop, value, receiver) {
        console.log(`O valor que está sendo alterado é ${target[prop]}`)
        console.log(`O valor antigo era ${prop}, o valor novo é ${value}`)
        return Reflect.set(target, prop, value, receiver)
    }
})

funcionarioProxy.email = 'againplayi7@gmail.com'