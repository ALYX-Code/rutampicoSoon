import { RouteBackdrop } from './RouteBackdrop.jsx'

export function ComingSoonHero() {
  return (
    <main className="coming-soon" aria-labelledby="page-title">
      <RouteBackdrop />

      <section className="hero-content">
        <img
          className="brand-logo"
          src="/brand/rutampico-oficial.svg"
          width="254"
          height="75"
          alt="RuTAMPICO"
        />

        <p className="hero-eyebrow">
          <span aria-hidden="true" />
          Estamos preparando el recorrido
        </p>

        <h1 className="hero-title" id="page-title">
          Próxima parada: RuTAMPICO
        </h1>

        <p className="hero-copy">
          Muy pronto podrás descubrir, comparar y planificar tus recorridos en transporte
          público por Tampico, Ciudad Madero y Altamira.
        </p>
      </section>

      <footer className="page-footer">RuTAMPICO</footer>
    </main>
  )
}
