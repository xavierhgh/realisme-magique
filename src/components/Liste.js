import React from 'react';

function Liste({ jour, heures }) {
    return (
        <li>
            <p className="font-roboto text-[1.125rem]">{jour}</p>
            <p className="font-roboto text-[1.125rem]">{heures}</p>
        </li>
    );
}

export default Liste;