import React from 'react';

function Labeltexte({ label, id, placeholder, value, type, onChange, error, className }) {
    return (
        <div className={`flex flex-col gap-2 w-full`}>
          <label htmlFor={id} className="text-more flex flex-col items-start gap-2">{label} :</label>
          {id === 'message' ? (
            <textarea
              name={id}
              id={id}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              className={`bg-noir text-less border text-blanc w-full border-blanc p-2 min-h-[8rem] text-left align-top ${className} focus:border-primary focus:outline-none`}
            />
          ) : (
            <input
              type={type}
              size={type === 'texte' ? 30 : undefined}
              name={id}
              id={id}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              className={`bg-noir text-less border text-blanc w-full border-blanc p-2 ${className} focus:border-primary focus:outline-none`}
            />
          )}
          {error && (
            <p className='text-less a text-rouge font-bold'>{error}</p>
          )}
        </div>
    );
}

export default Labeltexte;