import ArrowButton from '../ArrowButton/ArrowButton';
import './Banner.scss';
import { Box } from '@mui/material';

import minhaCasa from './../../assets/minhaCasaMinhaVida.svg';
import banner from './../../assets/banner[980x622].png';

export default function Banner({ startWhatsAppChat }) {
    return (
        <Box className="banner">
            <Box className="container">
                <div className="left">
                    <h1>Minha Casa Minha Vida <b>Senador Canedo</b></h1>
                    <p>Troque seu aluguel, pela prestação da SUA CASA.</p>
                    <div>
                        <ArrowButton startWhatsAppChat={startWhatsAppChat}>Simule agora</ArrowButton>
                        <img src={ minhaCasa } alt="Minha casa minha vida" />
                    </div>
                </div>
                <div className="right">
                    <img src={banner} alt="Família com casa nova" />
                </div>
            </Box>
        </Box>
    )
}