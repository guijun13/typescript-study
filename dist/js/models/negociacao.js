export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    // constructor(data: Date, quantidade: number, valor: number) {
    //   this._data = data;
    //   this._quantidade = quantidade;
    //   this._valor = valor;
    // }
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    // pode-se, em vez de private, usar:
    // constructor(
    //   public readonly data: Date,
    //   public readonly quantidade: number,
    //   public readonly valor: number,
    // )
    // nao necessitando dos getters
    get data() {
        const data = new Date(this._data.getTime());
        return data;
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
