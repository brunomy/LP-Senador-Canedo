import './BannerRegiao.scss'
import { Box } from '@mui/material'
import ArrowButton from './../ArrowButton/ArrowButton'

import bannerCanedo from './../../assets/bannerCanedo.png'

export default function BannerRegiao() {
    return (
        <Box className="banner_regiao">
            <Box className="container">
                <img src={bannerCanedo} alt="Foto da região do setor Senador Canedo" />

                <div>
                    <h2>Compre sua casa em <b>Senador Canedo</b></h2>
                    <p>Troque seu aluguel, pela prestação da SUA CASA.</p>
                    <ArrowButton>Simule Agora</ArrowButton>
                </div>
            </Box>
        </Box>
    )
}