export function logarTempoDeExecucao(emSegundos: boolean = false){
  return function(
    target: any, // funcao construtura da classe
    propertyKey: string, // nome do metodo
    descriptor: PropertyDescriptor // referencia para o metodo original
  ){
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: Array<any>){
      let divisor = 1;
      let unidade = 'milisegundos';
      if(emSegundos){
        divisor = 100;
        unidade = 'segundos';
      }
      const t1 = performance.now(); // pega o tempo antes da chamada do metodo
      
      const retorno = metodoOriginal.apply(this, args);

      const t2 = performance.now(); // pega o tempo depois da chamada do metodo

      console.log(`${propertyKey}(), tempo de execucao: ${(t2 - t1) / divisor} ${unidade}.`);

      retorno;
    };

    return descriptor;
  }
}