import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='footer-myself-desc'>
                <h2>Sobre o Autor:</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et justo iaculis, molestie nunc ut, accumsan turpis. Cras finibus, eros in faucibus aliquet, eros massa mattis quam, fringilla cursus diam erat non justo. Nullam ut tortor augue. Phasellus id velit quis erat tempor facilisis.</p>
                <a href="https://davisantos.dev.br/" target="_blank">
                <i className="bi bi-box-arrow-up-right"></i> Portfólio
                </a>
                <a href="mailto:contato@davisantos.dev.br" target="_blank">
                    <i className="bi bi-envelope-at-fill"></i> Contato@davisantos.dev.br
                </a>
            </div>

            <div className="footer-prj-desc">
                <h2>Sobre o Projeto:</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et justo iaculis, molestie nunc ut, accumsan turpis. Cras finibus, eros in faucibus aliquet, eros massa mattis quam, fringilla cursus diam erat non justo.</p>
                <a href="https://github.com/Davisilvas/subscription-manager" target='_blank'>
                    <i className="bi bi-github"></i> Links do repositório
                </a>
            </div>

            <nav className='footer-nav'>
                <ul>
                <h2>Redes Sociais:</h2>
                    <li className='footer-nav-links'>
                        <a href="https://www.linkedin.com/in/davisilvasantoss/" target="_blank">
                        <i className="bi bi-linkedin"></i>  LinkedIn
                        </a>
                    </li>
                    <li className='footer-nav-links'>
                        <a href="https://www.instagram.com/davi120_/" target="_blank">
                        <i className="bi bi-instagram"></i>  Instagram
                        </a>
                    </li>
                    <li className='footer-nav-links'>
                        <a href="https://twitter.com/davi__ssd" target="_blank">
                        <i className="bi bi-twitter-x"></i>  Twitter
                        </a>
                    </li>
                    <li className='footer-nav-links'>
                        <a href="https://tr.ee/55_APiWjTm" target="_blank">
                        <i className="bi bi-whatsapp"></i>  Whatsapp
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer