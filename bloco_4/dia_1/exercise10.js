/*
Peão = Pawn
Bispo = Bishop
Cavalo = Knight
Torre = Rook
Dama = Queen
Rei = King
*/
const nomeDaPeca = "Queen";

switch (nomeDaPeca.toLowerCase()){
    case ("pawn"):
        console.log("Pawn(Peão) -> Para frente duas casas, primeira jogada, e para frente uma casa demais jogadas, ataque somente uma casa nas diagonais frontais");
        break;
    case ("bishop"):
        console.log("Bishop(Bispo) -> Movimento e ataque em diagonal sem restrição de quantidade de casas");
        break;
    case ("knight"):
        console.log("Knight(Cavalo) -> Movimento e ataques em L (tres casas no sentido inicial, e uma casa para esquerda ou direita para fechar o L");
        break;
    case ("rook"):
        console.log("Rook(Torre) -> Movimento e ataques na horizontal ou vertical sem restrição de quantidade de casas");
        break;
    case ("queen"):
        console.log("Queen(Rainha) -> Movimento e ataque para todas as direções sem restrição de quantidade de casas")
        break;
    case ("king"):
        console.log("King(Rei) -> Movimento e ataque para todas as direções com restrição de uma casa");
        break;
    default:
        console.log("Nome de peça informada não é uma peça de Xadrez!")
}