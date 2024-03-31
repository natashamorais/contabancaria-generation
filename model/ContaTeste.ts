import {Conta } from './Conta'
import { ContaCorrente } from './ContaCorrente'
import { ContaPoupanca } from './ContaPoupanca';

let c1: Conta = new Conta(254, 15, 1,"Joana D'arc", 550);
c1.visualizar( );

let cC1 : ContaCorrente =  new ContaCorrente(445,25,2,"Maria Quiteria", 850, 500);
cC1.visualizar();

let cP1: ContaPoupanca =  new ContaPoupanca(2,545,25,1,"Baba Yaga", 780)
cP1.visualizar();