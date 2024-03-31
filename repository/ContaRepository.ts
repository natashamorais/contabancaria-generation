import { Conta } from "../model/Conta";


export interface ContaRepository{
    //CRUD
    procurarPorNumero( numero: number) :void;
    listarTodas():void;
    cadastrar(conta : Conta) : void;
    atualizar(conta : Conta) : void;
    deletar(numero : number) : void;

    //Bancarios
    sacar(numero: number, valor: number):void;
    depositar(numero: number, valor: number):void;
    transferir(numeroDeOrigem: number, numeroDeDestino: number, valor: number):void;
}

