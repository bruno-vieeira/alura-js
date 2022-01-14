//Deletando propriedades ex:
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }
//Delete
delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined
