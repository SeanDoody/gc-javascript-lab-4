const makeMoneySection = document.getElementById('make-money-section');
const howMany = document.getElementById('how-many');
const makeMoneyBtn = document.getElementById('make-money');
const form = document.getElementById('coin-form');
const total = document.getElementById('coin-form-total');

function removeCoin(e) {
    const coin = e.target;
    switch(coin.innerText) {
        case 'quarter':
            total.innerText = (parseFloat(total.innerText) - 0.25).toFixed(2);
            break;
        case 'dime':
            total.innerText = (parseFloat(total.innerText) - 0.1).toFixed(2);
            break;
        case 'nickel':
            total.innerText = (parseFloat(total.innerText) - 0.05).toFixed(2);
            break;
        case 'penny':
            total.innerText = (parseFloat(total.innerText) - 0.01).toFixed(2);
            break;
        default:
            break;
    }
    coin.style.display = 'none';
}

function makeMoney() {
    const coinType = document.getElementById('which-coin').value;
    const numCoins = document.getElementById('how-many').value;
    for (let i = 0; i < numCoins; i++) {
        let newCoin = document.createElement('div');
        newCoin.classList.add('coin');
        newCoin.innerText = coinType;
        switch (coinType) {
            case 'quarter':
                newCoin.classList.add('quarter');
                total.innerText = (parseFloat(total.innerText) + 0.25).toFixed(2);
                break;
            case 'dime':
                newCoin.classList.add('dime');
                total.innerText = (parseFloat(total.innerText) + 0.1).toFixed(2);
                break;
            case 'nickel':
                newCoin.classList.add('nickel');
                total.innerText = (parseFloat(total.innerText) + 0.05).toFixed(2);
                break;
            case 'penny':
                newCoin.classList.add('penny');
                total.innerText = (parseFloat(total.innerText) + 0.01).toFixed(2);
                break;
            default:
                break;
        }
        makeMoneySection.appendChild(newCoin);
        newCoin.addEventListener('click', removeCoin);
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    makeMoney();
});