let lancesDeEscada = Number(prompt('Quantos lances de escada você gostaria?'));

while(isNaN(lancesDeEscada)) {
    lancesDeEscada = Number(prompt(`Você digitou ${lancesDeEscada}. O programa só aceita valores numéricos nessa etapa. Por favor, digite quantos lances de escada você gostaria`));
}

let material = prompt('Qual o material da sua escada?');
let desenho = '';

let i = 0;

while (i < lancesDeEscada) {
    desenho = desenho + material;
    console.log(desenho);

    i ++
}