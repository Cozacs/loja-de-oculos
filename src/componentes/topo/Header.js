import logo from '../../medias/imagens/logo.png';
import './Header.css';

export default function Header(){
    return(
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <a href="#oculos">
                    <p>PRODUTOS</p>
                </a>
                <a href="#terceira">
                    <p>SOBRE</p>
                </a>
                <a href="#contato">
                    <p>CONTATO</p>
                </a>
            </nav>
        </header>
    );
}