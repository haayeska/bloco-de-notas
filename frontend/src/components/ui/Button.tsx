type ButtonProps = Omit<React.ComponentProps<"button">, "onClick"> & {
  onClick?: () => void;
} 

const Button = ({ onClick, children, ...rest } : ButtonProps) => {
  return (
   
    <button
    {...rest}
    onClick={onClick}
    style={{
        padding: 10,
        border: "1px solid #ccc",
        borderRadius: 6,
        width: "50%",
      }}
    >
      {children}
    </button>
    
  )
}

export default Button
