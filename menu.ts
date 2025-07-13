//Importando
import readlinesync = require("readline-sync");
import { Colors } from "./src/util/Colors";
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

//exportando a funcao
export function main() {

//variavel
    let opcao: number;


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
            console.log(Colors.fg.greenstrong,)
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(Colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            //opcao criar uma conta
            case 1:
                console.log(Colors.fg.whitestrong,
                "\n\nCriar Conta\n\n", Colors.reset);

                keyPress()
                break;
            case 2:
                //opcap listar as contas
                console.log(Colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", Colors.reset);

                keyPress()
                break;
            case 3:
                //opcao consultar dados da conta
                console.log(Colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por número\n\n", Colors.reset);

                keyPress()
                break;
            case 4:
                //opcao atualizacao do dados da Conta
                console.log(Colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", Colors.reset);

                keyPress()
                break;
            case 5:
                //opcao apagar a conta
                console.log(Colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", Colors.reset);

                keyPress()
                break;
            case 6:
                //opcao sacar
                console.log(Colors.fg.whitestrong,
                    "\n\nSaque\n\n", Colors.reset);

                keyPress()
                break;
            case 7:
                //opcao depositar
                console.log(Colors.fg.whitestrong,
                    "\n\nDepósito\n\n", Colors.reset);

                keyPress()    
                break;
            case 8:
                //opcao tranferencia
                console.log(Colors.fg.whitestrong,
                    "\n\nTransferência entre Contas\n\n", Colors.reset);
                
                keyPress()
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