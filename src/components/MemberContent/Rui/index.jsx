import "./style.css"

export default function Rui(props) {
    return (
        <div id="member-content">
            <ul id="info-list">
                <li className="info-list-item">
                    <span className="material-symbols-outlined">open_in_full</span>
                    <div className="info-list-item-content">
                        <h1>Dilatação</h1>
                        <p>O estômago é a parte mais dilatada do tubo digestório.</p>
                    </div>
                </li>
                <li className="info-list-item">
                <span class="material-symbols-outlined">humidity_high</span>
                    <div className="info-list-item-content">
                        <h1>Suco gástrico</h1>
                        <p>Esse órgão é responsável por secretar suco gástrico, renina, fator intrínseco e os hormônios gastrina e grelina.</p>
                    </div>
                </li>
                <li className="info-list-item">
                <span class="material-symbols-outlined">science</span>
                    <div className="info-list-item-content">
                        <h1>Acídez</h1>
                        <p>O suco gástrico contém ácido clorídrico e pepsina, uma enzima que atua na quebra de proteínas.</p>
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">contrast</span>
                    <div className="info-list-item-content">
                        <h1>Separação</h1>
                        <p>Quatro regiões distintas podem ser identificadas no estômago: a cárdia, o fundo, o corpo e o piloro ou antro.</p>
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">info</span>
                    <div className="info-list-item-content">
                        <h1>Atenção</h1>
                        <p>Dor na região do estômago é um sintoma que pode ocorrer como consequência de diferentes problemas de saúde.</p>
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">lunch_dining</span>
                    <div className="info-list-item-content">
                        <h1>Digestão</h1>
                        <p>Garante o início da digestão das proteínas.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}