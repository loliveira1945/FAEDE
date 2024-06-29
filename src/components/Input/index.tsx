import React, { ChangeEvent } from 'react';

type InputProps = {
    typeField?: "text" | "email" | "textarea" | "date" | "tel" | "checkbox" | "radio" | "file";
    className?: string;
    name?: string;
    placeholder: string;
    obrigatorio?: boolean;
    valor?: string;
    onChanged?: (value: string) => void;
};

const inputStyle = 'w-full p-3 rounded-lg text-black focus:outline-none focus:border-customColorBlue focus:ring-2 focus:ring-customColorBlue';

export default function Field({ typeField = "text", placeholder, obrigatorio, className = inputStyle, valor, onChanged, name }: InputProps) {
    const onTyped = (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(onChanged) {
            onChanged(evento.target.value)
        }
    }

  return (
        <input 
            className={className}
            name={name}
            type={typeField}
            placeholder={placeholder}
            required = { obrigatorio }
            value = {valor}
            onChange={onTyped}>
        </input>
    )
}