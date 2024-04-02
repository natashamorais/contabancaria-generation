
import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";



export class ContaController implements ContaRepository{

    private listaContas : Array<Conta> = new Array<Conta>()

    public numero : number = 0;

    procurarPorNumero(numero: number): void {
      let buscaConta = this.buscarNoArray(numero);
      if( buscaConta !== null) 
        buscaConta.visualizar()
        else
        console.log("\nA conta não foi encontrada!")
      
     
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
            conta.sacar(valor)

        }

    }
    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);
        if( conta !== null) {
            conta.depositar(valor)

        }else{
            console.log("\n A conta não é valida")
        }
    }
    transferir(numeroDeOrigem: number, numeroDeDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
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