
document.getElementById('btn-deposit').addEventListener('click', function () {
    const inputDepositId = "deposit-input";
    const currentDepositId = "current-deposit";
    const currentBalanceId = "current-balance";

    const inputDeposit = getInputValueById(inputDepositId);
    const currentDeposit = getElementInnerTextById(currentDepositId);
    const currentBalance = getElementInnerTextById(currentBalanceId);

    if (isNaN(inputDeposit) || inputDeposit < 0) {
        alert("Please input a valid number")
    }
    else {
        const totalDeposit = inputDeposit + currentDeposit;
        setElementInnerTextById(currentDepositId, totalDeposit);

        const totalBalance = inputDeposit + currentBalance;
        setElementInnerTextById(currentBalanceId, totalBalance);
    }

})