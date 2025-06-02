import './CasasCarousel.scss'
import { Box, Button } from '@mui/material'

// SLICK
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


//Imagens
import emp1 from './../../assets/empreendimentos/emp1.png'


export default function CasasCarousel() {
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
                            titulo={'Casas Boa Vista'}
                            metrosQuad={60}
                            dados={['Documentação facilitada', 'Aceita financiamento pela Caixa']}
                        />
                        <CasaItem 
                            imagem={emp1}
                            titulo={'Casas Boa Vista'}
                            metrosQuad={60}
                            dados={['Documentação facilitada', 'Aceita financiamento pela Caixa']}
                        />
                        <CasaItem 
                            imagem={emp1}
                            titulo={'Casas Boa Vista'}
                            metrosQuad={60}
                            dados={['Documentação facilitada', 'Aceita financiamento pela Caixa']}
                        />
                        <CasaItem 
                            imagem={emp1}
                            titulo={'Casas Boa Vista'}
                            metrosQuad={60}
                            dados={['Documentação facilitada', 'Aceita financiamento pela Caixa']}
                        />
                        <CasaItem 
                            imagem={emp1}
                            titulo={'Casas Boa Vista'}
                            metrosQuad={60}
                            dados={['Documentação facilitada', 'Aceita financiamento pela Caixa']}
                        />
                    </Slider>
                </div>
            </Box>
        </Box>
    )
}

function CasaItem({ imagem, titulo, metrosQuad, dados = [] }) {
    return (
        <Box className="casa_item">
            <div className="imagem">
                <img src={imagem} alt={titulo} />
                <div className="dados">
                    {dados.map((dado) => <span>{dado}</span>)}
                </div>
            </div>
            <h3>{titulo}</h3>
            <p>a partir de {metrosQuad}m²</p>
            <Button>Simule agora</Button>
        </Box>
    )
}