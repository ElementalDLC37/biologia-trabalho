import "./style.css"

export default function Bruno(props) {
    return (
        <div id="member-content">
            <ul id="info-list">
                <li className="info-list-item">
                    <span className="material-symbols-outlined">lunch_dining</span>
                    <div className="info-list-item-content">
                        <h1>Buraco negro</h1>
                        <p>Orifício na extremidade inferior do intestino.</p>
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">open_in_full</span>
                    <div className="info-list-item-content">
                        <h1>Hemorroidas</h1>
                        <p>Veias muito dilatadas na região anal. Essas veias dilatadas podem causar hemorragia e dor, necessitando, algumas vezes, de cuidados médicos.</p>
                    </div>
                </li>
                <li className="info-list-item">
                <span class="material-symbols-outlined">humidity_high</span>
                    <div className="info-list-item-content">
                        <h1>Classificação</h1>
                        <p>Costuma-se classificar as hemorroidas em internas e externas, sendo as internas recobertas pela mucosa e as externas recobertas pela própria pele.</p>
                    </div>
                </li>
                <li className="info-list-item">
                <span class="material-symbols-outlined">science</span>
                    <div className="info-list-item-content">
                        <h1>Canal anal</h1>
                        <p>Rodeado por um esfíncter, músculo circular que mantém as fezes armazenadas no interior do reto e canal anal até que seja relaxado durante a evacuação.</p> 
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">contrast</span>
                    <div className="info-list-item-content">
                        <h1>Células</h1>
                        <p>A maioria das células localizadas no meio do canal anal tem a forma de cubos e são denominadas células transicionais.</p>
                    </div>
                </li>
                <li className="info-list-item">
                    <span className="material-symbols-outlined">info</span>
                    <div className="info-list-item-content">
                        <h1>Borda</h1>
                        <p>Na borda anal, as células escamosas do canal anal inferior se fundem com a pele do lado de fora do ânus.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}