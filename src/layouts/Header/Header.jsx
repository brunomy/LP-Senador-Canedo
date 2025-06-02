import './Header.scss';
import { Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';

import logo from '../../assets/logo.svg';
import whatsapp from '../../assets/whatsapp.svg';
import ButtonMenu from '../../components/ButtonMenu/ButtonMenu';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;

          if(scrollY > 0) {
            setScroll(true);
          } else {
            setScroll(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToElementById = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setOpen(false)
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Box className="header_content" data-scroll={scroll} data-open={open}>
            <div className="space_header"></div>
            <header>
                <Box className="container">
                    <div className="logo" onClick={() => scrollToTop()}>
                        <img src={logo} alt="Minha casa canedo" />
                    </div>
                    <div className="menu_content">
                        <Button className="scroll" onClick={() => scrollToElementById('simule')}>Simule</Button>
                        <Button className="scroll" onClick={() => scrollToElementById('casas')}>Casas</Button>
                        <Button className="scroll" onClick={() => scrollToElementById('sobre')}>Sobre Minha Casa Canedo</Button>
                        <Button className="scroll" onClick={() => scrollToElementById('perguntas_frequentes')}>Perguntas frequentes</Button>
                        <Button className="whatsapp">
                            <img src={whatsapp} alt="" />
                            FALE COM UM ESPECIALISTA
                        </Button>
                    </div>
                    <ButtonMenu 
                        open={open}
                        setOpen={setOpen}
                    />
                </Box>
            </header>
        </Box>
    )
}