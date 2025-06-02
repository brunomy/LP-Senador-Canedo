import './App.css'
import Banner from './components/Banner/Banner'
import BannerRegiao from './components/BannerRegiao/BannerRegiao'
import CasasCarousel from './components/CasasCarousel/CasasCarousel'
import PerguntasFrequentes from './components/PerguntasFrequentes/PerguntasFrequentes'
import Simular from './components/Simular/Simular'
import SobreCanedo from './components/SobreCanedo/SobreCanedo'
import Layout from './layouts/Layout/Layout'

function App() {

  return (
    <Layout>
      <Banner />
      <Simular />
      <CasasCarousel />
      <BannerRegiao />
      <SobreCanedo />
      <PerguntasFrequentes />
    </Layout>
  )
}

export default App
