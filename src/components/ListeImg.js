import React from 'react';

function ListeImg({href, text, icon}) {
    return (
          <li>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={icon}
                alt={`${text} Icon`}
                className="inline-block w-6 h-6 mr-2"
              />
              {text}
            </a>
          </li>
    );
}

export default ListeImg;