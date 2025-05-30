import './ArrowButton.scss'
import { Button } from '@mui/material'

import arrow from './../../assets/arrowRight.svg'

export default function ArrowButton({ children }) {
    return (
        <Button className="arrow_button">
            <img src={arrow} alt="" />
            { children }
        </Button>
    )
}