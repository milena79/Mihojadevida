const Habilidades = () => {
    const habilidad = [
      "Trabajo en equipo",
      "Capacidad de escucha",
      "Habilidades de análisis",
      "Toma de decisiones",
      "Desarrollo web con HTML y CSS",
      "Diseño de interfaces atractivas y funcionales"

    ];
  
    return (
      <section className="section">
        <h2>HABILIDADES</h2>
        <ul className="skills-list">
          {habilidad.map((habilidad, index) => (
            <li key={index}>{habilidad}</li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Habilidades;