const printBtn = document.getElementById('printBtn');
const topicInput = document.getElementById('topicInput');
const gazetteImage = document.getElementById('gazetteImage');
const status = document.getElementById('status');

const BACKEND_URL = "https://old-newspaper-backend.vercel.app/api/news";

printBtn.addEventListener('click', async () => {
    const topic = topicInput.value || "world";
    
    status.innerText = "Connecting to the telegraph wires...";
    gazetteImage.style.display = 'none';

    try {
        const response = await fetch(`${BACKEND_URL}?topic=${encodeURIComponent(topic)}`);
        const data = await response.json();

        if (data.image) {
            gazetteImage.src = `data:image/png;base64,${data.image}`;
            gazetteImage.style.display = 'block';
            status.innerText = "Edition Printed Successfully!";
        } else {
            status.innerText = "Error: The wires are down.";
        }
    } catch (err) {
        status.innerText = "Connection Failed. Check your backend.";
        console.error(err);
    }
});