document.getElementById('donationForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('transferAmount').value;

    try {
        const response = await fetch('http://localhost:3000/confirm-donation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, amount })
        });

        if (response.ok) {
            alert('Thank you! Your donation has been recorded.');
        } else {
            alert('Error: Unable to record donation. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Connection error. Please check the server.');
    }
});
