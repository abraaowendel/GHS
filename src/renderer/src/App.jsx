import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import MainRoutes from './routers/MainRoutes'

function App() {
  return (
    <>
      <Dashboard />
      <main>
        <Header/>
        <MainRoutes />
      </main>
    </>
  )
}

export default App;

/* GESTÃO HOTELEIRA SIMPLIFICADA */
