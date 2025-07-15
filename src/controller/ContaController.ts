import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { Colors } from "../util/Colors";
export class ContaController implements ContaRepository {

    private listasContas: Conta[] = [];
    numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        } else {
            console.log(Colors.fg.red, `\nA Conta numero: ${numero} nao foi encontrado"`, Colors.reset);
        }
    }
    listarTodas(): void {
        for (let conta of this.listasContas) {
            conta.visualizar();
        };
    }
    cadastrar(conta: Conta): void {
        this.listasContas.push(conta);
        console.log(Colors.fg.green, "\nA Conta numero: " + conta.numero + "foi criada com sucesso!", Colors.reset);

    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listasContas[this.listasContas.indexOf(buscaConta)] = conta;
            console.log(Colors.fg.green, "\nA Conta numero: " + conta.numero + " foi atualizada com sucesso!", Colors.reset);
        } else {
            console.log(Colors.fg.red, "\nA Conta numero: " + conta.numero + " não foi encontrada!", Colors.reset);
        }
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listasContas.slice(this.listasContas.indexOf(buscaConta), + 1);
            console.log(Colors.fg.green, `\nA Conta numero: ${numero} foi apagada com sucesso!`, Colors.reset);
        } else {
            console.log(Colors.fg.red, `\nA Conta numero: ${numero} foi apagada com sucesso!`, Colors.reset);
        }
    }
    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {

            if (conta.sacar(valor) == true)
                console.log(Colors.fg.green, "\nO Saque na Conta numero: " + numero +
                    " foi efetuado com sucesso!", Colors.reset);

        } else {
            console.log(Colors.fg.red, "\nA Conta numero: " + numero +
                " não foi encontrada!", Colors.reset);

        }
    }
    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.depositar(valor);
            console.log(Colors.fg.green, `\nO Deposito na Conta numero: ${numero} foi efetuado com sucesso!`, Colors.reset);
        } else {
            console.log(Colors.fg.red, `\nA Conta numero: ${numero} nao foi encontrada!`, Colors.reset);
        }
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem != null && contaDestino != null) {
            if (contaOrigem.sacar(valor) == true) {
                contaDestino.depositar(valor);
                console.log(Colors.fg.green, `\nA Transferencia da Conta numero: ${numeroOrigem} para a Conta numero: ${numeroDestino} foi efetuada com sucesso!`, Colors.reset);
            }
        } else {
            console.log(Colors.fg.red, `\nA Conta numero: ${numeroOrigem} e/ou a Conta numero: ${numeroDestino} nao foram encontradas!`, Colors.reset);
        }
    }
    gerarNumero(): number {
        return ++this.numero;
    }
    buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listasContas) {
            if (conta.numero === numero)
                return conta;
        }
        return null;
    }
}

