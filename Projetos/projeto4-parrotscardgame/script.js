
// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}


let numero_cards = prompt("digite um numero par");
while(numero_cards%2 != 0){
     numero_cards = prompt("digite um numero par");
}


//cria minhas cartas viradas pra baixo
//pegar elemento lista
let imagem = "./img/1.gif";
//document.querySelector("ul").innerHTML = `<li><div class="card"><img src=${imagem}></div></li>`;

const card_front = `<li><div class="card" onclick="turn(this)"><img src="./img/front.png" alt=""></div></li>`;
let array_img_indices = [];

//crio minhas cartas viradas pra baixo
for(let i = 0; i < numero_cards;i++){
    document.querySelector(".front").innerHTML += card_front;
    
    //colocando numeros de cards no meu vetor para usar pra colocar a imagem  
        array_img_indices.push(i);

}
alert(array_img_indices);



//cria minhas cartas viradas pra cima
array_img_indices.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
alert(array_img_indices);

let card_back ="";
let img_name ="";
for(let i = 0; i < numero_cards;i++){
    img_name = `mem (${array_img_indices[i]+1}).gif`;
    //mem (13).gif
    card_back = `<li><div class="card" onclick="turn(this)"><img src="./img/${img_name}" alt=""></div></li>`;
    document.querySelector(".back").innerHTML += card_back;
}


function turn(elemento){
    let carta = elemento;
    console.log(carta);
    elemento.classList.toggle("esconde");   
}
