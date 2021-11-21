document.getElementById("deposit-button").addEventListener('click', function () {
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmount = depositInput.value;
    const newDeposit = parseFloat(newDepositAmount);
    const oldDepositText = document.getElementById("deposit-total");
    const oldAmount = oldDepositText.innerText;
    const oldDeposit = parseFloat(oldAmount);
    oldDepositText.innerText = newDeposit + oldDeposit;


    const oldblance = document.getElementById("Withrow-tolat");
    const oldBlanceText = oldblance.innerText;
    const oldBlance = parseFloat(oldBlanceText);
    const totalBlance = oldBlance + newDeposit;
    oldblance.innerText = totalBlance;

    depositInput.value = '';

});

document.getElementById("withdrow-button").addEventListener('click', function () {
    const newWithrowAmount = document.getElementById("withdrow-amount");
    const newWithrowAmountText = newWithrowAmount.value;
    const newWithrow = parseFloat(newWithrowAmountText);

    const oldWithdrow = document.getElementById("old-Withdrow");

    const oldWithdrowText = oldWithdrow.innerText;
    const oldwithdroAmout = parseFloat(oldWithdrowText);
    const totalWithdrow = oldwithdroAmout + newWithrow;
    oldWithdrow.innerText = totalWithdrow;
    //increse total blance 
    const blance = document.getElementById("Withrow-tolat");
    const blanceText = blance.innerText;
    const blanceFolat = parseFloat(blanceText);
    const newBlance = blanceFolat - newWithrow;
    console.log(newBlance);
    blance.innerText = newBlance;



    newWithrowAmount.value = '';
}
);