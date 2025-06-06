import './App.css'
import Banner from './components/Banner/Banner'
import BannerRegiao from './components/BannerRegiao/BannerRegiao'
import CasasCarousel from './components/CasasCarousel/CasasCarousel'
import PerguntasFrequentes from './components/PerguntasFrequentes/PerguntasFrequentes'
import Simular from './components/Simular/Simular'
import SobreCanedo from './components/SobreCanedo/SobreCanedo'
import Layout from './layouts/Layout/Layout'

function App() {
  const startWhatsAppChat = (message = '') => {
    const phoneNumber = '5562999148826';
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <Layout startWhatsAppChat={startWhatsAppChat}>
      <Banner startWhatsAppChat={startWhatsAppChat} />
      <Simular startWhatsAppChat={startWhatsAppChat} />
      <CasasCarousel startWhatsAppChat={startWhatsAppChat}/>
      <BannerRegiao startWhatsAppChat={startWhatsAppChat} />
      <SobreCanedo />
      <PerguntasFrequentes />
    </Layout>
  )
}

export default App
