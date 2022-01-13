// let x = "";
// console.log(x);
// x = "oi";

// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
//2 -> valor de soma()
  function imprimeTexto(texto) {
  console.log(texto)
 }
                      
 // 2) executa a função (1 ou + vezes)
                      
 imprimeTexto(soma());
  // imprimeTexto("outro texto");
 // três formas de escrever funções
                      
    function soma(){
 //outros códigos
 //vários console.log()
    return 2 + 2;
}   // console.log(soma())
//Ex de funções 
function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')

 //Função com return 
   function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

 //Função com return e mais de um param
   function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   operacaoMatematica(15, 30, 45) // 90