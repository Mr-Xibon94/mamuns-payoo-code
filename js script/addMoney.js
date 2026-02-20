document.getElementById("addMoney-btn").addEventListener('click', function () {
    // 1 - Get Bank account Name
    const bankAccount = getValueFromInput('bank-name');
    if (bankAccount === 'Select A Bank') {
        alert('Please select A bank');
        return
    }
    console.log("name is", bankAccount);

    // 2 - get bank account number
    const accountNumber = getValueFromInput('add-acc-num');
    if (accountNumber.length != 11) {
        alert('Invaild bank account Number');
        return
    }

    // 3 - get amount from bank

    const newAmountToAdd = getValueFromInput('add-amount');
    const currentBal = balanceAmount()
    const newBal = currentBal + Number(newAmountToAdd);

    // 4 - very  pin number
    const bankPin = getValueFromInput('add-money-pin');
    if (bankPin === '0000') {
        alert(`Add Money Successful from 
            ${bankAccount} at 
            ${new Date()}`);
        updateBalance(newBal);
        console.log('new bal', newBal);
    } else {
        alert('wrong pin!');
        return
    }

})