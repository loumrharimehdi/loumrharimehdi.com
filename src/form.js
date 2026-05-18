export function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const submitButton = document.getElementById('submit-btn');

    if (!contactForm || !formMessage || !submitButton) return;

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        submitButton.classList.add('is-loading');
        submitButton.disabled = true;
        formMessage.className = 'form-message';
        formMessage.textContent = '';

        const formData = new FormData(contactForm);
        const body = JSON.stringify(Object.fromEntries(formData));

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body
            });

            const result = await response.json();

            if (!result.success) {
                throw new Error(result.message || 'Erreur lors de l\'envoi');
            }

            formMessage.className = 'form-message success';
            formMessage.innerHTML = '&#x2705; Message envoy&eacute; avec succ&egrave;s ! Je vous r&eacute;pondrai dans les 24h.';
            contactForm.reset();
        } catch (error) {
            formMessage.className = 'form-message error';
            formMessage.innerHTML = '&#x274C; Erreur lors de l\'envoi. Veuillez r&eacute;essayer ou me contacter sur WhatsApp.';
        } finally {
            submitButton.classList.remove('is-loading');
            submitButton.disabled = false;
        }
    });
}
