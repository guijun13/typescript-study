export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    paraTexto() {
        return `
      Data: ${this.data},
      Quantidade: ${this.quantidade},
      Valor: ${this.valor}
    `;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
}
