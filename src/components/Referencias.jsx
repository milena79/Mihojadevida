const Referencias = () => {
    const references = [
      {
        name: "Jorge  Eduardo Salazar Fajardo",
        position: "Conductor-Vendedor Gas País",
        phone: "3133939574",
        email: "jorgito1979salazar@gmail.com"
      },
      {
        name: "Maicol Alejandro Torres Guevara",
        position: "Auxiliar de Mecanica Taller Motos Santi",
        phone: "3208821426",
        email: "tmaicoltorres@gmail.com"
      }
    ];
  
    return (
      <section className="section">
        <h2>REFERENCIAS PROFESIONALES</h2>
        <div className="references-list">
          {references.map((ref, index) => (
            <div key={index} className="reference-item">
              <h3>{ref.name}</h3>
              <p>{ref.position}</p>
              <p>Teléfono: {ref.phone}</p>
              {ref.email && <p>Email: {ref.email}</p>}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Referencias;