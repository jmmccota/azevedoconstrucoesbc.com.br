import "./styles.css";

function App() {
  return (
    <div
      style={{
        background: "rgb(238 238 255)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px",
        }}
      >
        <div
          className="title-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <img
            src="/img/logo-escrito.png"
            alt="Azevedo Construções"
            width="100%"
            height="auto"
            style={{ width: "100%", height: "auto" }}
          />
          <p
            style={{
              fontFamily: '"Times New Roman", Times, serif',
              fontWeight: "bold",
              color: "#363E98",
              fontSize: "32px",
            }}
          >
            AZEVEDO CONSTRUÇÕES
          </p>
        </div>
        <div
          className="content-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
            paddingTop: "32px",
            paddingBottom: "32px",
            fontFamily: "Open Sans, sans-serif",
            fontSize: "20px",
          }}
        >
          <p>Gostou? ✨ Quer falar conosco 👇</p>
          <a className="contact-item" href="tel:3138371800">
            Telefone: (31) 3837-1800
          </a>
          <a
            className="contact-item"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            href="https://wa.me/+553138371800"
          >
            <img
              src="/img/whatsapp.svg"
              alt="Whatsapp"
              width="auto"
              height="60px"
              style={{ width: "auto", maxHeight: "45px" }}
            />
          </a>
          <a
            className="contact-item"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            href="https://instagram.com/azevedoconstrucoes87/"
          >
            <img
              src="/img/instagram-logo.png"
              alt="instagram"
              width="auto"
              height="60px"
              style={{ width: "auto", maxHeight: "45px" }}
            />
          </a>
        </div>
        <div
          className="content-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            paddingTop: "32px",
            paddingBottom: "32px",
            fontFamily: "Open Sans, sans-serif",
            fontSize: "20px",
          }}
        >
          <p>Venha nos visitar:</p>
          <p>Avenida Wilson Alverenga, 295 - Barão de Cocais 👇</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1465.0788972938585!2d-43.479163448966524!3d-19.942463457338917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4482d7419ebbb%3A0xf93ff8e8e865e823!2zQXpldmVkbyBDb25zdHJ1w6fDtWVz!5e0!3m2!1sen!2sbr!4v1738509180260!5m2!1sen!2sbr"
          width="600"
          height="450"
          style={{
            border: "1px solid #dadada",
            borderRadius: "8px",
            width: "min(100vw, 600px)",
            height: "450px",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px",
        }}
      >
        <small>
          Criado por:{" "}
          <a
            href="https://github.com/jmmccota"
            target="_blank"
            rel="noopener noreferrer"
          >
            jmmccota
          </a>
        </small>
      </div>
    </div>
  );
}

export default App;
