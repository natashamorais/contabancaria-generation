import readlinesync = require('readline-sync');
import {Conta} from './model/Conta'
import { ContaController } from './controller/ContaController';
import { ContaCorrente } from './model/ContaCorrente';
import { ContaPoupanca } from './model/ContaPoupanca';

export function menu (){

    let opcao:number, numero:number, agencia:number, tipo:number,saldo:number,limite:number,aniversario:number,valor:number,numeroOrigem:number, numeroDestino:number;
    let titular: string;
    const tipoContas = ["Conta Corrente", "Conta Poupanca"]; 


    let contas: ContaController = new ContaController();

    let cC: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123,1,"Natasha", 1000, 580 )
    let cP: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 123,1,"Natasha", 1000, 5)
    contas.cadastrar(cP);
     contas.cadastrar(cC);

    


    while(true){
        

console.log("************************************************");
console.log("BANCO DO BRAZIL COM Z");
console.log("  ");
console.log("1 - CRIAR CONTA ")
console.log("2 - LISTAR TODAS AS CONTAS ");
console.log("3 - BUSCAR CONTA POR NUMERO ");
console.log("4 - ATUALIZAR DADOS DA CONTA ");
console.log("5 - APAGAR CONTA ");
console.log("6 - SACAR ");
console.log("7 - DEPOSITAR ");
console.log("8 - TRANSFERIR VALORES ENTRE CONTAS");
console.log("9 - CONSULTAR POR NOME ");
console.log("0 - PRESSIONE 0 PARA SAIR ");
console.log("  ");
console.log("************************************************");

console.log( "DIGITE A OPÇÃO DESEJADA: ");
opcao = readlinesync.questionInt("");
if(opcao == 9){
    console.log("\nBANCO DO BRAZIL COM Z -  O SEU FUTURO COMEÇA AQUI!");
    sobre();
    process.exit(0);
}

switch(opcao){
 case 1: 
 console.log("\nCRIAR CONTA\n");

 console.log("Digite o número da Agência: ")
 agencia = readlinesync.questionInt("");

 console.log("Digite o nome do titular: ")
 titular = readlinesync.question("");

 console.log("Informe o tipo da conta:  ")
 tipo = readlinesync.keyInSelect(tipoContas, "", {cancel:false}) + 1;

 console.log("Digite o saldo da conta: ")
 saldo = readlinesync.questionFloat("");

 switch(tipo){
    case 1: 
        console.log("Digite o limite da conta: ")
        limite = readlinesync.questionFloat("");
        contas.cadastrar(
            new ContaCorrente(contas.gerarNumero(), agencia,tipo,titular,saldo,limite)
        );
        break;

    case 2: 
        console.log("Digite o dia do aniversário da conta: ")
        aniversario = readlinesync.questionInt("");
        contas.cadastrar(
            new ContaPoupanca(contas.gerarNumero(), agencia,tipo,titular,saldo,aniversario)
        );
        break;   
 };

 keyPress()
 break;1


 case 2: 
 console.log("\nLISTAR TODAS AS CONTAS\n");
 contas.listarTodas()
 keyPress()

 break;

 case 3: 
 console.log("\nCONSULTAR CONTA POR NUMERO\n");
 
 console.log("Digite o número da conta: ")
 numero = readlinesync.questionInt("");
 contas.procurarPorNumero(numero)
 keyPress()
 break;

 case 4: 
 console.log("\nATUALIZAR DADOS DA CONTA\n");

 
 console.log("Digite o número da conta: ");
 numero = readlinesync.questionInt("");

 let conta = contas.buscarNoArray(numero);
 
 if(conta !== null){

    console.log("Digite o número da Agência: ")
 agencia = readlinesync.questionInt("");

 console.log("Digite o nome do titular: ")
 titular = readlinesync.question("");

 console.log("Informe o tipo da conta:  ")
 tipo = conta.tipo;

 console.log("Digite o saldo da conta: ")
 saldo = readlinesync.questionFloat("");

 switch(tipo){
    case 1: 
        console.log("Digite o limite da conta: ")
        limite = readlinesync.questionFloat("");
        contas.atualizar(
            new ContaCorrente(numero, agencia,tipo,titular,saldo,limite)
        );
        break;

    case 2: 
        console.log("Digite o dia do aniversário da conta: ")
        aniversario = readlinesync.questionInt("");
        contas.atualizar(
            new ContaPoupanca(numero, agencia,tipo,titular,saldo,aniversario)
        );
        break;   
 };

 }else{
    console.log("\nA conta não foi encontrada!")
 }

 keyPress()
 break;

 case 5: 

 console.log("\nAPAGAR A CONTA\n");

 console.log("Digite o número da conta: ");
 numero = readlinesync.questionInt("");


 console.log("A conta foi excluída!");

 keyPress()
 break;

 case 6: 
 console.log("\nSAQUE\n");

 console.log("Digite o número da conta: ");
 numero = readlinesync.questionInt("");

 console.log("Digite o valor para o saque: ")
 valor = readlinesync.questionFloat("");

 contas.sacar(numero, valor);

 keyPress()
 break;

 case 7: 
 console.log("\nDEPÓSITO\n");
 
 console.log("Digite o número da conta: ");
 numero = readlinesync.questionInt("");

 console.log("Digite o valor para o depósito: ")
 valor = readlinesync.questionFloat("");

 contas.depositar(numero, valor);

 keyPress()
 break;

 case 8: 
 console.log("\nTRANSEFERÊNCIA ENTRE CONTAS\n");

 console.log("Digite o número da conta de origem: ");
 numeroOrigem = readlinesync.questionInt("");

 console.log("Digite o número da conta de origem:: ")
 numeroDestino = readlinesync.questionFloat("");

 console.log("Digite o valor para o depósito: ")
 valor = readlinesync.questionFloat("");

 contas.transferir(numeroOrigem,numeroDestino,valor);
 keyPress()
 break;

 case 9: 
 console.log("\nTRANSEFERÊNCIA ENTRE CONTAS\n");
 console.log("Digite o nome do titular: ")
 titular = readlinesync.question("");

 contas.procurarPorTitular(titular)

 
 keyPress()
 break;

 default:
 console.log("\nOPÇÃO INVÁLIDA!\n"); 
 keyPress()
 break;


}

}
}


function sobre() : void{
    console.log("\n************************************************");
    console.log("Projeto desenvolvido por: ")
    console.log("Natasha Morais - natasha.sousa.morais@gmail.com")
    console.log("github.com/natashamorais")
    console.log("\n************************************************");

}
function keyPress(): void{
    console.log("\nPressione enter para continuar");
    readlinesync.prompt();
}
 menu()