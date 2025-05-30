import { useState } from 'react'
import SaibaMais from '../SaibaMais/SaibaMais'
import './FormSimular.scss'
import { Box, TextField, Button, InputAdornment } from '@mui/material'

export default function FormSimular() {
    const [possuiFGTS, setPossuiFGTS] = useState(true);
    const handleChange = (e) => {
        setPossuiFGTS(e.target.value === 'true');
    };

    return (
        <Box className="form_simular">
            <div className="input_content">
                <div className="title">
                    <span>Renda familiar total:</span>
                    <SaibaMais text="Valor da renda da família mensal dividido pelo número de pessoas da família." />
                </div>
                <input type="text" className="input_form" placeholder="Digite o valor R$" />
            </div>
            <div className="radio_content">
                <div className="title">
                    <span>Possuí FGTS?</span>
                </div>
                <div className="checkbox">
                    <div>
                        <input 
                            id="sim" 
                            type="radio" 
                            name="possuiFGTS"
                            value="true"
                            checked={possuiFGTS === true}
                            onChange={handleChange} />
                        <label htmlFor="sim">Sim</label>
                    </div>
                    <div>
                        <input 
                            id="nao" 
                            type="radio" 
                            name="possuiFGTS" 
                            value="false"
                            checked={possuiFGTS === false}
                            onChange={handleChange} />
                        <label htmlFor="nao">Não</label>
                    </div>
                </div>
            </div>
            {
                possuiFGTS &&
                <div className="input_content full">
                    <div className="title">
                        <span>Valor do FGTS:</span>
                        <SaibaMais text="Valor acumulado refetente ao FGTS." />
                    </div>
                    <input type="text" className="input_form" placeholder="Digite o valor R$" />
                </div>
            }
            <Button>Fazer simulação</Button>
        </Box>
    )
}