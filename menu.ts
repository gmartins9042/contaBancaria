import readlinesync = require("readline-sync");
import { colors } from "./src/util/colors";
import { Conta } from "./src/model/conta";
export function main() {

    let opcao: number;

    const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

    while (true) {

        console.log("______________________________________________________");
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
        console.log(" |||||||||||||||||||||||||||||||||||||||||||||||||||| ");
        console.log("                                                      ");

        opcao = readlinesync.questionInt("Entre com a opção desejada: ");
        

        if (opcao == 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

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


main();