// eslint-disable-next-line react-refresh/only-export-components
import foto from '../assets/foto.png';

const Encabezado = () => {
    return (
        <header className="header">
            <img
                src={foto}
                alt="Foto del aspirante"
                className="foto-perfil"
                style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '20px',
                }}
            />
            <h1>Eliana Sofia Salazar Hurtado</h1>
            <h2>Aprendiz Sena</h2>
            <div className="contacto-info">
                <p>Saldaña-Tolima</p>
                <p>Teléfono: 3106194290</p>
                <p>Email: sofiahurtado752@gmail.com</p>
            </div>
        </header>
    );
};
export default Encabezado;