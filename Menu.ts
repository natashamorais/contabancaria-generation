import readlinesync = require('readline-sync');
import {Conta} from './model/Conta'

export function menu (){
    let opcao:number;
    
    let c1: Conta = new Conta(1, 123,1,"Natasha", 1000000 )

    //c1.visualizar()


    c1.depositar(1500);
    c1.visualizar()



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
console.log("9 - SAIR ");
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
 break;

 case 2: 
 console.log("\nLISTAR TODAS AS CONTAS\n");
 break;

 case 3: 
 console.log("\nCONSULTAR CONTA POR NUMERO\n");
 break;

 case 4: 
 console.log("\nATUALIZAR DADOS DA CONTA\n");
 break;

 case 5: 
 console.log("\nAPAGAR A CONTA\n");
 break;

 case 6: 
 console.log("\nSAQUE\n");
 break;

 case 7: 
 console.log("\nDEPÓSITO\n");
 break;

 case 8: 
 console.log("\nTRANSEFERÊNCIA ENTRE CONTAS\n");
 break;

 default:
 console.log("\nOPÇÃO INVÁLIDA!\n");
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
 menu()