import React from 'react';

function Liste({ jour, heures }) {
    return (
        <li>
            <p className="text-more">{jour}</p>
            <p className="text-more">{heures}</p>
        </li>
    );
}

export default Liste;