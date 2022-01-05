export class Negociacao {
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
}
