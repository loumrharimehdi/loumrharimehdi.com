'use client';

import { FormEvent, useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
    const [state, setState] = useState<FormState>('idle');

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setState('loading');

        const form = event.currentTarget;
        const formData = new FormData(form);
        const body = JSON.stringify(Object.fromEntries(formData));

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body
            });

            const result = (await response.json()) as { success?: boolean; message?: string };

            if (!result.success) {
                throw new Error(result.message || "Erreur lors de l'envoi");
            }

            form.reset();
            setState('success');
        } catch {
            setState('error');
        }
    }

    return (
        <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="58db8024-a509-408d-8dab-2ff3f3e758f2" />
            <input type="hidden" name="subject" value="Nouveau message - loumrharimehdi.com" />
            <input type="hidden" name="from_name" value="Portfolio Contact" />
            <input type="checkbox" name="botcheck" hidden tabIndex={-1} autoComplete="off" />

            <div id="form-message" className={`form-message ${state === 'success' ? 'success' : ''} ${state === 'error' ? 'error' : ''}`}>
                {state === 'success'
                    ? '✅ Message envoyé avec succès ! Je vous répondrai dans les 24h.'
                    : state === 'error'
                      ? "❌ Erreur lors de l'envoi. Veuillez réessayer ou me contacter sur WhatsApp."
                      : ''}
            </div>

            <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input type="text" id="name" name="name" placeholder="Votre nom" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="votre@email.com" required />
            </div>
            <div className="form-group">
                <label htmlFor="project">Type de projet</label>
                <select id="project" name="project" required defaultValue="">
                    <option value="">Sélectionnez un type</option>
                    <option value="site-vitrine">Site Vitrine</option>
                    <option value="app-web">Application Web</option>
                    <option value="app-mobile">Application Mobile</option>
                    <option value="autre">Autre</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="message">Votre message</label>
                <textarea id="message" name="message" placeholder="Décrivez votre projet..." rows={4} required />
            </div>
            <button
                type="submit"
                className={`btn btn-whatsapp btn-full ${state === 'loading' ? 'is-loading' : ''}`}
                id="submit-btn"
                disabled={state === 'loading'}
            >
                <span className="btn-text">Envoyer ma demande</span>
                <span className="btn-loader">Envoi en cours...</span>
            </button>
        </form>
    );
}
