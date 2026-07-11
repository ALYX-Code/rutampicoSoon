import './App.css'
import { ComingSoonHero } from './components/ComingSoonHero.jsx'
import { IntroScreen } from './components/IntroScreen.jsx'

function App() {
  return (
    <div className="app-shell">
      <IntroScreen />
      <ComingSoonHero />
    </div>
  )
}

export default App
