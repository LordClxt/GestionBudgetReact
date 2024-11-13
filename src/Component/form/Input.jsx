export function Input({name, type, onChange, value, placeholder}){
    return <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        className="
            border rounded w-full p-2
            outline-none focus:ring-4
            ring-purple-600/40 transition-all
            "
        placeholder={placeholder}
    />
}