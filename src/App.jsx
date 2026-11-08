import './App.css'

function App() {
  return (
    <>
      <section id="header-section">
        <header>
          <a href="/" aria-label="DigiApp, inicio"><img src="/logo.webp" alt="DigiApp" className="logo" width="40" height="42" /></a>
          <nav>
            <a href="https://digimonreactapi.netlify.app/">Descargar DigiApp</a>
          </nav>
        </header>
      </section>

      <section id="hero-section">
        <div className="hero-container">
          <h1>DigiApp: aplicación de Digimon gratis</h1>
          <h2>Explora el catálogo de Digimon, sus niveles evolutivos, trivias y favoritos.</h2>
          <p className="hero-description">
            DigiApp es una aplicación web gratuita para consultar criaturas Digimon, jugar trivias y guardar favoritos.
            Requiere conexión a internet.
          </p>
          <a href="https://digimonreactapi.netlify.app/" id='btn-cta-principal'>Descargar DigiApp Gratis</a>
        </div>
      </section>

      <section id="beneficios">
        <div className='beneficios-container'>
          <h2 className='titulo-beneficios'>Catálogo de Digimon, niveles y colección de favoritos</h2>
          <div className='beneficios'>
            <article className="beneficio-card">
              <span className="feature-icon" aria-hidden="true">📚</span>
              <h2 className='beneficio'>Catálogo Completo.</h2>
              <p>Explora el listado de criaturas con su imagen oficial y su nivel evolutivo exacto.</p>
            </article>
            <article className="beneficio-card">
              <span className="feature-icon" aria-hidden="true">🎮</span>
              <h2 className='beneficio'>Desafío de Trivia.</h2>
              <p>Pon a prueba tus conocimientos adivinando si cada Digimon es In-Training, Champion u Ultimate.</p>
            </article>
            <article className="beneficio-card">
              <span className="feature-icon" aria-hidden="true">💙</span>
              <h2 className='beneficio'>Colección de Favoritos.</h2>
              <p>Guarda a tus compañeros preferidos con un solo toque para acceder a ellos rápidamente.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="cta-container">
          <h2 className="titulo-cta">Empieza tu viaje y únete a la comunidad</h2>
          <a href="https://digimonreactapi.netlify.app/" className="btn-cta">Unirme a los elegidos</a>
        </div>
      </section>

      <section id="explicacion">
        <div className="explicacion-container">
          <h2 className="titulo-explicacion">¿Cómo funciona DigiApp?</h2>
          <div className="explicacion">
            <article className="paso-card">
              <span className="feature-icon" aria-hidden="true">🔎</span>
              <h2 className="paso-explicacion">1. Explora el DigiMundo</h2>
              <p>Navega fácilmente por la base de datos completa con imágenes.</p>
            </article>
            <article className="paso-card">
              <span className="feature-icon" aria-hidden="true">✨</span>
              <h2 className="paso-explicacion">2. Conoce sus Niveles</h2>
              <p>Identifica sus niveles de evolución desde Fresh hasta Mega sin complicaciones.</p>
            </article>
            <article className="paso-card">
              <span className="feature-icon" aria-hidden="true">💙</span>
              <h2 className="paso-explicacion">3. Organiza tu Equipo</h2>
              <p>Guarda tus compañeros preferidos en tu lista personalizada para tenerlos siempre disponibles.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="testimonios">
        <div className="testimonios-container">
          <h2 className="titulo-testimonios">Lo que dice la comunidad de DigiApp</h2>
          <div className="testimonios">
            <div className="testimonio-card">
              <span className="avatar-testimonio" aria-hidden="true">MD</span>
              <h3 className="nombre-testimonio">María Dolores</h3>
              <p className="texto-testimonio">"Increíble aplicación. Pude consultar los niveles de evolución de Agumon al instante antes de cada batalla."</p>
            </div>
            <div className="testimonio-card">
              <span className="avatar-testimonio" aria-hidden="true">HS</span>
              <h3 className="nombre-testimonio">Hugo Saez</h3>
              <p className="texto-testimonio">"Me encanta lo ordenada que está la información y lo fácil que es guardar a mis favoritos."</p>
            </div>
            <div className="testimonio-card">
              <span className="avatar-testimonio" aria-hidden="true">GR</span>
              <h3 className="nombre-testimonio">Gabriel Ramirez</h3>
              <p className="texto-testimonio">"Procesamiento de datos eficiente. Como analista, aprecio la rapidez de respuesta del catálogo."</p>

            </div>
            <div className="testimonio-card">
              <span className="avatar-testimonio" aria-hidden="true">CM</span>
              <h3 className="nombre-testimonio">Claudia Montero</h3>
              <p className="texto-testimonio">"¡La sección de trivias es súper divertida! Siempre pongo a prueba a mis amigos."</p>
            </div>
            <div className="testimonio-card">
              <span className="avatar-testimonio" aria-hidden="true">JF</span>
              <h3 className="nombre-testimonio">Javier Flores</h3>
              <p className="texto-testimonio">"Sencilla, práctica y al grano. Tiene todo lo que necesitas sin rodeos."</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta-2">
        <div className="cta-2-container">
          <h2 className="titulo-cta-2">¿Qué tan lejos llegará tu compañero digital?</h2>
          <a href="https://digimonreactapi.netlify.app/" className="btn-cta-2">Descubrir criaturas ahora</a>
        </div>
      </section>

      <section id="faq">
        <div className="faq-container">
          <h2 className="titulo-faq">Preguntas Frecuentes</h2>
          <div className="faq-lista">

            <details className="faq-item">
              <summary className="faq-pregunta">
                <span>¿La aplicación tiene algún costo o compras integradas?</span>
                <span className="faq-icono" aria-hidden="true"></span>
              </summary>
              <div className="faq-respuesta">
                <p>DigiApp es completamente gratis y no contiene compras integradas.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-pregunta">
                <span>¿Puedo consultar la base de datos si no tengo conexión a internet?</span>
                <span className="faq-icono" aria-hidden="true"></span>
              </summary>
              <div className="faq-respuesta">
                <p>No. Se requiere una conexión a internet para consultar la información de DigiApp.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-pregunta">
                <span>¿Cómo guardo a mis Digimon preferidos en la lista de Favoritos?</span>
                <span className="faq-icono" aria-hidden="true"></span>
              </summary>
              <div className="faq-respuesta">
                <p>Presiona el ícono de corazón junto a una criatura para añadirla a tu lista de Favoritos.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-pregunta">
                <span>¿En qué dispositivos puedo instalar la app y con qué frecuencia se actualiza?</span>
                <span className="faq-icono" aria-hidden="true"></span>
              </summary>
              <div className="faq-respuesta">
                <p>DigiApp es una PWA que puede instalarse en dispositivos móviles y de escritorio; recibe actualizaciones sin descargas adicionales.</p>
              </div>
            </details>

          </div>
        </div>
      </section>

      <section id="pre-footer">
        <div className="pre-footer-container">
          <h2 className="titulo-pre-footer">Origen de la Información</h2>
          <p className="texto-pre-footer">
            Toda la información y datos de las criaturas mostradas en esta aplicación fueron obtenidos a través de la API pública:
          </p>
          <a href="https://digimon-api.vercel.app/api/digimon" target="_blank" rel="noopener noreferrer" className="link-api">
            https://digimon-api.vercel.app/api/digimon
          </a>
        </div>
      </section>

      <footer id="footer">
        <div className="footer-container">
          <div className="footer-contenido">
            <div className="footer-columna">
              <h3 className="footer-titulo">Navegación</h3>
              <ul className="footer-lista">
                <li><a href="#hero-section">Inicio</a></li>
                <li><a href="#beneficios">Beneficios</a></li>
                <li><a href="#explicacion">¿Cómo funciona?</a></li>
                <li><a href="#testimonios">Testimonios</a></li>
              </ul>
            </div>

            <div className="footer-columna">
              <h3 className="footer-titulo">Soporte</h3>
              <ul className="footer-lista">
                <li><a href="#faq">Preguntas Frecuentes</a></li>
                <li><a href="#pre-footer">Origen de Datos</a></li>
              </ul>
            </div>

            <div className="footer-columna">
              <h3 className="footer-titulo">Comunidad</h3>
              <ul className="footer-lista">
                <li><a href="#cta">Únete</a></li>
                <li><a href="#cta-2">Explorar</a></li>
              </ul>
            </div>

            <div className="footer-columna footer-redes">
              <a href="#" aria-label="Facebook">
                <span aria-hidden="true">Facebook</span>
              </a>
              <a href="#" aria-label="Instagram">
                <span aria-hidden="true">Instagram</span>
              </a>
              <a href="#" aria-label="X (Twitter)">
                <span aria-hidden="true">X</span>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">&copy; DigiApp. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
