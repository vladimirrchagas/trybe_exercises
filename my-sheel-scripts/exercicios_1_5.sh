#!/bin/bash

#Atividade 1
# echo "Shell Script é demais"

#Atividade 2
# variavel1="Shell Scrip com variáveis é demais!"
# echo $variavel1

#Atividade 3
# computador=`hostname`
# echo "Este script está rodando no computador: $computador"

#Atividade 4
# caminho="/home/vladimir/unixstuff/tttttt.sh"

# if [ -e "$caminho" ]
# then
#     echo "O caminho $caminho está habilitado!";
# else
#     echo "O caminho $caminho não existe"
# fi

# if [ -w "$caminho" ]
# then
#     echo "Você tem permição para editar $caminho";
# else
#     echo "Você NÃO foi autorizado a editar $caminho"
# fi

# #Atividade 5
# echo "Escreva um caminho por favor:"
# read caminho

# if [ -d $caminho ]
# then
#     echo "É um diretório";
# elif [ -f $caminho ]
# then
#     echo "É um arquivo comum";
# else
#     echo "É um outro arquivo"
# fi

#Atividade 6
# caminho="$1"

# if [ -d "$caminho" ]
# then
#     echo "É um diretório";
# elif [ -f "$caminho" ]
# then
#     echo "É um arquivo comum";
# else
#     echo "É um outro arquivo"
# fi

#Atividade 7
diretorio=$1

if [ -d $diretorio ]
then
    linhas=`ls -l $diretorio | find *.* | wc -l`;
    echo "O $diretorio possui $linhas arquivos";
else
    echo "$diretorio não é um diretorio"
fi