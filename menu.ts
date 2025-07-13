import readlinesync = require("readline-sync");
import { Colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
export function main() {

    let opcao: number;

    while (true) {

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
        

        if (opcao == 9) {
            console.log(Colors.fg.greenstrong,)
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(Colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(Colors.fg.whitestrong,
                "\n\nCriar Conta\n\n", Colors.reset);

                keyPress()
                break;
            case 2:
                console.log(Colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", Colors.reset);

                keyPress()
                break;
            case 3:
                console.log(Colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por número\n\n", Colors.reset);

                keyPress()
                break;
            case 4:
                console.log(Colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", Colors.reset);

                keyPress()
                break;
            case 5:
                console.log(Colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", Colors.reset);

                keyPress()
                break;
            case 6:
                console.log(Colors.fg.whitestrong,
                    "\n\nSaque\n\n", Colors.reset);

                keyPress()
                break;
            case 7:
                console.log(Colors.fg.whitestrong,
                    "\n\nDepósito\n\n", Colors.reset);

                keyPress()    
                break;
            case 8:
                console.log(Colors.fg.whitestrong,
                    "\n\nTransferência entre Contas\n\n", Colors.reset);
                
                keyPress()
                break;
            default:
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