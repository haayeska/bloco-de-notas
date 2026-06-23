type ButtonProps = Omit<React.ComponentProps<"button">, "onClick"> & {
  onClick?: () => void;
} 

const Button = ({ onClick, children, ...rest } : ButtonProps) => {
  return (
   
    <button
    {...rest}
    onClick={onClick}
    className="p-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100"
  >
      {children}
    </button>
    
  )
}

export default Button
