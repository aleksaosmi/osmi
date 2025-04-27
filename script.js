// script.js

const balanceEl = document.getElementById('balance');
const earnBtn = document.getElementById('earnBtn');
const sendBtn = document.getElementById('sendBtn');
const analyticsBtn = document.getElementById('analyticsBtn');
const receiveBtn = document.getElementById('receiveBtn');

// Function to create falling dollars
function createFallingDollar() {
    const dollar = document.createElement('div');
    dollar.classList.add('dollar');
    dollar.innerText = '$';
    dollar.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(dollar);

    setTimeout(() => {
        dollar.remove();
    }, 3000);
}

// Function to animate balance flash
function flashBalance() {
    balanceEl.classList.add('flash');
    setTimeout(() => {
        balanceEl.classList.remove('flash');
    }, 800);
}

// Function to earn money
function earnMoney() {
    let currentBalance = parseInt(balanceEl.innerText);
    currentBalance += 100;
    balanceEl.innerText = currentBalance;
    flashBalance();

    for (let i = 0; i < 10; i++) {
        setTimeout(createFallingDollar, i * 150);
    }
}

// Simulated action functions
function sendMoney() {
    let currentBalance = parseInt(balanceEl.innerText);
    if (currentBalance >= 50) {
        currentBalance -= 50;
        balanceEl.innerText = currentBalance;
        flashBalance();
        alert('You sent $50 successfully!');
    } else {
        alert('Not enough balance to send money!');
    }
}

function viewAnalytics() {
    alert('Viewing Analytics! 📈\n\nFeature coming soon...');
}

function receiveMoney() {
    let currentBalance = parseInt(balanceEl.innerText);
    currentBalance += 25;
    balanceEl.innerText = currentBalance;
    flashBalance();
    alert('You received $25!');
}

// Event listeners
earnBtn.addEventListener('click', earnMoney);
sendBtn.addEventListener('click', sendMoney);
analyticsBtn.addEventListener('click', viewAnalytics);
receiveBtn.addEventListener('click', receiveMoney);

// Button click animation
const allButtons = document.querySelectorAll('button');
allButtons.forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.95)';
    });
    btn.addEventListener('mouseup', () => {
        btn.style.transform = 'scale(1)';
    });
});
