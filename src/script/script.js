//transforma o elemento em variavel 
const mario = document.querySelector('.mario');

//transforma o elemento em variavel
const pipe = document.querySelector('.pipe');

//funçao para aontrolar o pulo 
const jump = () => {
    //adicionar classe pulo ao mario
    mario.classList.add('jump');
   
    //remover a classe apos 500ms para executar o comendo novamente
    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500)
}

//controle de loop do tubo
const loop = setInterval(()=>{
    
    //pegar posiçao do tubo
    const pipePosition = pipe.offsetLeft;

    //coletar a posiçao do mario retirando a string px do resultado obs: o + antes é para o codigo converter o resultado de texto para numero 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
 
    // se o tubo chega a determinada posição executar codigo
    if(pipePosition <= 110 && pipePosition > 0 && marioPosition < 80){
        
        //retirar a animação do tubo
        pipe.style.animation = 'none';
        
        //parar na posiçao coletada no tubo
        pipe.style.left = `${pipePosition}px`;

         //retirar a animação do mario
         mario.style.animation = 'none';
        
         //parar na posiçao coletada no nmario 
         mario.style.bottom = `${marioPosition}px`;

         //estilizando a imagemd o mario para a imagem de game over
         mario.src = 'src/img/game-over.png';
         mario.style.width ='75px';
         mario.style.margin ='50px';

         //parar o loop
         clearInterval(loop);  
     }  
    } 
, 10);

function reload(){
    location.reload()
}

//evento para pular
document.addEventListener('keydown', jump);