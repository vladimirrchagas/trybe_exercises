# Exercícios dia 2 - Bloco 5

## Exercícios Conteúdo

Utilizando o HTML abaixo, realizar os exercícios de 1-13:

    <div id="paiDoPai">
      <div id="pai">
        <div id="primeiroFilho"></div>
        <div id="elementoOndeVoceEsta">
          <div id="primeiroFilhoDoFilho"></div>
          <div id="segundoEUltimoFilhoDoFilho"></div>
        </div>
        Atenção!
        <div id="terceiroFilho"></div>
        <div id="quartoEUltimoFilho"></div>
      </div>
    </div>

1. Acesse o elemento elementoOndeVoceEsta.
2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
4. Acesse o primeiroFilho a partir de pai.
5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
8. Agora acesse o terceiroFilho a partir de pai.
9. Crie um irmão para elementoOndeVoceEsta.
10. Crie um filho para elementoOndeVoceEsta.
11. Crie um filho para primeiroFilhoDoFilho.
12. A partir desse filho criado, acesse terceiroFilho.
13. Remova todos os elementos da página, menos pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

## Exercícios do dia

Utilizando o HTML abaixo, realizar os exercícios de 1-13:

  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <title>Exercício 5.2</title>
      <style>
        div {
          border-color: black;
          border-style: solid;
        }

        .title {
          text-align: center;
        }

        .main-content {
          background-color: yellow;
        }

        .main-content .center-content {
          background-color: red;
          width: 50%;
          margin-left: auto;
          margin-right: auto;
        }

        .main-content .center-content p {
          font-style: italic;
        }

        .main-content .left-content {
          background-color: green;
          width: 60%;
          margin-left: 0;
          margin-right: auto;
        }

        .main-content .left-content .small-image {
          display: block;
          margin-left: auto;
          margin-right: auto;
          border-radius: 100%;
        }

        .main-content .right-content {
          background-color: blue;
          width: 60%;
          margin-left: auto;
          margin-right: 0;
        }

        .main-content .description {
          text-align: center;
        }
      </style>
    </head>
    <body>
      <script>
        // COLOQUE SEU CÓDIGO AQUI
      </script>
    </body>
  </html>

O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido entre as tags <script> e </script>.

1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
2. Adicione a tag div com a classe main-content como filho da tag body;
3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do div criado no passo 5;
8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
9. Adicione 3 tags h3, todas sendo filhas do div criado no passo 2.
