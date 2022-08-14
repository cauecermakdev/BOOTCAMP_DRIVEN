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

function select(clickedObj){
        //getting the name of the class
        let nameclass = clickedObj.className;
        //a class só pega no seletor com ponto. ex: ".nomedaclasse"
        //Se o elemento tiver varias class, ela tem que estar formatada sem espaço entre elas...
        //ex: ".class1.class2.class3..."
        //split na nameclass e fazer um for concatenando com pontos
        let vector_nameclass = nameclass.split(" ");
        nameclass = "";
        for(let i=0; i<vector_nameclass.length;i++){
            nameclass += "." + vector_nameclass[i] + "";
        }
    
        //nameclass = nameclass.replace("  "," .");
        //alert(nameclass);
    
    
        //getting the section <<food/drink/desert>>
        const section = clickedObj.parentElement.parentElement.id;
    
        //getting the card
        const seletor_card =  "#"+ section + " .card-selected";
        const cardselected_food = document.querySelector(seletor_card);
        //alert(seletor_card);
    
        //getting icon
        const seletor_icon = "#"+ section + " .card-selected ion-icon";
        //alert(seletor_icon);
        const icon_showing = document.querySelector(seletor_icon);
    
        //firt time enter - if
        if(cardselected_food != null){  
        //if(seletor.classList.contains("card-selected") != null){  
            //alert("entra");
            cardselected_food.classList.remove("card-selected");
            icon_showing.classList.add("display-none");
        }
    
        let seletorCheck = nameclass + " ion-icon";
        //alert(seletorCheck);
        //let seletorCheck = clickedObj + " ion-icon";
        check = document.querySelector(seletorCheck);
        check.classList.remove('display-none');
    
        const card = document.querySelector(nameclass);
        card.classList.add('card-selected');
    
        //save the name of the food
        //  .card1_food div h3
        //const seletor_food = clickedObj + " div h3 .food_name_card";
        const seletor_food = nameclass + " #description > h3";
        section_name = document.querySelector(seletor_food).innerHTML;
    
        //colocar esse food name no confirm card
        document.querySelector(`.confirm div .${section}_name_confirm`).innerHTML = section_name;
    
        //getting food price
        const seletor = nameclass + " .price";
        const price = document.querySelector(seletor).innerHTML;
        //global var
        price_number = Number(price);
    
        //colocar esse food name no confirm card
        document.querySelector(`.confirm div .${section}_price`).innerHTML = price;
        
        //global var
        price_number = parseFloat(price.replace(',','.'));
        
        if(section =="food"){
            food_name = section_name;
            food_price = price_number;
        }else if(section =="drink"){
            drink_price = price_number;
            drink_name = section_name;
        }else if(section =="desert"){
            desert_price = price_number;
            desert_name = section_name;
        }

        verifyAllSelected();
}

function cta_click(){

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
    //let message = `*PEDIDO*%20-%20*${userName}*%0A_${today}_%0A%0A${food_name}:%20R$${food_price}%0A${drink_name}:%20R$${drink_price}%0A${desert_name}:%20R$${desert_price}%0A%0A*TOTAL*:%20${total}%0A%0AEndereço:%20${adress}%0A%0A_Muito%20Obrigado%20Pelo%20Seu%20Pedido_`; 
    let message = `*Olá, gostaria de fazer o pedido:*\n- Prato: ${food_name}\n- Bebida: ${drink_name}\n- Sobremesa: ${desert_name}\n*TOTAL*: R$ ${total.toFixed(2).replace('.',',')}\n\nNome: ${userName}\nEndereço: ${adress}\n\n_Muito Obrigado Pelo Seu Pedido_\n_${today}_`; 
    let urlmessage = encodeURI(message);


    let link = `https://api.whatsapp.com/send?phone=5535991819444&text=${urlmessage}`;
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

    total =0;
}