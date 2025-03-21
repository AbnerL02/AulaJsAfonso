// var lista = ['Abner', 'Lucas', 'Santos'];
// console.log (lista)

// console.log(lista[2]);
// console.log(lista[0]);

// lista.push('Alvarenga');
// console.log(lista);

// lista.pop();
// console.log(lista.length)


function Alunos(nome,nota){
    this.nome = nome
    this.nota = nota
}

let listDeAlunos = []

let abner = new Alunos("Abner",10)
listDeAlunos.push(abner)

let marcos = new Alunos("Marcos",8)
listDeAlunos.push(marcos)

listDeAlunos.forEach(aluno =>{
    console.log(`Aluno: ${aluno.nome} , nota: ${aluno.nota}`)
})
