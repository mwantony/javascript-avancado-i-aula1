class ContaCorrente extends Conta {

    atualiza(taxa) {
        this._saldo += taxa
        console.log(this.saldo)
    }
}

