import React, { useState, useEffect } from 'react';
import { MapPin, Clock, BookOpen, UtensilsCrossed, CalendarDays, MessageCircle, Menu, Globe } from 'lucide-react';
import menuData from './menu.json';
import './App.css';

// Dicionário para traduzir os textos fixos da interface
const uiTexts = {
  es: {
    reserva: "Hacer Reserva", nosotros: "Nosotros", menu: "Menú", ubicacion: "Ubicación", horarios: "Horarios",
    nuestraCasa: "Nuestra Casa", textoCasa1: "Fundado con pasión por la auténtica gastronomía española. En",
    textoCasa2: "utilizamos ingredientes locales y recetas de familia para llevar a tu mesa el verdadero sabor de España.",
    textoCasa3: "Un ambiente acogedor y tradicional, perfecto para disfrutar de las mejores carnes a la parrilla y mariscos de la región. ¡Ven a visitarnos y siéntete como en casa!",
    nuestraCarta: "Nuestra Carta", dondeEstamos: "Dónde Estamos", siguenos: "Síguenos en nuestras redes sociales:",
    inicio: "Inicio", sobreNosotros: "Sobre nosotros", nuestroMenu: "Nuestro menú", derechos: "Todos los derechos reservados.",
    hablaConNosotros: "Habla con nosotros"
  },
  pt: {
    reserva: "Fazer Reserva", nosotros: "Sobre", menu: "Cardápio", ubicacion: "Localização", horarios: "Horários",
    nuestraCasa: "Nossa Casa", textoCasa1: "Fundado com paixão pela autêntica gastronomia espanhola. No",
    textoCasa2: "utilizamos ingredientes locais e receitas de família para levar à sua mesa o verdadeiro sabor da Espanha.",
    textoCasa3: "Um ambiente acolhedor e tradicional, perfeito para desfrutar das melhores carnes grelhadas e frutos do mar da região. Venha nos visitar e sinta-se em casa!",
    nuestraCarta: "Nosso Cardápio", dondeEstamos: "Onde Estamos", siguenos: "Siga nossas redes sociais:",
    inicio: "Início", sobreNosotros: "Sobre nós", nuestroMenu: "Nosso cardápio", derechos: "Todos os direitos reservados.",
    hablaConNosotros: "Fale conosco"
  },
  en: {
    reserva: "Book a Table", nosotros: "About Us", menu: "Menu", ubicacion: "Location", horarios: "Hours",
    nuestraCasa: "Our Place", textoCasa1: "Founded with a passion for authentic Spanish gastronomy. At",
    textoCasa2: "we use local ingredients and family recipes to bring the true taste of Spain to your table.",
    textoCasa3: "A cozy and traditional atmosphere, perfect for enjoying the region's best grilled meats and seafood. Come visit us and feel at home!",
    nuestraCarta: "Our Menu", dondeEstamos: "Where We Are", siguenos: "Follow us on social media:",
    inicio: "Home", sobreNosotros: "About us", nuestroMenu: "Our menu", derechos: "All rights reserved.",
    hablaConNosotros: "Chat with us"
  }
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  // Estado para controlar o idioma selecionado (Padrão: Espanhol)
  const [lang, setLang] = useState('es');

  // Seleciona os textos e os dados do menu com base no idioma atual
  const t = uiTexts[lang];
  const menu = menuData[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">

      {/* --- HERO E TOPO --- */}
      <div id="inicio" className="hero-background">
        <div className="topbar">
          <div className="social-links">
            <img src="/images/logo.png" alt={menu.nombreRestaurante} style={{ height: '80px', objectFit: 'contain' }} />
          </div>

          <div className="topbar-actions" style={{ display: 'flex', alignItems: 'center' }}>

            {/* SELETOR DE IDIOMAS (TEXTO) */}
            <div className="lang-switcher">
              <Globe size={14} color="#aaa" style={{ marginLeft: '4px' }} />
              <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => setLang('es')}>ES</button>
              <button className={`lang-btn ${lang === 'pt' ? 'active' : ''}`} onClick={() => setLang('pt')}>PT</button>
              <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
            </div>

            <a href="#horarios" className="btn-outline-small" style={{ textDecoration: 'none' }}>{t.reserva}</a>
            <Menu className="mobile-menu-icon" size={28} style={{ marginLeft: '10px' }} />
          </div>
        </div>

        <div className="logo-container">
          <h1 className="main-logo">{menu.nombreRestaurante}</h1>
        </div>

        {/* --- NAVEGAÇÃO COM ÍCONES (STICKY) --- */}
        <div className={`nav-wrapper ${scrolled ? 'sticky' : ''}`}>
          <nav className="icon-nav">
            <a href="#nosotros" className="icon-link">
              <UtensilsCrossed size={scrolled ? 24 : 32} strokeWidth={1.5} />
              <span>{t.nosotros}</span>
            </a>
            <a href="#menu" className="icon-link">
              <BookOpen size={scrolled ? 24 : 32} strokeWidth={1.5} />
              <span>{t.menu}</span>
            </a>
            <a href="#horarios" className="icon-link">
              <CalendarDays size={scrolled ? 24 : 32} strokeWidth={1.5} />
              <span>{t.reserva.split(' ')[0]}</span>
            </a>
            <a href="#ubicacion" className="icon-link">
              <MapPin size={scrolled ? 24 : 32} strokeWidth={1.5} />
              <span>{t.ubicacion}</span>
            </a>
            <a href="#horarios" className="icon-link">
              <Clock size={scrolled ? 24 : 32} strokeWidth={1.5} />
              <span>{t.horarios}</span>
            </a>
          </nav>
        </div>
      </div>

      {/* --- HISTÓRIA E FACHADA (NOSOTROS) --- */}
      <section id="nosotros" className="info-section">
        <div className="section-header" style={{ marginBottom: '30px' }}>
          <h2>{t.nuestraCasa}</h2>
          <div className="divider"></div>
        </div>

        <div className="about-container">
          <div className="about-image-wrapper">
            <img src="/images/fachada.png" alt="Fachada Parrillada A Capela" className="about-image" />
          </div>
          <div className="about-text">
            <p>
              {t.textoCasa1} <strong>{menu.nombreRestaurante}</strong>, {t.textoCasa2}
            </p>
            <p style={{ marginTop: '15px' }}>
              {t.textoCasa3}
            </p>
          </div>
        </div>
      </section>

      {/* --- CARDÁPIO --- */}
      <main id="menu" className="menu-container">
        <div className="section-header">
          <h2>{t.nuestraCarta}</h2>
          <div className="divider"></div>
        </div>

        {menu.categorias.map((categoria) => (
          <div key={categoria.id} className="menu-category">
            <h3 className="category-title">{categoria.titulo}</h3>
            <div className="premium-grid">
              {categoria.items.map((item) => (
                <div key={item.id} className="premium-card">
                  {item.imagen && (
                    <div className="card-image-wrapper">
                      <img src={item.imagen} alt={item.nombre} loading="lazy" />
                    </div>
                  )}

                  <div className="card-content">
                    <div className="card-info">
                      <h4>{item.nombre}</h4>
                      <p>{item.descripcion}</p>
                    </div>
                    <div className="card-price">
                      <span>{item.precio === 0 ? "S/M" : `${item.precio.toFixed(2)}${menu.moneda}`}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* --- INFORMAÇÕES RAPIDAS --- */}
      <section id="horarios" className="info-section">
        <div className="info-container">
          <div className="info-box">
            <Clock size={40} color="#f1c40f" strokeWidth={1.5} />
            <h3>{t.horarios}</h3>
            <p style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
              {menu.contacto.horarios}
            </p>
          </div>

          <div id="ubicacion" className="info-box">
            <MapPin size={40} color="#f1c40f" strokeWidth={1.5} />
            <h3>{t.ubicacion}</h3>
            <p>{menu.contacto.direccion}</p>
          </div>

          <div id="reservas" className="info-box">
            <CalendarDays size={40} color="#f1c40f" strokeWidth={1.5} />
            <h3>{t.reserva}</h3>
            <p>{menu.contacto.telefono}</p>
          </div>
        </div>
      </section>

      {/* --- MAPA DO GOOGLE --- */}
      <section className="map-section">
        <div className="section-header" style={{ marginBottom: '30px' }}>
          <h2>{t.dondeEstamos}</h2>
          <div className="divider"></div>
        </div>

        <div className="map-container">
          <iframe
            title="Mapa de ubicación"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4892.730816640961!2d-7.894960726559652!3d43.183576573484295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e23bc871934df%3A0x9783a4fefee031e5!2sParrillada%20a%20capela!5e0!3m2!1spt-BR!2sus!4v1790289873555!5m2!1spt-BR!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-grid">

            <div className="footer-brand">
              <img src="/images/logo.png" alt={menu.nombreRestaurante} className="footer-logo-img" />
            </div>

            <div className="footer-contact">
              <p>{menu.contacto.direccion}</p>
              <p>{menu.contacto.telefono}</p>
            </div>

            <div className="footer-social">
              <p>{t.siguenos}</p>
              <div className="social-icons">
                <a href="#" title="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
                <a href="#" title="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
              </div>
            </div>

          </div>
          <div className="footer-nav">
            <a href="#inicio">{t.inicio}</a>
            <span className="separator">|</span>
            <a href="#nosotros">{t.sobreNosotros}</a>
            <span className="separator">|</span>
            <a href="#menu">{t.nuestroMenu}</a>
            <span className="separator">|</span>
            <a href="#horarios">{t.reserva}</a>
            <span className="separator">|</span>
            <a href="#ubicacion">{t.ubicacion}</a>
            <span className="separator">|</span>
            <a href="#horarios">{t.horarios}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} - {menu.nombreRestaurante} | {t.derechos}</p>
          <p className="developer-credit">Webdesign by <strong>Gustavo</strong></p>
        </div>
      </footer>

      {/* --- WHATSAPP FLUTUANTE --- */}
      <a
        href={`https://wa.me/${menu.contacto.telefono.replace(/\s+/g, '')}`}
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        title={t.hablaConNosotros}
      >
        <MessageCircle size={30} color="#fff" />
      </a>

    </div>
  );
}

export default App;