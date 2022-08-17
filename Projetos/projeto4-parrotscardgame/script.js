let numero_cartas_viradas = 0;
//let carta_anterior;
let x_jogadas = 0;

let cartas_abertas = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}


let numero_cards = prompt("digite um numero par");

while((numero_cards%2 != 0) || (numero_cards=="")||numero_cards<4||numero_cards>14){
     numero_cards = prompt("digite um numero par de 4 a 14");
}

function start(){
    numero_cartas_viradas = 0;

    //cria array e embaralha
    let array_img_indices = [];
    for(let i = 0; i < numero_cards;i++){
        array_img_indices.push(i+1);
    }
    //alert(array_img_indices);

    //embaralha
    array_img_indices.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
    //alert(array_img_indices);

    let img_name = "";
    let card_id = 0;
    //crio minhas cartas com duas imagens sendo que a back está escondida
    for(let i = 0; i < numero_cards;i++){
        img_name = `mem (${array_img_indices[i]}).gif`;
        card_id = array_img_indices[i];
        let card = `<li><div class="card" id="${card_id}" onclick="turn(this)"><img src="./img/front.png" alt=""><img class ="escondido" src="./img/${img_name}" alt=""></div></li>`;
        
        document.querySelector("ul").innerHTML += card;  
    }

}


//compara se as cartas são iguais
function is_equal_card(id_primeira, id_segunda){
    let num_id_primeira = Number(id_primeira);
    let num_id_segunda = Number(id_segunda);
    
    //se id_primeira é ímpar a carta igual é a id_primeira + 1
    if(num_id_primeira %2 != 0){//é ímpar
        return(num_id_segunda === num_id_primeira+1);
    }else{//se id_primeira é par a carta igual é a id_primeira - 1
        return(num_id_segunda=== num_id_primeira-1);
    }
}

//async pra rodar await sleep(xseg)
async function turn(carta){

    if(cartas_abertas == 2){
        //await sleep(1000);
        return 0;
    }
        
    //front da carta clicada
    const carta_front = carta.children[0];   
    //back da carta clicada
    const carta_back = carta.children[1];   

    let id_primeira;
    let card_antigo = document.querySelector(".ativo");
    let card_antigo_front, card_antigo_back;

    if(card_antigo != null){
        id_primeira = card_antigo.id ;
       // console.log("card_antigo existe com id: "+id_primeira);

        //front and back do card_antigo    
        card_antigo_front = card_antigo.children[0];
        card_antigo_back =  card_antigo.children[1];

    }else{
        //console.log("card_antigo não existe!");
    }
    //console.log(card_antigo);


    //é a 1º carta?
    if(card_antigo == null){
        //carta_anterior = carta;
        //console.log("É a primeira carta!");
         //coloca ativo
        carta.classList.add("ativo");

        //mostra back = esconder o front -  (posso por fora do if-else)
        carta_front.classList.add("escondido");
        carta_back.classList.remove("escondido");

    }else{//2º carta
        //console.log("É a segunda carta!");
        cartas_abertas = 2;//pra n dar bug com await

        let id_segunda = carta.id;
        //console.log("id_segunda: "+ id_segunda);

        //busca ativo >> car_ativo
        //mostra back da 2º carta = esconde front  -  (posso por fora do if-else)
        carta_front.classList.add("escondido");
        carta_back.classList.remove("escondido");
        

        console.log("Esse é o id da segunda "+id_segunda);
        console.log("Esse é o id da primeira"+id_primeira);
        console.log("___________________");


        //compara id da segunda carta com a primeira(ativo)
        let igual = is_equal_card(id_primeira, id_segunda);

        
        //wait 1s
        await sleep(1000);

        if(!igual){//cartas diferentes
            carta_front.classList.remove("escondido");
            carta_back.classList.add("escondido");
            //  card_antigo.classList.remove("escondido");
            //virar primeira carta pra baixo
            card_antigo_front.classList.remove("escondido");
            card_antigo_back.classList.add("escondido");
            x_jogadas +=2;

            cartas_abertas = 0;
        }else{//cartas iguais
            //soma 2 no numero de cartas viradas
            x_jogadas +=2;

            //coloco classe "acertadas" nas cartas viradas
            card_antigo.classList.add("acertada");
            carta.classList.add("acertada");

            cartas_abertas = 0;
            
            //numero_cartas_viradas += 2;
        }
        
        numero_cartas_viradas = document.querySelectorAll(".acertada").length;
        console.log("numero cartas viradas: " + numero_cartas_viradas);
        console.log("___________________");

        if(numero_cartas_viradas == numero_cards){
            alert(`parabéns,Você ganhou em ${x_jogadas} jogadas!`);
            //pega todas imagens
            let lista_imgs = document.querySelectorAll(".card img");
            //pega todosos cards
            let lista_cards = document.querySelectorAll(".card");
            //console.log(lista_cards);
            for(let i = 0; i< lista_imgs.length;i++){
                //dê um toggle em escondido
                //colocando escondido na imagem que tão amostra(os backs - gifs)
                //tirando escondido dos front's 
                lista_imgs[i].classList.toggle("escondido");
        
                //caso seja a segunda rodada
                numero_cartas_viradas = 0; //reinicia novamente
                x_jogadas = 0;//reinicia o numero de jogadas       
            }

            for(let i = 0; i < lista_cards.length;i++){
                lista_cards[i].classList.remove("acertada");//reseto com tudo sem acerto
            }

            //remove all
            document.querySelector("ul").innerHTML = "";
            //start
            start();
            
        }
        //remove ativo do card_antigo, aquele que eu virei primeiro
        card_antigo.classList.remove("ativo");

    }
   
    //posso por id na img front 
    

}



start();