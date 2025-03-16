let totalDonations = 0;

function openModal() {
    document.getElementById('donation-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('donation-modal').style.display = 'none';
}

function donate() {
    let amount = document.getElementById('donation-input').value;
    if (amount && amount > 0) {
        totalDonations += parseFloat(amount);
        updateDonationBar();
        alert("Thank you for donating $" + amount + "!");
        closeModal();
    } else {
        alert("Please enter a valid amount.");
    }
}

function updateDonationBar() {
    let goal = 10000;
    let percentage = (totalDonations / goal) * 100;
    document.querySelector('.progress-bar').style.width = percentage + '%';
    document.getElementById('donation-amount').innerText = "$" + totalDonations;
}
