import { useState } from 'react'
import SaibaMais from '../SaibaMais/SaibaMais'
import './FormSimular.scss'
import { Box, TextField, Button, InputAdornment } from '@mui/material'

export default function FormSimular({startWhatsAppChat}) {
    const [possuiFGTS, setPossuiFGTS] = useState(true);
    const [renda, setRenda] = useState(null)
    const [fgts, setFgts] = useState(null)

    const handleChange = (e) => {
        setPossuiFGTS(e.target.value === 'true');
    };

    const submit = () => {
        var message = "Olá, gostaria de mais informações sobre o Minha Casa Minha Vida Senador Canedo.";

        if(renda){
            message += ' Minha renda familiar é R$'+renda+',00.'
        }
        if(possuiFGTS && fgts){
            message += ' E possuo R$'+fgts+',00 de FGTS.'
        }
   
        startWhatsAppChat(message)
    }

    return (
        <Box className="form_simular">
            <div className="input_content">
                <div className="title">
                    <span>Renda familiar total:</span>
                    <SaibaMais text="Valor da renda da família mensal dividido pelo número de pessoas da família." />
                </div>
                <input 
                    value={renda}
                    onChange={(e) => setRenda(e.target.value)}
                    type="number" 
                    className="input_form" 
                    placeholder="Digite o valor R$" />
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
                    <input 
                        onChange={(e) => setFgts(e.target.value)}
                        value={fgts}
                        type="number" 
                        className="input_form" 
                        placeholder="Digite o valor R$" />
                </div>
            }
            <Button onClick={submit}>Fazer simulação</Button>
        </Box>
    )
}