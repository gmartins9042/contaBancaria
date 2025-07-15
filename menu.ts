//Importando
import readlinesync = require("readline-sync");
import { Colors } from "./src/util/Colors";
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from "./src/controller/ContaController";

//exportando a funcao
export function main() {

    //Instancia da Classe ContaController
    let contas: ContaController = new ContaController();

    //variavel
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];


    // Objeto da Classe ContaCorrente (Teste)
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    // Objeto da Classe ContaPoupanca (teste)
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();


    while (true) {
        //Menu do Banco do Brazil com Z
        console.log(Colors.bg.black, Colors.fg.yellow,
            "______________________________________________________");
        console.log("|                                                     |");
        console.log("|                BANCO DO BRAZIL COM Z                |");
        console.log("|                                                     |");
        console.log("|_____________________________________________________|");
        console.log("|                                                     |");
        console.log("|            1 - Criar Conta                          |");
        console.log("|=====================================================|");
        console.log("|            2 - Listar todas as Contas               |");
        console.log("|=====================================================|");
        console.log("|            3 - Buscar Conta por Numero              |");
        console.log("|=====================================================|");
        console.log("|            4 - Atualizar Dados da Conta             |");
        console.log("|=====================================================|");
        console.log("|            5 - Apagar Conta                         |");
        console.log("|=====================================================|");
        console.log("|            6 - Sacar                                |");
        console.log("|=====================================================|");
        console.log("|            7 - Depositar                            |");
        console.log("|=====================================================|");
        console.log("|            8 - Transferir valores entre Contas      |");
        console.log("|=====================================================|");
        console.log("|            9 - Sair                                 |");
        console.log("|=====================================================|");
        console.log(" ||||||||||||||||||||||||||||||||||||||||||||||||||||  ");
        console.log("                                                       ",
            Colors.reset);
        opcao = readlinesync.questionInt("Entre com a opção desejada: ");

        //opcao sair
        if (opcao == 9) {
            console.log(Colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(Colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            //opcao criar uma conta

            case 1:
                console.log(Colors.fg.whitestrong, "\n\nCriar Conta\n\n", Colors.reset);

                console.log("Digite o Número da agência: ");
                agencia = readlinesync.questionInt("");

                console.log("Digite o Nome do Titular da conta: ");
                titular = readlinesync.question("");

                console.log("\nDigite o tipo da Conta: ");
                tipo = readlinesync.keyInSelect(tiposContas, "", { cancel: false }) + 1;

                console.log("\nDigite o Saldo da conta (R$): ");
                saldo = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta (R$): ");
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        );
                        break;
                    case 2:
                        console.log("Digite o Dia do aniversário da Conta Poupança: ");
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        );
                        break;
                }

                keyPress();
                break;

            case 2:
                //opcap listar as contas
                console.log(Colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", Colors.reset);

                contas.listarTodas();

                keyPress()
                break;
            case 3:
                //opcao consultar dados da conta
                console.log(Colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por número\n\n", Colors.reset);

                console.log("Digite o numero da Conta: ");
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(Colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", Colors.reset);

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta != null) {

                    console.log("Digite o Número da agência: ");
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o Nome do Titular da conta: ");
                    titular = readlinesync.question("");

                    tipo = conta.tipo;

                    console.log("\nDigite o Saldo da conta (R$): ");
                    saldo = readlinesync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Limite da Conta (R$): ");
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            console.log("Digite o Dia do aniversário da Conta Poupança: ");
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                            break;
                    }

                } else {
                    console.log(Colors.fg.red, "\nA Conta numero: " + numero + " não foi encontrada!", Colors.reset);
                }

                keyPress();
                break;
            case 5:
                console.log(Colors.fg.whitestrong, '\n\nApagar uma Conta\n\n', Colors.reset);

                console.log("Digite o numero da Conta: ");
                numero = readlinesync.questionInt("");
                contas.deletar(numero);
                keyPress()
                break;
            case 6:
                //opcao sacar
                console.log(Colors.fg.whitestrong,
                    "\n\nSaque\n\n", Colors.reset);

                console.log("Digite o numero da Conta: ");
                numero = readlinesync.questionInt("");

                console.log("\nDigite o valor do Saque (R$): ");
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor);

                keyPress()
                break;
            case 7:
                //opcao depositar
                console.log(Colors.fg.whitestrong,
                    "\n\nDepósito\n\n", Colors.reset);
                console.log("Digite o numero da Conta: ");
                numero = readlinesync.questionInt("");

                console.log("\nDigite o valor do Deposito (R$): ");
                valor = readlinesync.questionFloat("");

                contas.depositar(numero, valor);

                keyPress()
                break;
            case 8:
                //opcao transferencia
                console.log(Colors.fg.whitestrong,
                    "\n\nTransferência entre Contas\n\n", Colors.reset);

                console.log("Digite o numero da Conta de Origem:");
                let numeroOrigem = readlinesync.questionInt("");

                console.log("Digite o numero da Conta de Destino:");
                numeroDestino = readlinesync.questionInt("");

                console.log("\nDigite o valor da Transferência (R$): ");
                valor = readlinesync.questionFloat("");

                contas.transferir(numeroOrigem, numeroDestino, valor);

                keyPress();
                break;

            default:
                //opcao invalida
                console.log(Colors.fg.whitestrong,
                    "\nOpção Inválida!\n", Colors.reset);

                keyPress()
                break;
        }
    }

}

//Minhas informações
export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Gabriel Martins ");
    console.log("https://github.com/gmartins9042/contaBancaria");
    console.log("https://www.linkedin.com/in/gabrielmartins-/");

    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(Colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();