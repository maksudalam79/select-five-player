const cardArray = [];

function allSelect(playerCard) {
    const ul = document.getElementById("player_select");
    ul.innerHTML = "";
    for (let i = 0; i < playerCard.length; i++) {

        const name = cardArray[i].playerName;
        const li = document.createElement('li');



        li.innerHTML = `

    <li>${i + 1}</li>
    <li>${name}</li>
`;
        ul.appendChild(li)


    }

}
function addToCard(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName
    }
    cardArray.push(playerObj)
    document.getElementById('total-added-card').innerText = cardArray.length;

    allSelect(cardArray);


}

document.getElementById('per-person').addEventListener('click', function () {
    const playerAmount = document.getElementById('player-amount');
    const playerString = playerAmount.value;
    const playerNumber = parseInt(playerString);

    const totalAddedCard = document.getElementById('total-added-card');
    const totalAddedCardstring = totalAddedCard.innerText;
    const totalAddedCardNumber = parseInt(totalAddedCardstring);

    const totalPerson = playerNumber * totalAddedCardNumber;


    const totalPlayerExpenses = document.getElementById('total-player-expenses');
    const totalPlayerString = totalPlayerExpenses.innerText;
    const totalPlayerNumber = parseInt(totalPlayerString);
    totalPlayerExpenses.innerText = totalPerson;


    return totalPlayerNumber;


})

document.getElementById('calculate-total').addEventListener('click', function () {

    const playerAmount = document.getElementById('player-amount');
    const playerString = playerAmount.value;
    const playerNumber = parseInt(playerString);

    const totalAddedCard = document.getElementById('total-added-card');
    const totalAddedCardstring = totalAddedCard.innerText;
    const totalAddedCardNumber = parseInt(totalAddedCardstring);

    const totalPerson = playerNumber * totalAddedCardNumber;


    const totalPlayerExpenses = document.getElementById('total-player-expenses');
    const totalPlayerString = totalPlayerExpenses.innerText;
    const totalPlayerNumber = parseInt(totalPlayerString);
    totalPlayerExpenses.innerText = totalPerson;



    const managerAmmount = document.getElementById('Manager-ammount');
    const managerString = managerAmmount.value;
    const managerNumber = parseInt(managerString);

    const coachAmmount = document.getElementById('coach-ammount');
    const coachString = coachAmmount.value;
    const coachNumber = parseInt(coachString);

    const total = document.getElementById('total');
    const totalString = total.innerText;
    const totalNumber = parseInt(totalString);

    const totalTaka = totalPlayerNumber + managerNumber + coachNumber;

    total.innerText = totalTaka;

    return (totalNumber, totalTaka)

})






