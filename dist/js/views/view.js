// classe view abstrata -> nao pode criar uma instacia diretamente dela,
// somente se um filho herda uma instancia dela
export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        if (escapar) { // if escapar == true
            this.escapar = escapar;
        }
    }
    // utilizem o metodo 'template' nelas
    // com protected, somente o pai e as filhas podem usar o metodo
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
