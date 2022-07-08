import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <p>Copyright © 2022</p>
            <Link to="/about">About</Link>
        </footer>
    )
}
