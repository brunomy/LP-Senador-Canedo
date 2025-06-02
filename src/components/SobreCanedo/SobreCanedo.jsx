import './SobreCanedo.scss'
import { Box } from '@mui/material'

import sobreCanedo from './../../assets/sobreCanedo.png'

export default function SobreCanedo() {
    return (
        <Box className="sobre_canedo">
            <div className="container">
                <div className="text_content">
                    <h2>Sobre <b>minha casa Canedo</b></h2>
                    <div>
                        <p>Somos uma empresa focada na venda de casas bem localizadas em Senador Canedo, com condições facilitadas, atendimento próximo e todo o suporte para quem busca acessar o programa Minha Casa, Minha Vida com segurança e tranquilidade.</p>
                        <p>Acreditamos que cada casa vendida é o começo de uma nova história. Por isso, oferecemos <b>transparência, agilidade e preços que cabem no seu bolso,</b> seja para morar ou investir.</p>
                        <p>Aqui, o seu futuro começa com uma casa bem escolhida.</p>
                    </div>
                </div>
                <div className="image">
                    <img src={sobreCanedo} alt="" />
                </div>
            </div>
        </Box>
    )
}