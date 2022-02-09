import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements Imprimivel, Comparavel<Negociacao> { // implementa a interface Imprimivel
  // private _data: Date;
  // private _quantidade: number;
  // private _valor: number;

  // constructor(data: Date, quantidade: number, valor: number) {
  //   this._data = data;
  //   this._quantidade = quantidade;
  //   this._valor = valor;
  // }

  constructor(
    private _data: Date, 
    private _quantidade: number, 
    private _valor: number
  ){}

  // pode-se, em vez de private, usar:
    // constructor(
    //   public readonly data: Date,
    //   public readonly quantidade: number,
    //   public readonly valor: number,
    // )
  // nao necessitando dos getters

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public paraTexto(): string {
    return `
      Data: ${this.data},
      Quantidade: ${this.quantidade},
      Valor: ${this.valor}
    `;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): number {
    return this._valor;
  }

  get volume(): number {
    return this._quantidade * this._valor;
  }

  public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{ // metodo static: pode ser chamado diretamento da classe (Negociacao)
    const exp = /-/g;
    const data = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(data, quantidade, valor);
  }

  public ehIgual(negociacao: Negociacao): boolean {
    return this.data.getDate() === negociacao.data.getDate() && 
    this.data.getMonth() === negociacao.data.getMonth() && 
    this.data.getFullYear() === negociacao.data.getFullYear();
  }
}
