type InputProps = Omit<React.ComponentProps<"input">, "onChange"> & {
  onChange?: (value: string) => void;
} 

const Input = ({ onChange, ...rest } : InputProps) => {
  return (
   
    <input 
    type="text"
    {...rest}
    onChange={(e) => onChange?.(e.target.value)} 
    style={{
        padding: 10,
        border: "1px solid #ccc",
        borderRadius: 6,
        width: "50%",
      }}
    />
    
  )
}

export default Input
