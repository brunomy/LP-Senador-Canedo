import './CasasCarousel.scss'
import { Box, Button } from '@mui/material'

// SLICK
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


//Imagens
import emp1 from './../../assets/empreendimentos/empreendimento1.jpeg'
import emp2 from './../../assets/empreendimentos/empreendimento2.jpeg'
import emp3 from './../../assets/empreendimentos/empreendimento3.jpeg'
import emp4 from './../../assets/empreendimentos/empreendimento4.jpeg'

export default function CasasCarousel({ startWhatsAppChat }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        center: true,
        arrows: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <Box className="casas_carousel" id="casas">
            <Box className="container">
                <h2>Casas para quem <b>quer viver bem</b></h2>
                <p>Casas prontas para morar em Senador Canedo, com infraestrutura completa, documentação regularizada e condições facilitadas</p>

                <div className="carousel">
                    <Slider {...settings}>
                        <CasaItem 
                            imagem={emp1}
                            titulo={'Terra bela'}
                            metrosQuad={'125m² a 180m²'}
                            dados={['Casas de 93m² a 124m²', 'Aceita financiamento pela Caixa']}
                            startWhatsAppChat={ startWhatsAppChat }
                        />
                        <CasaItem 
                            imagem={emp2}
                            titulo={'Top do lago'}
                            metrosQuad={'125m² a 180m²'}
                            dados={['Casas de 93m² a 124m²', 'Aceita financiamento pela Caixa']}
                            startWhatsAppChat={ startWhatsAppChat }
                        />
                        <CasaItem 
                            imagem={emp3}
                            titulo={'São Francisco'}
                            metrosQuad={'125m² a 180m²'}
                            dados={['Casas de 93m² a 124m²', 'Aceita financiamento pela Caixa']}
                            startWhatsAppChat={ startWhatsAppChat }
                        />
                        <CasaItem 
                            imagem={emp4}
                            titulo={'Parque dos buritis'}
                            metrosQuad={'125m² a 180m²'}
                            dados={['Casas de 93m² a 124m²', 'Aceita financiamento pela Caixa']}
                            startWhatsAppChat={ startWhatsAppChat }
                        />
                    </Slider>
                </div>
            </Box>
        </Box>
    )
}

function CasaItem({ imagem, titulo, metrosQuad, dados = [], startWhatsAppChat }) {
    return (
        <Box className="casa_item">
            <div className="imagem">
                <img src={imagem} alt={titulo} />
                <div className="dados">
                    {dados.map((dado) => <span>{dado}</span>)}
                </div>
            </div>
            <h3>{titulo}</h3>
            <p>lotes de {metrosQuad}</p>
            <Button onClick={() => startWhatsAppChat(
                'Olá, gostaria de mais informações sobre o Minha Casa Minha Vida Senador Canedo. '+
                'Tive interesse no loteamento *'+titulo+'*.'
            )}>Simule agora</Button>
        </Box>
    )
}