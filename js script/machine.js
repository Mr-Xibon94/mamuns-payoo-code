
// machine id -> input value 
function getValueFromInput(id){
    const input=document.getElementById(id);
    const value = input.value;

    console.log(id, value);
    return value; 

}

//machine id -> get currentBlance 
function balanceAmount(){
    const balanceValue = document.getElementById("current-bal");
    const balance = balanceValue.innerText;

    return Number(balance);
}


//machine id -> update currentblance
function updateBalance(setBalance){

    const newBalance = document.getElementById("current-bal");
    newBalance.innerText = setBalance;
    
}

//machine id -> hide add & show particular one
function showOnly(id) {
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cashout");

    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');

    const selectedOne = document.getElementById(id);
    selectedOne.classList.remove('hidden');

    
}