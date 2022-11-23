import "./style.css"

export default function Renan(props) {
    return (
        <div id="member-content">
            <ul id="info-list">
                <li className="info-list-item">
                    <span className="material-symbols-outlined">description</span>
                    <div className="info-list-item-content">
                        <h1>Contexto</h1>
                        <p>Porção final do sistema digestório e é o local onde as fezes são formadas.</p>
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">open_in_full</span>
                    <div className="info-list-item-content">
                        <h1>Trabalho</h1>
                        <p>Grande parte da água e sais minerais é absorvida, alguns produtos são fermentados e muco é formado.</p>
                    </div>
                </li>
                <li className="info-list-item">
                <span class="material-symbols-outlined">humidity_high</span>
                    <div className="info-list-item-content">
                        <h1>Tamanho</h1>
                        <p>Anatomicamente, o intestino grosso apresenta-se mais calibroso e também é mais curto que o intestino delgado.</p>
                    </div>
                </li>
                <li className="info-list-item">
                <span class="material-symbols-outlined">science</span>
                    <div className="info-list-item-content">
                        <h1>Partes</h1>
                        <p>O intestino grosso apresenta algumas partes principais: ceco, cólon, reto e ânus. O cólon é dividido em cólon ascendente, cólon transverso, cólon descendente e cólon sigmoide.</p> 
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">contrast</span>
                    <div className="info-list-item-content">
                        <h1>Presenças</h1>
                        <p>O intestino grosso é repleto de bactérias.</p>
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">info</span>
                    <div className="info-list-item-content">
                        <h1>Olhando mais a fundo</h1>
                        <p>A camada mucosa do intestino grosso não apresenta vilosidades como as que estão presentes no intestino delgado.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}