import React from 'react';

function Labeltexte({ label, id, placeholder, value, type, onChange, error }) {
    return (
        <div className="flex flex-col gap-2">
          <label htmlFor={id} className="text-more flex flex-col items-start gap-2">{label} :</label>
          <input
            type={type}
            name={id}
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="text-less border w-full border-primary p-2"
          />
          {error && (
            <span>{error}</span>
          )}
        </div>
    );
}

export default Labeltexte;