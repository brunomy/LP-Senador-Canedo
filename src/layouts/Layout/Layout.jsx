import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.scss';
import Box from '@mui/material/Box';

export default function Layout({ children }) {
    return (
        <Box className="layout">
            <Header />
            { children }
            <Footer />
        </Box>
    )
}