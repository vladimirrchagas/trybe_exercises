#!/bin/bash

if cd /
then
    echo "Este comando funcionou"
fi

if [ $variavel ]
then
    echo "A variável existe";
else
    echo "A variável não existe"
fi

echo "Qual a sua idade?"
read idade
if [ "$idade" -ge "16" ]
then
    echo "Você já pode votar!"
else
    echo "Você ainda não pode votar."
fi
