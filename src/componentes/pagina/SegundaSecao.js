import './SegundaSecao.css';

export default function SegundaSecao(){
    return(
        <section id="oculos">
            <h2>NOSSOS PRODUTOS</h2>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            <div className="quadro">
                <div className="card" id="grau">
                    <p>Óculos de grau</p>
                    <span>R$ 500,00</span>
                </div>
                <div className="card" id="transition">
                    <p>Óculos transition</p>
                    <span>R$ 750,00</span>
                </div>
                <div className="card" id="sol">
                    <p>Óculos de sol</p>
                    <span>R$ 700,00</span>
                </div>
                <div className="card" id="infantil">
                    <p>Óculos infantil</p>
                    <span>R$ 500,00</span>
                </div>
            </div>
            <p>Todos os nossos produtos incluem:</p>
            <ul>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>
        </section>
    );
}