class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        //cria um Arquivo com as suas propriedades;
        let dados = this._inputDados.value.split('/').map(item => item.toUpperCase());
        let arquivo = new Arquivo(...dados)
        console.log(`Dados do arquivo: Nome: ${arquivo.nome + '.' + arquivo.tipo}, Tamanho: ${arquivo.tamanho}, Tipo: ${arquivo.tipo}`)
        // exibe mensagem no console com os dados do arquivo.
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}