import FormSimular from '../FormSimular/FormSimular'
import './Simular.scss'
import { Box } from '@mui/material'

export default function Simular() {
    return (
        <Box className="simular">
            <Box className="container">
                <div className="left">
                    <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_8_7" maskUnits="userSpaceOnUse" x="0" y="0" width="62" height="63"><path d="M0 0.000183105H62V62.0002H0V0.000183105Z" fill="white"/></mask><g mask="url(#mask0_8_7)"><path d="M31 45.6525C31 53.6779 24.4941 60.1838 16.4688 60.1838C8.44338 60.1838 1.9375 53.6779 1.9375 45.6525C1.9375 37.6272 8.44338 31.1213 16.4688 31.1213C24.4941 31.1213 31 37.6272 31 45.6525Z" stroke="black" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.4688 60.1838H56.4297C58.436 60.1838 60.0625 58.5572 60.0625 56.551V13.9263L47.9536 1.81659H20.1016C18.0953 1.81659 16.4688 3.44312 16.4688 5.4494V31.1213" stroke="black" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M47.9531 1.81659V13.926H60.0625L47.9531 1.81659Z" stroke="black" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M26.079 34.7541H51.586" stroke="black" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M24.9453 23.8557H51.5859" stroke="black" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 45.6525H51.5859" stroke="black" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.9258 50.8596L10.293 47.2267" stroke="black" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.9258 50.8596L22.4023 42.383" stroke="black" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                    <h2>Simule <b>grátis</b> aqui</h2>
                    <p>Descubra como comprar sua casa em Senador Canedo com parcelas que cabem no seu bolso.</p>
                </div>
                <div className="right">
                    <FormSimular />
                </div>
            </Box>
        </Box>
    )
}