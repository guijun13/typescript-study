import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View {
  template(model: Negociacoes): string{ // declara a template da view
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
          ${model.listaNegociacoes().map(negociacao => {
            return `
              <tr>
                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
            `
          }).join('')}
        </tbody>
      </table>
    `;
  }

  update(model: Negociacoes): void{ // renderiza o template
    const template = this.template(model);
    console.log(template);
    this.elemento.innerHTML = template;
  }
}