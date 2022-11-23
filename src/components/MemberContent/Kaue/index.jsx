import "./style.css"

export default function Kaue(props) {
    return (
        <div id="member-content">
            <ul id="info-list">
                <li className="info-list-item">
                    <span className="material-symbols-outlined">description</span>
                    <div className="info-list-item-content">
                        <h1>Contexto</h1>
                        <p>Orgão comum aos sistemas digestório e respiratório, permitindo a comunicação entre esses dois sistemas.</p>
                    </div>
                </li>
                <li className="info-list-item">
                <span class="material-symbols-outlined">humidity_high</span>
                    <div className="info-list-item-content">
                        <h1>Proteção</h1>
                        <p>É na faringe que encontramos as chamadas tonsilas, formadas por tecido linfático e atuantes na defesa do organismo. Inflamações na faringe costumam provocar dor e irritação na região da garganta e são chamadas de faringites.</p>
                    </div>
                </li>
                <li className="info-list-item">
                <span class="material-symbols-outlined">science</span>
                    <div className="info-list-item-content">
                        <h1>Tonsílas</h1>
                        <p>Órgãos formados por tecido linfático e que atuam na defesa do organismo contra antígenos presentes nos alimentos e no ar.</p> 
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">contrast</span>
                    <div className="info-list-item-content">
                        <h1>Separação</h1>
                        <p>Apresenta cerca de 12,5 centímetros e pode ser dividido em três regiões: nasal, oral e laríngea.</p>
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">info</span>
                    <div className="info-list-item-content">
                        <h1>Linfócitos</h1>
                        <p>Nas tonsilas são produzidos linfócitos, células de defesa do organismo. De acordo com a posição que ocupam na região da boca e da faringe, podem ser divididas em palatinas, faringiana e linguais.</p>
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">lunch_dining</span>
                    <div className="info-list-item-content">
                        <h1>Faringite</h1>
                        <p>Inflamação que acomete a faringe. Pode ser causada por diferentes agentes, porém, geralmente, é desencadeada por vírus, como adenovírus e influenza. Na faringite, o paciente sente sintomas como dor ao engolir, irritação na garganta, pigarro e febre.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}