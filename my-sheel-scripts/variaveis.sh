#/bin/bash

#variável recebendo valor do comando whoami
variavel= whoami
echo $variavel

#variável recebendo o valor texto whoami
variavel=whoami
echo $variavel

#variável recebendo uma frase
variavel="Eu sou um usuário"
echo $variavel

#variável recebendo uma frase com um valor de outra variável dentro do texto
variavel="Eu estou logado como usuário `whoami`"
echo $variavel

#variável recebendo somente a frase
variavel="Eu estou logado como usuário whoami"
echo $variavel

echo "Digite sua idade: "
read idade

echo "eu tenho $idade anos de idade"