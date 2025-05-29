import './ButtonMenu.scss';
import { Button } from '@mui/material';

export default function ButtonMenu({ open, setOpen }) {
    return (
        <Button className="menu" data-open={open} onClick={() => setOpen(!open)}>
            <span class="span_1"></span>
            <span class="span_2"></span>
            <span class="span_3"></span>
        </Button>
    )
}