import React from 'react';

function Bouton({ label, onClick }) {
    return (
        <button onClick={onClick} className="bouton">
            {label}
        </button>
    );
}

export default Bouton;