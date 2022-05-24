class Conta {
    constructor(saldo=0) {
        this._saldo = saldo
    }

    get saldo() {
        return this._saldo
    }

    atualiza(taxa=0) {
        throw new Error('Você deve sobrescrever o método!')
    }
}