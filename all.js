document.getElementById('donationForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // 防止表單提交刷新頁面

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('transferAmount').value;

    // 發送表單數據到伺服器
    try {
        const response = await fetch('https://your-backend-server.com/confirm-donation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, amount })
        });

        if (response.ok) {
            alert('Thank you! Your transfer details have been submitted successfully. Please check your email for confirmation.');
        } else {
            alert('Something went wrong. Please try again later.');
        }
    } catch (error) {
        alert('Unable to connect to the server. Please check your internet connection.');
    }
});
