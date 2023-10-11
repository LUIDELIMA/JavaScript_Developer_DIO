//------Class----//
//A classe é como objeto deve ser  //
class Pessoa {
    nome;
    idade;

    descrevar() {
        console.log(`Meu nome é  ${this.nome} e minha idade é  ${this.idade}`);
    }
}
// Em baixo encontra as instâncias uma ocorrecia    //

const Luide = new Pessoa();
Luide.nome = 'Luide lima';
Luide.idade =39;

const Edson = new Pessoa();
Edson.nome = 'Edson';
Edson.idade =35;


Luide.descrevar();
Edson.descrevar();
//------------------------------------------------------------------------------------//

  //Funções recebendo objeto//
class pessoa {
    nome;
    idade;
    anoDeNacimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNacimento = 2023 - idade;
    }

    descrevar() {
        console.log(`Meu nome é  ${this.nome} e minha idade é  ${this.idade}`);
    }
}


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} e mais velho(a) que ${p2.nome}`);
    }else if(p2.idade > p1.idade) {
        console.log(`${p2.nome} e mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e  ${p2.nome} tem a mesma idade`);
    }
}

const luide = new pessoa('Luide', 39);
const edson = new pessoa('Edson', 35);

compararPessoas(luide, edson);