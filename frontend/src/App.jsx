import React, { useState, useEffect } from 'react';
import { MapPin, Clock, BookOpen, UtensilsCrossed, CalendarDays, MessageCircle, Menu } from 'lucide-react';
import menu from './menu.json';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

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
            <span>La auténtica gastronomía española</span>
          </div>
          <div className="topbar-actions">
            <a href="#reservas" className="btn-outline-small" style={{ textDecoration: 'none' }}>Hacer Reserva</a>
            <Menu className="mobile-menu-icon" size={28} />
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
              <span>Nosotros</span>
            </a>
            <a href="#menu" className="icon-link">
              <BookOpen size={scrolled ? 24 : 32} strokeWidth={1.5} />
              <span>Menú</span>
            </a>
            <a href="#reservas" className="icon-link">
              <CalendarDays size={scrolled ? 24 : 32} strokeWidth={1.5} />
              <span>Reservas</span>
            </a>
            <a href="#ubicacion" className="icon-link">
              <MapPin size={scrolled ? 24 : 32} strokeWidth={1.5} />
              <span>Ubicación</span>
            </a>
            <a href="#horarios" className="icon-link">
              <Clock size={scrolled ? 24 : 32} strokeWidth={1.5} />
              <span>Horarios</span>
            </a>
          </nav>
        </div>
      </div>

      {/* --- HISTÓRIA (NOSOTROS) --- */}
      <section id="nosotros" className="info-section" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', borderTop: 'none' }}>
        <div className="section-header" style={{ marginBottom: '30px' }}>
          <h2>Nuestra Historia</h2>
          <div className="divider"></div>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: '#bbb', lineHeight: '1.8', fontSize: '1.1rem', padding: '0 20px' }}>
          <p>Fundado con pasión por la auténtica gastronomía española. Utilizamos ingredientes locales y recetas de familia para llevar a tu mesa el verdadero sabor de España en un ambiente acogedor y tradicional.</p>
        </div>
      </section>

      {/* --- CARDÁPIO --- */}
      <main id="menu" className="menu-container">
        <div className="section-header">
          <h2>Nuestra Carta</h2>
          <div className="divider"></div>
        </div>

        {menu.categorias.map((categoria) => (
          <div key={categoria.id} className="menu-category">
            <h3 className="category-title">{categoria.titulo}</h3>
            <div className="premium-grid">
              {categoria.items.map((item) => (
                <div key={item.id} className="premium-card">
                  <div className="card-info">
                    <h4>{item.nombre}</h4>
                    <p>{item.descripcion}</p>
                  </div>
                  <div className="card-price">
                    <span>{item.precio.toFixed(2)}{menu.moneda}</span>
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
            <h3>Horarios</h3>
            <p>{menu.contacto.horarios}</p>
          </div>
          
          <div id="ubicacion" className="info-box">
            <MapPin size={40} color="#f1c40f" strokeWidth={1.5} />
            <h3>Ubicación</h3>
            <p>{menu.contacto.direccion}</p>
          </div>
          
          <div id="reservas" className="info-box">
            <CalendarDays size={40} color="#f1c40f" strokeWidth={1.5} />
            <h3>Reservas</h3>
            <p>{menu.contacto.telefono}</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER PREMIUM (ESTILO EL MARE) --- */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-grid">
            
            <div className="footer-brand">
              <h2 className="footer-logo">{menu.nombreRestaurante}</h2>
            </div>
            
            <div className="footer-contact">
              <p>{menu.contacto.direccion}</p>
              <p>{menu.contacto.telefono}</p>
            </div>
            
            <div className="footer-social">
              <p>Síguenos en nuestras redes sociales:</p>
              <div className="social-icons">
                <a href="#" title="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" title="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>

          </div>

          <div className="footer-nav">
            <a href="#inicio">Inicio</a>
            <span className="separator">|</span>
            <a href="#nosotros">Sobre nosotros</a>
            <span className="separator">|</span>
            <a href="#menu">Nuestro menú</a>
            <span className="separator">|</span>
            <a href="#reservas">Hacer una reserva</a>
            <span className="separator">|</span>
            <a href="#ubicacion">Ubicación</a>
            <span className="separator">|</span>
            <a href="#horarios">Horarios</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} - {menu.nombreRestaurante} | Todos los derechos reservados.</p>
          <p className="developer-credit">Webdesign by <strong>Gustavo</strong></p>
        </div>
      </footer>

      {/* --- WHATSAPP FLUTUANTE --- */}
      <a 
        href={`https://wa.me/${menu.contacto.telefono.replace(/\s+/g, '')}`} 
        className="whatsapp-float" 
        target="_blank" 
        rel="noreferrer"
        title="Habla con nosotros"
      >
        <MessageCircle size={30} color="#fff" />
      </a>

    </div>
  );
}

export default App;