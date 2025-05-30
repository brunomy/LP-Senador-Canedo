import './App.css'
import Banner from './components/Banner/Banner'
import BannerRegiao from './components/BannerRegiao/BannerRegiao'
import CasasCarousel from './components/CasasCarousel/CasasCarousel'
import Simular from './components/Simular/Simular'
import Layout from './layouts/Layout/Layout'

function App() {

  return (
    <Layout>
      <Banner />
      <Simular />
      <CasasCarousel />
      <BannerRegiao />
    </Layout>
  )
}

export default App
