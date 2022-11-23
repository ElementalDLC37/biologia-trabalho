import "./style.css"

export default function Jordan(props) {
    return (
        <div id="member-content">
            <ul id="info-list">
                <li className="info-list-item">
                    <span className="material-symbols-outlined">description</span>
                    <div className="info-list-item-content">
                        <h1>Contexto</h1>
                        <p>O esôfago é um tubo muscular oco, localizado entre a traqueia e a coluna vertebral e que conecta a garganta ao estômago.</p>
                    </div>
                </li>
                <li className="info-list-item">
                <span class="material-symbols-outlined">humidity_high</span>
                    <div className="info-list-item-content">
                        <h1>Controlador</h1>
                        <p>A parte superior do esôfago tem uma área especial de músculo que se afrouxa abrindo o esôfago quando sente a presença de alimentos ou líquidos. Este músculo é denominado esfíncter esofágico superior.</p>
                    </div>
                </li>
                <li className="info-list-item">
                <span class="material-symbols-outlined">science</span>
                    <div className="info-list-item-content">
                        <h1>Camadas</h1>
                        <p>A parede do esôfago é formada por várias camadas: Mucosa, Submucosa, Musculáris própria e Adventícia</p> 
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">contrast</span>
                    <div className="info-list-item-content">
                        <h1>Separação</h1>
                        <p>A parte inferior do esôfago que se liga ao estômago é denominada junção gastroesofágica.</p>
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">info</span>
                    <div className="info-list-item-content">
                        <h1>Esfíncter inferior</h1>
                        <p>Controla a passagem do alimento do esôfago para o estômago e faz com que o ácido estomacal e as enzimas digestivas não cheguem ao esôfago.</p>
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">lunch_dining</span>
                    <div className="info-list-item-content">
                        <h1>Submucosa</h1>
                        <p>É a camada do tecido conjuntivo logo abaixo da mucosa, que contém os vasos sanguíneos e os nervos. Em algumas partes do esôfago, essa camada também contém glândulas que secretam muco.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}