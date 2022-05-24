class ContaPoupanca extends Conta {

    atualiza(taxa) {
        this._saldo += taxa * 2
        console.log(this._saldo)
    }
}

