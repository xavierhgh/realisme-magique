import React from 'react';

function Labeltexte({ label, id, placeholder, value, type, onChange, error, className }) {
    return (
        <div className={`flex flex-col gap-2 w-full`}>
          <label htmlFor={id} className="text-more flex flex-col items-start gap-2">{label} :</label>
          <input
            type={type}
            name={id}
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={`bg-blanc text-less border text-noir w-full border-primary p-2 ${className} focus:border-secondary focus:outline-none`}
          />
          {error && (
            <p className='text-less a text-rouge font-bold'>{error}</p>
          )}
        </div>
    );
}

export default Labeltexte;