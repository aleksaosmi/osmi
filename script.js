// script.js

const balanceEl = document.getElementById('balance');
const earnBtn = document.getElementById('earnBtn');

// Function to create a falling dollar
function createFallingDollar() {
    const dollar = document.createElement('div');
    dollar.classList.add('dollar');
    dollar.innerText = '$';
    dollar.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(dollar);

    // Remove dollar after animation
    setTimeout(() => {
        dollar.remove();
    }, 3000);
}

// Function to earn money
function earnMoney() {
    let currentBalance = parseInt(balanceEl.innerText);
    currentBalance += 100;
    balanceEl.innerText = currentBalance;

    // Drop multiple dollars
    for (let i = 0; i < 10; i++) {
        setTimeout(createFallingDollar, i * 200);
    }
}

earnBtn.addEventListener('click', earnMoney);

// Extra: Animate button click
earnBtn.addEventListener('mousedown', () => {
    earnBtn.style.transform = 'scale(0.95)';
});

earnBtn.addEventListener('mouseup', () => {
    earnBtn.style.transform = 'scale(1)';
});
