import styles from '@/app/page.module.css';

export const metadata = {
    title: 'Contacto | Luxury Estate',
    description: 'Contáctenos para comprar o vender su propiedad de lujo.',
};

export default function ContactPage() {
    return (
        <div className="container" style={{ padding: '80px 20px' }}>
            <h1 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Contáctenos</h1>
            <p style={{ textAlign: 'center', marginBottom: '50px', color: '#666' }}>
                Estamos a su disposición para atender todas sus consultas inmobiliarias.
            </p>

            <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Nombre Completo</label>
                        <input type="text" className="input" placeholder="Su nombre" style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '4px' }} />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email</label>
                        <input type="email" className="input" placeholder="ejemplo@correo.com" style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '4px' }} />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Mensaje</label>
                        <textarea rows="5" className="input" placeholder="Estoy interesado en..." style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '4px' }}></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>Enviar Mensaje</button>
                </form>
            </div>
        </div>
    );
}
