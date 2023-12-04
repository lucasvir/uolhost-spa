interface InputProps {
    label: string;
    type: string;
    value: string;
    id?: string;
    name?: string;
    checked?: boolean;
    required?: boolean;
    updateValue: (value: string) => void;
}


const Input = ({
    label,
    value,
    type,
    id,
    name,
    checked,
    required,
    updateValue,
}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input
                required={required}
                checked={checked}
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={(event) => updateValue(event.target.value)}
            />
        </>
    );
};

export { Input };
