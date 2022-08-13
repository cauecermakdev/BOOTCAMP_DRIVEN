let total = 0;

let food_name="";
let drink_name="";
let desert_name="";
let food_price = 0;
let drink_price = 0;
let desert_price = 0;


function verifyAllSelected(){
    const cardselected_drink = document.querySelector("#drink .card-selected");
    const cardselected_food = document.querySelector("#food .card-selected");
    const cardselected_desert = document.querySelector("#desert .card-selected");

    if(cardselected_food !=null && cardselected_drink !=null && cardselected_desert!=null){
        const freeMyButton = document.querySelector('.CTA');
        freeMyButton.classList.add('CTA-active');
        freeMyButton.innerHTML = "Fechar pedido";
    }
}


function select_food(nomeClasse){
    
    const cardselected_food = document.querySelector("#food .card-selected");
    const icon_showing = document.querySelector("#food .card-selected ion-icon");
    
    //firt time enter - if
    if(cardselected_food != null){  
        //alert("entra");
        cardselected_food.classList.remove("card-selected");
        icon_showing.classList.add("display-none");
    }

    let seletorCheck = nomeClasse + " ion-icon";
    seletorCheck = document.querySelector(seletorCheck);
    seletorCheck.classList.remove('display-none');

    const card = document.querySelector(nomeClasse);
    card.classList.add('card-selected');

    //save the name of the food
    //  .card1_food div h3
    //const seletor_food = nomeClasse + " div h3 .food_name_card";
    const seletor_food = nomeClasse + " #description > h3";
    food_name = document.querySelector(seletor_food).innerHTML;

    //colocar esse food name no confirm card
    document.querySelector(".confirm div .food_name_confirm").innerHTML = food_name;
    //foodname nao esta recebendo o texto

    

    //getting food price
    const seletor = nomeClasse + " .price";
    const price = document.querySelector(seletor).innerHTML;
    //global var
    food_price = Number(price);

    //colocar esse food name no confirm card
    document.querySelector(".confirm div .food_price").innerHTML = price;

    //global var
    food_price = parseFloat(price.replace(',','.'));

    //free button when 3 are selected
    verifyAllSelected();

}


function select_drink(nomeClasse){

    const cardselected_drink = document.querySelector("#drink .card-selected");
    const icon_showing = document.querySelector("#drink .card-selected ion-icon");
    //firt time enter - if
    if(cardselected_drink != null){
        //alert("entra");
        cardselected_drink.classList.remove("card-selected");
        icon_showing.classList.add("display-none");
    }

    let seletorCheck = nomeClasse + " ion-icon";
    seletorCheck = document.querySelector(seletorCheck);
    seletorCheck.classList.remove('display-none');

    const card = document.querySelector(nomeClasse);
    card.classList.add('card-selected');


    //get the name of the drink
    const seletor_drink = nomeClasse + " #description > h3";
    drink_name = document.querySelector(seletor_drink).innerHTML;

    //colocar esse drink name no confirm card
    document.querySelector(".confirm div .drink_name_confirm").innerHTML = drink_name;

    //getting drink price
    const seletor = nomeClasse + " .price";
    const price = document.querySelector(seletor).innerHTML;

    //colocar esse drink name no confirm card
    document.querySelector(".confirm div .drink_price").innerHTML = price;
    

    //global var
    drink_price = parseFloat(price.replace(',','.'));

    //free button when 3 are selected
    verifyAllSelected();

}


function select_desert(nomeClasse){

    const cardselected_desert = document.querySelector("#desert .card-selected");
    const icon_showing = document.querySelector("#desert .card-selected ion-icon");
    //firt time enter - if
    if(cardselected_desert != null){
        //alert("entra");
        cardselected_desert.classList.remove("card-selected");
        icon_showing.classList.add("display-none");
    }

    let seletorCheck = nomeClasse + " ion-icon";
    seletorCheck = document.querySelector(seletorCheck);
    seletorCheck.classList.remove('display-none');

    const card = document.querySelector(nomeClasse);
    card.classList.add('card-selected');

    //get the name of the desert
    const seletor_desert = nomeClasse + " #description > h3";
    desert_name = document.querySelector(seletor_desert).innerHTML;

    //colocar esse food name no confirm card
    document.querySelector(".confirm div .desert_name_confirm").innerHTML = desert_name;

    //getting food price
    const seletor = nomeClasse + " .price";
    const price = document.querySelector(seletor).innerHTML;

    //colocar esse food name no confirm card
    document.querySelector(".confirm div .desert_price").innerHTML = price;

    //global var
    //desert_price = Number.parseFloat(price.replace(',','.')).toFixed(2);
    desert_price = parseFloat(price.replace(',','.'));

    //free button when 3 are selected
     verifyAllSelected();
}


function cta_click(){
    
    //pegar a comida selecionada 
    //pegar o preco da comida

    //pegar o drink secionado
    //pegar o preco do drink
    
    //pegar o desert selecionado
    //pegar o preco da desert

    //somar todos precos 
    //e colocar na frente do total

    //mostrar card
    const confirm_card = document.querySelector('.confirm_dad');
    confirm_card.classList.remove('display-none');

    //calc total price
    total = food_price + drink_price + desert_price;
    document.querySelector(".confirm .total_price").innerHTML = total.toFixed(2).replace('.',',');

}

function sendWhatsApp(){
    
    let userName = prompt("Seu Nome:");
    let adress = prompt("Seu Endereço:");

    //preferência pagamento PIX ou cartão

    //today data
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    //encodeURI(string);
    //let message = "my message" 
    //let urlmessage = encodeURI(message);

    let link = `https://api.whatsapp.com/send?phone=5535991819444&text=*PEDIDO*%20-%20*${userName}*%0A_${today}_%0A%0A${food_name}:%20R$${food_price}%0A${drink_name}:%20R$${drink_price}%0A${desert_name}:%20R$${desert_price}%0A%0A*TOTAL*:%20${total}%0A%0AEndereço:%20${adress}%0A%0A_Muito%20Obrigado%20Pelo%20Seu%20Pedido_`;
    window.open(link);
}

function reset(){

    //reset food section
    const cardselected_food = document.querySelector("#food .card-selected");
    const icon_showing = document.querySelector("#food .card-selected ion-icon");

    cardselected_food.classList.remove("card-selected");
    icon_showing.classList.add("display-none");

    //reset drink section
    const cardselected_drink = document.querySelector("#drink .card-selected");
    const icon_showing2 = document.querySelector("#drink .card-selected ion-icon");

    cardselected_drink.classList.remove("card-selected");
    icon_showing2.classList.add("display-none");

    //reset desert section
    const cardselected_desert = document.querySelector("#desert .card-selected");
    const icon_showing3 = document.querySelector("#desert .card-selected ion-icon");

    cardselected_desert.classList.remove("card-selected");
    icon_showing3.classList.add("display-none");
    
    //display none em card confirm
    const confirm_card = document.querySelector('.confirm_dad');
    confirm_card.classList.add('display-none');

    //desativar button
    const blockMyButton = document.querySelector('.CTA');
    blockMyButton.classList.remove('CTA-active');
    blockMyButton.innerHTML = "Selecione os 3 itens para fechar o pedido";
    
}