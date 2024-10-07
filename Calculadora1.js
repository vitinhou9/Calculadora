let history = [];

function addHistory(operation){
    const timestamp = new Date().toLocaleString();
    history.unshift({operation, timestamp});
    updateHistoryDisplay(); //Adiciona o calculo na variavel do historico.
}
function updateHistoryDisplay(){
    const historyContainer = document.getElementById('history-list');
    historyContainer.innerHTML= '';

    history.forEach(entry => {
        const historyItem = document.createElement('li');
        historyItem.innerHTML= `Data:  ${entry.timestamp} Calculo:  ${entry.operation}`;

        historyItem.onclick = () =>{
            loadHistoryToVisor(entry.operation)
        };

        historyContainer.appendChild(historyItem);
    });//Adiciona o calculo na tela como uma lista
}
function loadHistoryToVisor(operation) {
    document.getElementById('tela').innerHTML = operation;
}//Carrega o clique no historico para a calculadora 




function calcular(){
    var resultado = document.getElementById('tela').innerHTML;
    if (resultado){  
        const result = eval(resultado);
        document.getElementById('tela').innerHTML= result;
        addHistory(resultado);
        
    }else{
        document.getElementById('tela').innerHTML= "Adicione numeros!!"
    }
} //Pega o que esta no visor e calcula usando o metodo "eval()"

function insertNum(num){
    let numero = document.getElementById("tela").innerHTML;
    document.getElementById("tela").innerHTML= numero + num;
}
function insertOpr(opr){
    var numero = document.getElementById("tela").innerHTML;
    document.getElementById('tela').innerHTML= numero+opr;

}
function limpar(){
    document.getElementById('tela').innerHTML='';
}
function volta(){
   var resultado= document.getElementById('tela').innerHTML;
   document.getElementById('tela').innerHTML=resultado.substring(0,resultado.length -1)
}
