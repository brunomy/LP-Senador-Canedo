import './Footer.scss';
import { Box, Button } from '@mui/material';

import logo from '../../assets/logo.svg';
import arrowTop from '../../assets/arrowTop.svg';

export default function Footer() {
    return(
        <footer>
            <Box className="container">
                <div className="logo">
                    <img src={logo} alt="Minha casa canedo" />
                </div>
                <ul>
                    <li>Consulte regiões participantes do Programa Minha Casa Minha Vida - subsídio sujeito à aprovação da análise de crédito.</li>
                    <li>Valor das parcelas de entrada sujeito à aprovação da análise de crédito.</li>
                    <li>O empreendimento Portal Vila Prudente será entregue com piso. </li>
                    <li>Quantidade das parcelas sujeito à aprovação da análise de crédito. </li>
                    <li>Renda familiar sujeito à aprovação da análise de crédito. </li>
                    <li>Utilização do FGTS, sujeito à aprovação da análise de crédito. </li>
                    <li>As áreas que são entregues equipadas constam expressamente no Memorial Descritivo. A área ilustrada é uma sugestão de uso, e depende de contratação do serviço pelo condomínio.</li>
                </ul>
                <div className="politica_privacidade">
                    <p>Todos os direitos reservados - Política de Privacidade - CNPJ: 00.000.000/0001-00 CRECI – 00000000</p>
                    <Button>
                        Voltar para o topo
                        <img src={arrowTop} alt="" />
                    </Button>
                </div>
            </Box>
        </footer>
    )
}