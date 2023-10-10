import './Contato.css';
import local from '../../medias/imagens/local.png';
import telefone from '../../medias/imagens/telefone.png';
import email from '../../medias/imagens/email.png';
import face from '../../medias/imagens/fb.png';
import insta from '../../medias/imagens/ig.png';
import twittr from '../../medias/imagens/tt.png';

export default function Contato(){
    return (
        <section id="contato">
            <h2>FALE CONOSCO</h2>
            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            <div id="contate">
                <div className="tabelaContato">
                    <p>Contato</p>
                    <div className="infos">
                        <img src={local} alt="endereço" />
                        <span>Nova Iguaçu, RJ</span>
                    </div>
                    <div className="infos">
                        <img src={telefone} alt="" />
                        <span>(21) 9999-9999</span>
                    </div>
                    <div className="infos">
                        <img src={email} alt="" />
                        <span>contato@oticavida.com</span>
                    </div>
                </div>
                <div className="tabelaContato">
                    <p>Nossas Redes Sociais</p>
                    <div className="infos">
                        <img src={face} alt="" />
                        <span>/OticaVida</span>
                    </div>
                    <div className="infos">
                        <img src={insta} alt="" />
                        <span>@oticavidarj</span>
                    </div>
                    <div className="infos">
                        <img src={twittr} alt="" />
                        <span>@oticavidarj</span>
                    </div>
                </div>
            </div>
        </section>
    );
}