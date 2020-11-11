window.onload = function() {
  updateVisit();

  // Atualiza a quantidade de visitar no site, utilizando o LocalStorage
  function updateVisit() {
    if (typeof (Storage) != "undefined") {
      if(localStorage.count !== undefined) {
        let count = parseInt(localStorage.count);
        count+=1;
        localStorage.count = count;
        document.getElementById("count").innerHTML = count;
      } else {
        localStorage.count = 1;
        document.getElementById("count").innerHTML = 1;
      }
    } else {
      document.write("Sem suporte para Web Storage");
    }  
  }

  if (parseInt(localStorage.count) < 150) {
    pyramidConstruction();
  } else {
    localStorage.clear();
    updateVisit();
    pyramidConstruction();
  }

  function pyramidConstruction() {
    let basePyramid;
    
    if (parseInt(localStorage.count) % 2 == 0) {
      basePyramid = parseInt(localStorage.count) - 1;
    } else {
      basePyramid = parseInt(localStorage.count);
    }
    
    let numberOfLines = (basePyramid + 1) / 2; // Dinâmico
    let controlLeft = numberOfLines; // Dinâmico
    let controlRight = numberOfLines; // Dinâmico

    for (let index = 0; index < document.querySelectorAll(".line").length; index += 1) {
      document.querySelector('.triangle').removeChild(document.querySelectorAll(".line")[index]);
    }

    for (let index = 0; index < numberOfLines; index += 1) {
      let pyramidLine = document.createElement('div');
      pyramidLine.className = 'line';
      document.querySelector('.triangle').appendChild(pyramidLine);
    }

    let lines = document.querySelectorAll(".line");

    fillTriangle(lines);

    // Passa por todos as linhas (div com class line) e preenche o triangulo
    function fillTriangle(lines) {
      for(let index = 0; index < lines.length; index += 1) {
        fillLine(lines[index]);
        controlRight += 1;
        controlLeft -= 1;
      }
    }

    // Cria uma caixa com base nas diferentes classes
    function createBox(className) {
      let box = document.createElement("div");
      box.className = className;
      return box;
    }

    // Preenche uma linha
    function fillLine(divLine) {
      for (let lineColumn = 1; lineColumn <= basePyramid; lineColumn += 1) {
        if(lineColumn >= controlLeft && lineColumn <= controlRight) {
          let box = createBox("box");
          divLine.appendChild(box);
        } else {
          divLine.appendChild(createBox("box-empty"));
        }
      }
    }
  }
}
