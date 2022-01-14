// Médias 
//medias 10,6.5,8,7.5

// let nota1 = 10
// let nota2 = 6.5
// let nota3 = 8
// let nota4 = 7.5

 // 0    1   2   3
 const notas = [10, 6.5, 8, 7.5]

 //let media = (nota1 + nota2 + nota3 + nota4)/4
            
 let media = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length
            
  console.log(media)
 
//Adicionando elementos
 const notas = [10 ,6 ,8] // 7
 notas.push()
 console.log(notas)

 let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

 console.log(media)
//Removendo elementos
const notas = [10 ,7 ,8, 5, 10]
notas.pop()
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(`A média é ${media}`)
