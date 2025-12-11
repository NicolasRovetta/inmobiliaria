'use client';

import { useRef, useState } from 'react';
import styles from '@/app/page.module.css';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // INSTRUCCIONES EMAILJS:
        // 1. Crea una cuenta en https://www.emailjs.com/
        // 2. Crea un 'Email Service' y un 'Email Template'.
        // 3. Obtén tu 'Service ID', 'Template ID' y 'Public Key'.
        // 4. Configura las variables de entorno en .env.local:
        //    NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
        //    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
        //    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...

        // Si las variables no existen, mostramos alerta para demo
        if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
            console.warn('EmailJS no configurado. Revisa INSTRUCCIONES.md');
            setTimeout(() => setStatus('success'), 1500); // Simular éxito
            return;
        }

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <div className="container" style={{ padding: '80px 20px' }}>
            <h1 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Contáctenos</h1>
            <p style={{ textAlign: 'center', marginBottom: '50px', color: '#666' }}>
                Estamos a su disposición para atender todas sus consultas inmobiliarias.
            </p>

            <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
                <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Nombre Completo</label>
                        <input name="user_name" type="text" required className="input" placeholder="Su nombre" style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '4px' }} />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email</label>
                        <input name="user_email" type="email" required className="input" placeholder="ejemplo@correo.com" style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '4px' }} />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Mensaje</label>
                        <textarea name="message" required rows="5" className="input" placeholder="Estoy interesado en..." style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '4px' }}></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }} disabled={status === 'sending'}>
                        {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>

                    {status === 'success' && <p style={{ color: 'green', marginTop: '10px' }}>¡Mensaje enviado con éxito!</p>}
                    {status === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>Hubo un error al enviar el mensaje.</p>}
                </form>
            </div>
        </div>
    );
}
