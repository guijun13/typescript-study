import { View } from "./view.js";

export class MensagemView extends View<string> { // passando tipo string para a View (generics)

  template(model: string): string{
    return `
      <p class="alert alert-info">${model}</p>
    `
  }
}