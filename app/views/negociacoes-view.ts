export class NegociacoesView {
  
  private elemento: HTMLElement;
  
  constructor(seletor: string){
    this.elemento = document.querySelector(seletor);
  }

  template(): string{ // declara a template da view
    return `
      <table class="table table-hover table-bordered">
        <thdead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thread>
        <tbody>
        </tbody>
      </table>
    `;
  }

  update(): void{ // renderiza o template
    this.elemento.innerHTML = this.template();
  }
}