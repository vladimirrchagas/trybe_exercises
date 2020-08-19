#!/bin/bash

usuarioAtual=`whoami`
diretorioAtual=`pwd`

echo "Digite seu nome:"
read nome

echo "Digite sua idade: "
read idade

echo "Seu nome é " $nome
echo "Sua idade é " $idade
echo "O usuário nesse computador é o " $usuarioAtual
echo "O diretório atual é " $diretorioAtual

read -p "Qual a sua cidade: " cidade
echo "Minha cidade é: "$cidade