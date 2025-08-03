import React from 'react';

function Bouton({ label, onClick }) {
    return (
        <button onClick={onClick} className="w-fit bg-secondary px-6 py-4 border-blanc border">
            {label}
        </button>
    );
}

export default Bouton;