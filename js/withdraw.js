document.getElementById('btn-withdraw').addEventListener('click', function () {
    const inputWithdrawId = "withdraw-input";
    const currentWithdrawId = "current-withdraw";
    const currentBalanceId = "current-balance";

    const inputWithdraw = getInputValueById(inputWithdrawId);
    const currentWithdraw = getElementInnerTextById(currentWithdrawId);
    const currentBalance = getElementInnerTextById(currentBalanceId);

    if (isNaN(inputWithdraw) || inputWithdraw < 0){
        alert("Please input a valid number")
    }

    else {
        const totalWithdraw = currentWithdraw + inputWithdraw;
        setElementInnerTextById(currentWithdrawId, totalWithdraw);

        const remainingBalance = currentBalance - inputWithdraw;
        setElementInnerTextById(currentBalanceId, remainingBalance);
    }


})