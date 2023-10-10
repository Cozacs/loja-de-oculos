import './TerceiraSecao.css';

export default function TerceiraSecao(){
    return(
        <section id="terceira">
            <h2>QUEM SOMOS NÓS?</h2>
            <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
            <div className="sobre">
                <div className="foto" id="loja">
                </div>
                <div className="info">
                    <h2>NOSSAS FILIAIS</h2>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                <div className="info">
                    <h2>ATENDIMENTO FLÉXIVEL</h2>
                    <p>Nossa equipe possui é treinada para te atender</p>
                </div>
                <div className="foto" id="atende">
                </div>
            </div>
        </section>
    );
}