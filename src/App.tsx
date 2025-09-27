import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('')

  const handleAction = (action: string) => {
    setActiveSection(action)
    // Aquí se implementarían las acciones reales
    setTimeout(() => setActiveSection(''), 2000)
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <button className="nav-btn active">📁 Archivo</button>
          <button className="nav-btn">🚗 Carro</button>
          <button className="nav-btn">🚌 Bus</button>
          <button className="nav-btn">👥 Pasajero</button>
          <button className="nav-btn">❓ Ayuda</button>
        </nav>
        <div className="title-section">
          <h1 className="main-title">🚗 CONCESIONARIO AAA</h1>
          <p className="subtitle">Sistema Integral de Gestión Vehicular</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="app-logo-section">
          <h2 className="app-name">ConcesionarioApp</h2>
          <div className="vehicle-icons">
            <div className="vehicle car">🚗</div>
            <div className="vehicle bus">🚌</div>
          </div>
        </div>

        <div className="content-grid">
          {/* Características del Sistema */}
          <section className="features-section">
            <h3 className="section-title">📋 Características del Sistema</h3>
            <ul className="features-list">
              <li className="feature-item">
                <span className="feature-icon">✅</span>
                Gestión completa de automóviles
              </li>
              <li className="feature-item">
                <span className="feature-icon">✅</span>
                Administración de buses
              </li>
              <li className="feature-item">
                <span className="feature-icon">✅</span>
                Control de pasajeros
              </li>
              <li className="feature-item">
                <span className="feature-icon">✅</span>
                Cálculos polinómicos de valores
              </li>
              <li className="feature-item">
                <span className="feature-icon">✅</span>
                Reportes detallados
              </li>
              <li className="feature-item">
                <span className="feature-icon">🔄</span>
                Próxima Observar implementado
              </li>
            </ul>
          </section>

          {/* Acciones Rápidas */}
          <section className="actions-section">
            <h3 className="section-title">⚡ Acciones Rápidas</h3>
            <div className="actions-grid">
              <button 
                className="action-btn btn-blue"
                onClick={() => handleAction('Agregar Carro')}
              >
                <span className="btn-icon">🚗</span>
                Agregar Carro
              </button>
              <button 
                className="action-btn btn-yellow"
                onClick={() => handleAction('Agregar Bus')}
              >
                <span className="btn-icon">🚌</span>
                Agregar Bus
              </button>
              <button 
                className="action-btn btn-green"
                onClick={() => handleAction('Listar Carros')}
              >
                <span className="btn-icon">📋</span>
                Listar Carros
              </button>
              <button 
                className="action-btn btn-purple"
                onClick={() => handleAction('Listar Buses')}
              >
                <span className="btn-icon">📊</span>
                Listar Buses
              </button>
              <button 
                className="action-btn btn-orange"
                onClick={() => handleAction('Reporte Polinómico')}
              >
                <span className="btn-icon">📈</span>
                Reporte Polinómico
              </button>
              <button 
                className="action-btn btn-teal"
                onClick={() => handleAction('Ver Tarifas')}
              >
                <span className="btn-icon">💰</span>
                Ver Tarifas
              </button>
            </div>
          </section>
        </div>

        {/* Status Message */}
        {activeSection && (
          <div className="status-message">
            <span className="status-icon">⚡</span>
            Ejecutando: {activeSection}...
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-stats">
          <span>📊 Total de Vehículos: 0</span>
          <span>🔄 Sistema Activo</span>
          <span>📊 Polimorfismo Implementado</span>
        </div>
        <p className="footer-text">© Desarrollado por Sebastián Salinas Jure | David Perea | Julio Salinas | 2.0.1</p>
      </footer>
    </div>
  )
}

export default App
