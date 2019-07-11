// Script para Definir se a pessoa é um mono Darius de responsa

/*
let nomeDoUsuario = ('Qual o seu nome?');
let mainChamp = prompt('Qual o seu personagem principal?');
let fragKDA = prompt('Quantos inimigos, você matou em sequência hoje?');
let monoDarius = ('Você é um mono Darius de respeito!');

if (monoDarius){
    alert('Você tem um ótimo bom gosto cara.');
}
else if (String(nomeDoUsuario) = 'Darius' && Number(fragKDA) >=6) {
    alert('Assim, você deveria rever os seus conceitos...');
}
else {
    alert('Cara, que decepção!');
}
*/

let aluno = prompt('Qual o nome do aluno?');
let materia = prompt('Qual o nome da matéria?');
let nota = prompt('E qual foi a nota?');

let media = 7;

if (Number(nota) >= media) {
    alert(`Parabéns, o aluno ${aluno} foi aprovado na matéria ${materia}!`);
}
else if (Number(nota) >= media - 0.5) {
    alert(`O aluno ${aluno} foi aprovado na matéria ${materia} pelo sistema!`);
}
else {
    alert (`Parece que a nota do aluno ${aluno} na matéria ${materia} foi insuficiente`);
}