
import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";



export class ContaController implements ContaRepository{
    
 

    private listaContas : Array<Conta> = new Array<Conta>()

    public numero : number = 0;
    public titular : string = "";

    procurarPorTitular(titular: string) {
        let listaContasPorTitular = this.listaContas.filter(c=> c.titular.toUpperCase().includes(titular.toUpperCase()));
        for (const conta of listaContasPorTitular) {
            conta.visualizar();
            
        }

    }
    procurarPorNumero(numero: number): void {
      let buscaConta = this.buscarNoArray(numero);
      if( buscaConta !== null) 
        buscaConta.visualizar();
        else
        console.log("\nA conta não foi encontrada!");
      
     
    }
    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }
    cadastrar(conta: Conta): void {
    
        this.listaContas.push(conta);
        console.log("A conta foi adicionada")
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if( buscaConta !== null) {
        this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
        console.log(`A conta numero ${conta.numero} foi atualizada com sucesso!`)
        }else
          console.log("\nA conta não foi encontrada!")

    
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);
        if( buscaConta !== null) {
        this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1)
        console.log(`A conta numero ${numero} foi excluída com sucesso!`)
        }else
          console.log("\nA conta não foi encontrada!")
    }
    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);
        if( conta !== null) {
        if(conta.sacar(valor) === true){
            console.log(`O saque na conta ${numero} foi concluido com sucesso! `);
        }

        }

    }
    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);
        if( conta !== null) {
            conta.depositar(valor)
            console.log(`O depósito na conta ${numero} foi concluido com sucesso! `);
        }else{
            console.log("\nA conta não foi encontrada!")
        }
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if(contaOrigem !== null && contaDestino !== null){
            if(contaOrigem.sacar(valor) === true){
                contaDestino.depositar(valor);
                console.log(`A transferência da conta ${numeroOrigem} para conta ${numeroDestino} foi efetuada com sucesso!`);
            }else{
                console.log("A conta de origem e/ou a conta de destino não foram encontradas");
            }
        }
    }
    
    //MÉTODOS AUXILIARES 

    public gerarNumero():number{
        return ++ this.numero;
    }
 public buscarNoArray(numero : number): Conta | null{
 for (let conta of this.listaContas) {
    if(conta.numero === numero )
    return conta;}
return null
}
    
}