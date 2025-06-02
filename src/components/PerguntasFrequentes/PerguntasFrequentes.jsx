import './PerguntasFrequentes.scss'
import { Box, Button } from '@mui/material'
import { useState } from 'react'

export default function PerguntasFrequentes() {
    return (
        <Box className="perguntas_frequentes">
            <Box className="container">
                <h2>Perguntas <b>Frequentes</b></h2>

                <div className="perguntas_content">
                    <PerguntaItem 
                        pergunta="Tem muita burocracia para compra da casa?"
                        resposta="Não, facilitamos o processo para você! Não exigimos comprovação de renda, nem consulta ao SPC ou Serasa."
                    />
                    <PerguntaItem 
                        pergunta="Tem muita burocracia para compra da casa?"
                        resposta="Não, facilitamos o processo para você! Não exigimos comprovação de renda, nem consulta ao SPC ou Serasa."
                    />
                    <PerguntaItem 
                        pergunta="Tem muita burocracia para compra da casa?"
                        resposta="Não, facilitamos o processo para você! Não exigimos comprovação de renda, nem consulta ao SPC ou Serasa."
                    />
                    <PerguntaItem 
                        pergunta="Tem muita burocracia para compra da casa?"
                        resposta="Não, facilitamos o processo para você! Não exigimos comprovação de renda, nem consulta ao SPC ou Serasa."
                    />
                    <PerguntaItem 
                        pergunta="Tem muita burocracia para compra da casa?"
                        resposta="Não, facilitamos o processo para você! Não exigimos comprovação de renda, nem consulta ao SPC ou Serasa."
                    />
                    <PerguntaItem 
                        pergunta="Tem muita burocracia para compra da casa?"
                        resposta="Não, facilitamos o processo para você! Não exigimos comprovação de renda, nem consulta ao SPC ou Serasa."
                    />
                </div>
            </Box>
        </Box>
    )
}

function PerguntaItem({ pergunta, resposta }) {
    const [open, setOpen] = useState(false)

    return (
        <Box className="pergunta_item" data-open={open} onClick={() => setOpen(!open)}>
            <div>
                <h3>{pergunta}</h3>
                <Button><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.22168 17.5872L9.44095 9.33057L1.22168 1.07398" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></Button>
            </div>
            { open &&
                <p>{resposta}</p>
            }
        </Box>
    )
}
