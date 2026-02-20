document.getElementById("withdraw-btn").addEventListener('click', function () {
    //1-GET THE AGENT NUMBER & VALIDATE
    const cashoutNumber = getValueFromInput("cashout-num");
    if (cashoutNumber.length != 11) {
        alert('Invalid Agent Number!');
        return
    }

    //2-GET THE AMOUNT , VALIDATE1
    const cashOutAmount = getValueFromInput("cashout-amount");

    //3-GET THE CURRENT BALANCE, VALIDATE
    const accCurrentBalance = balanceAmount()

    //4-CALCULATE NEW BALANCE 
    const newBalance = Number(accCurrentBalance) - Number(cashOutAmount);

    if (newBalance < 0) {
        alert('Invalid Amount');
        return
    }

    //5-GET THE PIN AND VERIFY 
    const pinInput = getValueFromInput('cashout-pin');

    if (pinInput === '0000') {
        alert('Withdraw Successful.')
        updateBalance(newBalance);

        //1-> call history section
        const history = document.getElementById('history-container');

        //2-> create div
        const newHistory = document.createElement("div");

        // 3-> new div e innerHtml add
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
        Add Money Successful from 
            ${cashoutNumber}, at 
            ${new Date()}
        </div>
        
        `;

        // 4-> append kora

        history.append(newHistory);

    } else {
        alert('Wrong Pin!');
        return
    }


    //1-GET THE AGENT NUMBER & VALIDATE
    // const cashoutNumber = document.getElementById("cashout-num");
    // const agentNumber = cashoutNumber.value;
    // console.log(agentNumber);

    // if (agentNumber.length != 11) {
    //     alert('Invalid Agent Number!');
    //     return;
    // }
    // //2-GET THE AMOUNT , VALIDATE, CONVER TO NUMBER
    // const cashoutAmountInput = document.getElementById("cashout-amount");
    // const cashoutAmount = cashoutAmountInput.value;
    // console.log(cashoutAmount);
    // //3-GET THE CURRENT BALANCE, VALIDATE , CONVERT TO NUMBER
    // const currentBalance = document.getElementById("current-bal");
    // const accCurrentBalance = currentBalance.innerText;
    // console.log(accCurrentBalance);
    // //4-CALCULATE NEW BALANCE 
    // const newBalance = Number(accCurrentBalance) - Number(cashoutAmount);


    // if (newBalance < 0) {
    //     alert('Invalid Balance');
    //     return
    // }

    // console.log(newBalance);
    // //5-GET THE PIN AND VERIFY 
    // const pinInput = document.getElementById('cashout-pin');
    // const cashoutPin = pinInput.value;
    // if (cashoutPin === '0000') {
    //     //5-1 TRUE::SHOW AN ALERT>SET BALANCE 
    //     alert('Withdraw Successful');
    //     currentBalance.innerText = newBalance;
    // } else {
    //     //5-2 FALSE::SHOW AN ERROR ALERT>RETURN 
    //     alert('Wrong PIN!!');
    // }
});