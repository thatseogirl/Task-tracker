import { useNavigate } from 'react-router-dom'
import Button from './Button'

export default function Footer() {
    const navigate = useNavigate()
    return (
        <footer>
            <Button
                text='About'
                color='grey'
                onClick={() => navigate("/about")}
            ></Button>
            <p>Copyright © 2022</p>
        </footer>
    )
}
