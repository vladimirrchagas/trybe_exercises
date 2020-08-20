mkdir $2
cat cont.txt > cont.txt
cont=1

while [ $cont -le $1 ]
do
    echo $cont >> cont.txt
    cont=`expr $cont + 1`
done

for i in `cat cont.txt`
do
    echo "#!/bin/bash" > "./$2/exercise${i}.sh"
    chmod +x "./$2/exercise${i}.sh"
done