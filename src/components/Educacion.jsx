const Educacion = () => {
    const formacionAcademica = [
        {
            year: "2025",
            titulo: "Tecnologo Analisis y Desarrollo del Software",
            institucion: "Centro Industria y Construccion Sena"
        },
        {
            year: "2013",
            titulo: "Bachiller Técnico en Sistemas",
            institucion: "Institución Educativa Central"
        }
    ];

    return (
        <section className="section">
            <h2>ESTUDIOS</h2>
            <div className="educacion-list">
                {formacionAcademica.map((edu, index) => (
                    <div key={index} className="educacion-item">
                        <div className="year">{edu.year}</div>
                        <div className="educacion-details">
                            <h3>{edu.titulo}</h3>
                            <p>{edu.institucion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Educacion;