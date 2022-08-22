const cardArray = [];

function allSelect(playerCard) {
    const tableBody = document.getElementById("player_select");
    tableBody.innerHTML = "";
    for (let i = 0; i < playerCard.length; i++) {
        console.log(cardArray[i].playerName);
        const name = cardArray[i].playerName;


        const tr = document.createElement('tr');
        tr.innerHTML = `
    <tr>
    <th>${i + 1}</th>
    <td>${name}</td>
</tr>`;
        tableBody.appendChild(tr)
    }
    if (playerCard.length <= 5) {
        return
    }
    else {
        return alert("gewfrygwe")
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



