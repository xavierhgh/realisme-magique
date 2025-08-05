import React from 'react';

function ListeImg({href, text, icon}) {
    return (
          <li className='w-full font-roboto text-[1.125rem]'>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className='w-full'
            >
              <img
                src={icon}
                alt={`${text} Icon`}
                className="inline-block w-6 h-6 mr-2"
              />
              <span dangerouslySetInnerHTML={{ __html: text }} />
            </a>
          </li>
    );
}

export default ListeImg;