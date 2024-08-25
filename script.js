document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.getElementById('surpriseButton');
    const surpriseMessage = document.getElementById('surpriseMessage');

    surpriseButton.addEventListener('click', () => {
        if (surpriseMessage.classList.contains('hidden')) {
            surpriseMessage.classList.remove('hidden');
        } else {
            surpriseMessage.classList.add('hidden');
        }
    });
});
