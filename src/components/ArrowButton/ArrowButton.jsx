import './ArrowButton.scss'
import { Button } from '@mui/material'

import arrow from './../../assets/arrowRight.svg'

export default function ArrowButton({ children, startWhatsAppChat }) {
    return (
        <Button 
            onClick={() => startWhatsAppChat('Olá, gostaria de mais informações sobre o Minha Casa Minha Vida Senador Canedo.')}
            className="arrow_button">
            <img src={arrow} alt="" />
            { children }
        </Button>
    )
}