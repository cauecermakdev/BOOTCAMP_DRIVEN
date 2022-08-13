let select1 = 0;
let select2 = 0;
let select3 = 0;


function nomedafuncao(){
    let tam_list = prompt("digite tamanho da lista");
    let caue =[];
    for(let i=0; i < tam_list; i++){
        caue[i] = prompt("Digita ae: "+ i);
    }
    alert(caue);

    if(tam_list > 0){
        for(let j=0; j < tam_list; j++){
            alert(caue[j]);
            return (caue[j]);
        }
    }
}

function tored(){
    const myElement = document.getElementById("demo");

    if(myElement.style.backgroundColor === "blue"){    
        myElement.style.color = "red";
        myElement.style.backgroundColor = "yellow";
        body.style.backgroundColor ="black";
    }else{
        const myElement = document.getElementById("demo");
        myElement.style.color = "yellow";
        myElement.style.backgroundColor = "blue";
    }
}

/*
alert("mensagem");
alert("Meu primeiro Alert");
*/

/*
nomedafuncao(caue);
alert(caue);

//alert(caue);

let qualquercoisa = [4,2,3,5,6,7];
nomedafuncao(qualquercoisa);

*/

function select(element){
	if(document.querySelector('.aqui').style.border != "3px solid green"){
        document.querySelector(element).style.color = "green";
        document.querySelector('.aqui').style.border = "3px solid green";
    }else{
    	document.querySelector(element).style.color = "transparent";
        document.querySelector('.aqui').style.border = "0px solid green";
    }
}
/*
function pegaid(classe){
    let texto = document.querySelector(classe);
    alert(texto);
}
*/

var el = document.getElementById('iddesejado');
el.addEventListener('click', function(event){
    //alert(e.target.id);
    //select1 += 1;
    //alert("select:" + select1);
    
    if(document.querySelector('.aqui').style.border != "3px solid green"){
        alert("entra if 1");
        alert("conteudo de this: " + this.id);
        document.querySelector('ion-icon').style.color = "green";
        document.querySelector('.aqui').style.border = "3px solid green";
    }else{
        alert("entra if 2");
    	document.querySelector('ion-icon').style.color = "transparent";
        document.querySelector('.aqui').style.border = "0px solid green";
    }
    alert("select:" + select1);
})

/*
const el = event.target || event.srcElement;
const id = el.id;
console.log(id)*/


/*
addEventListener('click', function() {
    alert(this.id); // alerta 'seuid'
});
*/

function printhtml(nomeid) {
    alert(document.querySelector(nomeid).innerHTML);
    alert(document.querySelectorAll('.txt').outerHTML);
}

function foi(){
    const text = document.querySelector('.texto');
    /*if(text.classList.contains('vermelho')){
        text.classList.add('preto');
        text.classList.remove('vermelho');
    }else{
        
        text.classList.add('vermelho');
        text.classList.remove('preto');
    }*/
    text.classList.toggle('vermelho');
}

