import { useState } from 'react'
import './App.css'

function App() {
  const [faqAbierta, setFaqAbierta] = useState(null)

  const toggleFaq = (index) => {
    if (faqAbierta === index) {
      setFaqAbierta(null)
    } else {
      setFaqAbierta(index)
    }
  }

  return (
    <>
      <section id="header-section">
        <header>
          <a href="/" aria-label="DigiApp, inicio"><img src="/logo.png" alt="DigiApp" className="logo" width="40" height="40" /></a>
          <nav>
            <a href="https://digimonreactapi.netlify.app/">Descargar DigiApp</a>
          </nav>
        </header>
      </section>

      <section id="hero-section">
        <div className="hero-container">
          <h1>DigiApp: aplicación de Digimon gratis</h1>
          <h2>Explora el catálogo de Digimon y descubre sus niveles evolutivos.</h2>
          <a href="https://digimonreactapi.netlify.app/" id='btn-cta-principal'>Descargar DigiApp Gratis</a>
        </div>
      </section>

      <section id="beneficios">
        <div className='beneficios-container'>
          <h2 className='titulo-beneficios'>Catálogo de Digimon, niveles y colección de favoritos</h2>
          <div className='beneficios'>
            <article className="beneficio-card">
              <img src="https://cdn-icons-png.flaticon.com/512/8270/8270486.png" alt="" className="img-benef" width="512" height="512" loading="lazy" decoding="async" />
              <h2 className='beneficio'>Catálogo Completo.</h2>
              <p>Explora el listado de criaturas con su imagen oficial y su nivel evolutivo exacto.</p>
            </article>
            <article className="beneficio-card">
              <img src="https://cdn-icons-png.flaticon.com/512/5726/5726470.png" alt="" className="img-benef" width="512" height="512" loading="lazy" decoding="async" />
              <h2 className='beneficio'>Desafío de Trivia.</h2>
              <p>Pon a prueba tus conocimientos adivinando si cada Digimon es In-Training, Champion u Ultimate.</p>
            </article>
            <article className="beneficio-card">
              <img src="https://cdn-icons-png.flaticon.com/512/753/753252.png" alt="" className='img-benef' width="512" height="512" loading="lazy" decoding="async" />
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
              <img src="https://cdn-icons-png.flaticon.com/512/1426/1426281.png" alt="" className="img-explicacion" width="512" height="512" loading="lazy" decoding="async" />
              <h2 className="paso-explicacion">1. Explora el DigiMundo</h2>
              <p>Navega fácilmente por la base de datos completa con imágenes.</p>
            </article>
            <article className="paso-card">
              <img src="https://cdn-icons-png.flaticon.com/512/13728/13728197.png" alt="" className="img-explicacion" width="512" height="512" loading="lazy" decoding="async" />
              <h2 className="paso-explicacion">2. Conoce sus Niveles</h2>
              <p>Identifica sus niveles de evolución desde Fresh hasta Mega sin complicaciones.</p>
            </article>
            <article className="paso-card">
              <img src="https://cdn-icons-png.flaticon.com/512/753/753252.png" alt="" className="img-explicacion" width="512" height="512" loading="lazy" decoding="async" />
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
              <img src="https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress,format&w=160&h=160&fit=crop&dpr=1" alt="" className="img-testimonio" width="80" height="80" loading="lazy" decoding="async" />
              <h3 className="nombre-testimonio">María Dolores</h3>
              <p className="texto-testimonio">"Increíble aplicación. Pude consultar los niveles de evolución de Agumon al instante antes de cada batalla."</p>
            </div>
            <div className="testimonio-card">
              <img src="https://images.pexels.com/photos/12743212/pexels-photo-12743212.jpeg?auto=compress,format&w=160&h=160&fit=crop&dpr=1" alt="" className="img-testimonio" width="80" height="80" loading="lazy" decoding="async" />
              <h3 className="nombre-testimonio">Hugo Saez</h3>
              <p className="texto-testimonio">"Me encanta lo ordenada que está la información y lo fácil que es guardar a mis favoritos."</p>
            </div>
            <div className="testimonio-card">
              <img src="https://images.pexels.com/photos/40247492/pexels-photo-40247492/free-photo-of-retrato-de-un-hombre-pensativo-en-blanco-y-negro.jpeg?auto=compress,format&w=160&h=160&fit=crop&dpr=1" alt="" className="img-testimonio" width="80" height="80" loading="lazy" decoding="async" />
              <h3 className="nombre-testimonio">Gabriel Ramirez</h3>
              <p className="texto-testimonio">"Procesamiento de datos eficiente. Como analista, aprecio la rapidez de respuesta del catálogo."</p>

            </div>
            <div className="testimonio-card">
              <img src="https://images.pexels.com/photos/39849151/pexels-photo-39849151/free-photo-of-un-perrito-pequeno-y-comodo-se-relaja-sobre-una-manta-blanca.jpeg?auto=compress,format&w=160&h=160&fit=crop&dpr=1" alt="" className="img-testimonio" width="80" height="80" loading="lazy" decoding="async" />
              <h3 className="nombre-testimonio">Claudia Montero</h3>
              <p className="texto-testimonio">"¡La sección de trivias es súper divertida! Siempre pongo a prueba a mis amigos."</p>
            </div>
            <div className="testimonio-card">
              <img src="https://images.pexels.com/photos/40268447/pexels-photo-40268447/free-photo-of-dramatico-retrato-en-blanco-y-negro-de-un-hombre.jpeg?auto=compress,format&w=160&h=160&fit=crop&dpr=1" alt="" className="img-testimonio" width="80" height="80" loading="lazy" decoding="async" />
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

            <div className="faq-item">
              <button className="faq-pregunta" onClick={() => toggleFaq(0)}>
                <span>¿La aplicación tiene algún costo o compras integradas?</span>
                <span className="faq-icono">{faqAbierta === 0 ? '-' : '+'}</span>
              </button>
              {faqAbierta === 0 && (
                <div className="faq-respuesta">
                  <p>No, DigiApp es completamente gratis y no contiene compras integradas.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button className="faq-pregunta" onClick={() => toggleFaq(1)}>
                <span>¿Puedo consultar la base de datos si no tengo conexión a internet?</span>
                <span className="faq-icono">{faqAbierta === 1 ? '-' : '+'}</span>
              </button>
              {faqAbierta === 1 && (
                <div className="faq-respuesta">
                  <p>No, requiere conexión a internet para consultar la información y sincronizar los datos en tiempo real.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button className="faq-pregunta" onClick={() => toggleFaq(2)}>
                <span>¿Cómo guardo a mis Digimon preferidos en la lista de Favoritos?</span>
                <span className="faq-icono">{faqAbierta === 2 ? '-' : '+'}</span>
              </button>
              {faqAbierta === 2 && (
                <div className="faq-respuesta">
                  <p>Simplemente presiona el ícono de corazón que aparece junto a cada criatura para añadirla automáticamente a tu lista de Favoritos.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button className="faq-pregunta" onClick={() => toggleFaq(3)}>
                <span>¿En qué dispositivos puedo instalar la app y con qué frecuencia se actualiza?</span>
                <span className="faq-icono">{faqAbierta === 3 ? '-' : '+'}</span>
              </button>
              {faqAbierta === 3 && (
                <div className="faq-respuesta">
                  <p>DigiApp es una PWA (Progressive Web App), por lo que puedes instalarla en cualquier dispositivo móvil o de escritorio sin importar el sistema operativo, recibiendo actualizaciones instantáneas sin descargas adicionales.</p>
                </div>
              )}
            </div>

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
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="img-redes" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="img-redes" />
              </a>
              <a href="#" aria-label="X (Twitter)">
                <img src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png" alt="X" className="img-redes" />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">&copy; {new Date().getFullYear()} DigiApp. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
