const cardArray = [];
function addToCard(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName
    }
    cardArray.push(playerObj)
    document.getElementById('total-added-card').innerText = cardArray.length;
}