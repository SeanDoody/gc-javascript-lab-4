const totalString = document.getElementById('vending-machine-total');
const buttons = document.getElementById('buttons');
buttons.addEventListener('click', buttonClicked);

function buttonClicked(event) {
    let total = parseFloat(totalString.innerText.substr(8));
    switch (event.target.id) {
        case 'lime-cola':
            total += 2;
            break;
        case 'salted-peanuts':
            total += 3;
            break;
        case 'chocolate-bar':
            total += 4;
            break;
        case 'fruit-gummies':
            total += 6;
            break;
        default:
            break;
    }
    totalString.innerText = `Total: $${total.toFixed(2)}`;
}