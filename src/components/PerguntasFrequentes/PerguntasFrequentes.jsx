import './PerguntasFrequentes.scss'
import { Box, Button } from '@mui/material'
import { useState } from 'react'

export default function PerguntasFrequentes() {
    return (
        <Box className="perguntas_frequentes" id="perguntas_frequentes">
            <Box className="container">
                <h2>Perguntas <b>Frequentes</b></h2>

                <div className="perguntas_content">
                    <PerguntaItem 
                        pergunta="O que é o programa Minha Casa Minha Vida?"
                        resposta="O Minha Casa Minha Vida é um programa do governo que facilita o acesso à casa própria para famílias de baixa e média renda, oferecendo condições diferenciadas de financiamento, tanto na taxa de juros quanto com subsídios."
                    />
                    <PerguntaItem 
                        pergunta="Quem pode participar do programa?"
                        resposta="Qualquer pessoa com renda familiar de até R$ 8.000 pode participar, mas os benefícios variam de acordo com a faixa de renda em que a família se enquadra."
                    />
                    <PerguntaItem 
                        pergunta="Quais documentos são necessários para solicitar o financiamento?"
                        resposta="Os principais documentos incluem RG, CPF, comprovante de renda, comprovante de estado civil e comprovante de residência atual."
                    />
                    <PerguntaItem 
                        pergunta="Como funciona o processo de financiamento?"
                        resposta="O processo começa com uma avaliação de crédito para determinar a capacidade de financiamento da família. Com essa informação, passamos para a segunda etapa: a escolha do imóvel dentro da faixa de avaliação. Após a escolha do imóvel, ocorre a etapa de aprovação do financiamento, seguida pela assinatura do contrato e, finalmente, a liberação dos recursos para a compra do imóvel."
                    />
                    <PerguntaItem 
                        pergunta="Preciso dar algum valor de entrada?"
                        resposta="Normalmente é necessário fornecer um valor de entrada, porem tem ocasiões que não é necessário dar entrada, tudo denpenderá da sua renda e perfil, tanto o FGTS quanto o subsídio do Governo Federal pode cobrir o valor desse saldo inicial."
                    />
                    <PerguntaItem 
                        pergunta="Quanto tempo leva para o financiamento ser aprovado?"
                        resposta="O tempo pode variar, mas geralmente leva entre 30 e 60 dias para a aprovação completa, dependendo do cumprimento de todos os requisitos e documentação."
                    />
                    <PerguntaItem 
                        pergunta="É possível financiar imóveis usados através do programa?"
                        resposta="Sim, o programa financia tanto imóveis novos quanto usados, desde que atendam aos critérios estabelecidos pelo programa. A diferença é que no imóvel usado o percentual do valor do imóvel a ser financiado será menor."
                    />
                    <PerguntaItem 
                        pergunta="Como as parcelas do financiamento são calculadas?"
                        resposta="As parcelas são calculadas com base na renda familiar, valor do imóvel, e condições do programa, podendo incluir subsídios que reduzem o valor das prestações."
                    />
                    <PerguntaItem 
                        pergunta="Posso escolher qualquer imóvel para financiar?"
                        resposta="Os imóveis devem atender aos critérios do programa e estar dentro dos valores-limite estabelecidos para cada região."
                    />
                    <PerguntaItem 
                        pergunta="Existe algum tipo de subsídio disponível?"
                        resposta="Sim, dependendo da faixa de renda, o programa oferece subsídios que podem reduzir o valor financiado."
                    />
                    <PerguntaItem 
                        pergunta="Posso usar o FGTS como entrada no financiamento?"
                        resposta="Sim, o FGTS pode ser utilizado tanto para dar entrada quanto para reduzir o saldo devedor do financiamento."
                    />
                    <PerguntaItem 
                        pergunta="O que acontece se eu atrasar o pagamento das parcelas?"
                        resposta="Os atrasos podem gerar juros e multas, além de impactar o seu crédito. É importante buscar renegociação assim que possível em caso de dificuldade."
                    />
                    <PerguntaItem 
                        pergunta="Como faço para iniciar o processo de financiamento?"
                        resposta="Você pode entrar em contato conosco para uma avaliação inicial. Estaremos à disposição para ajudar em todas as etapas do processo."
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
