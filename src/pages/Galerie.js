import React from 'react';
import '../components/Images'
import Oeuvre from '../components/Oeuvre';
import Img from '../images/IMG20250710161614.png'

function Galerie() {
    return (
        <div className="m-5">
            <article>
                <Oeuvre img={Img} alt="Description of your image" title="Titre de l'oeuvre" by="Nom de l'artiste" />
            </article>
        </div>
    );
}

export default Galerie;