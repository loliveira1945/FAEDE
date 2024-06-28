import React, { ChangeEvent } from 'react';

type InputProps = {
    typeField?: "text" | "email" | "textarea" | "date" | "tel" | "checkbox" | "radio" | "file";
    className?: string;
    placeholder: string;
    obrigatorio?: boolean;
    valor?: string;
    onChanged?: (value: string) => void;
};

export default function Field({ typeField = "text", placeholder, obrigatorio, className, valor, onChanged }: InputProps) {
    const onTyped = (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(onChanged) {
            onChanged(evento.target.value)
        }
    }

  return (
        <input 
            className={className}
            type={typeField}
            placeholder={placeholder}
            required = { obrigatorio }
            value = {valor}
            onChange={onTyped}>
        </input>
    )
}