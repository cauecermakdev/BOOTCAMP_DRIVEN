
// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}


let numero_cards = prompt("digite um numero par");
while(numero_cards%2 != 0){
     numero_cards = prompt("digite um numero par");
}



//cria array e embaralha
let array_img_indices = [];
for(let i = 0; i < numero_cards;i++){
    array_img_indices.push(i);
}

//embaralha
array_img_indices.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

let img_name = "";
let img_id = 0;
//crio minhas cartas com duas imagens sendo que a back está escondida
for(let i = 0; i < numero_cards;i++){
    img_name = `mem (${array_img_indices[i]+1}).gif`;
    img_id = array_img_indices[i]+1;
    let card = `<li><div class="card" onclick="turn(this)"><img src="./img/front.png" alt=""><img class ="escondido" id="${img_id}" src="./img/${img_name}" alt=""></div></li>`;
    
    document.querySelector("ul").innerHTML += card;  
}



function turn(elemento){
        
    //front
    const carta_front = elemento.children[0];   
    //back
    const carta_back = elemento.children[1];   

    //coloco escondido no front 
    carta_front.classList.toggle("escondido");

    //tiro escondido do back
    carta_back.classList.toggle("escondido");



    /*
    //é a primeira carta?
    if(document.querySelector(".ativo") == false){
         //coloca ativo
        elemento.classList.add("ativo");

        //mostra back


    }
   */
    
    



    

}



