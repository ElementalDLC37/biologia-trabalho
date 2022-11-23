import "./style.css"

export default function Willian(props) {
    return (
        <div id="member-content">
            <ul id="info-list">
                <li className="info-list-item">
                    <span className="material-symbols-outlined">lunch_dining</span>
                    <div className="info-list-item-content">
                        <h1>Intestino</h1>
                        <p>Se estendendo entre o estômago e o intestino grosso, e é dividido em três partes: duodeno, jejuno e íleo.</p>
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">description</span>
                    <div className="info-list-item-content">
                        <h1>Contexto</h1>
                        <p>Responsável pela absorção dos alimentos, permitindo que os minerais, as vitaminas e nutrientes sejam aproveitados pelo organismo.</p>
                    </div>
                </li>
                <li className="info-list-item">
                <span class="material-symbols-outlined">humidity_high</span>
                    <div className="info-list-item-content">
                        <h1>Duodeno</h1>
                        <p>Está ligado diretamente ao estômago, responsável pelo esvaziamento de seu conteúdo. O duodeno está dividido em quatro partes: superior, descendente, inferior e ascendente.</p>
                    </div>
                </li>
                <li className="info-list-item">
                <span class="material-symbols-outlined">science</span>
                    <div className="info-list-item-content">
                        <h1>Jejuno</h1>
                        <p>É o segundo segmento do intestino delgado e junto com o íleo tem cerca de 6 a 7 m.</p> 
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">contrast</span>
                    <div className="info-list-item-content">
                        <h1>Íleo</h1>
                        <p>O íleo começa na parte final do jejuno e termina no começo do intestino grosso (cólon).</p>
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">info</span>
                    <div className="info-list-item-content">
                        <h1>Livre</h1>
                        <p>Embora o intestino delgado represente praticamente ¾ do sistema digestivo, é muito raro o desenvolvimento de um câncer nesse órgão.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}