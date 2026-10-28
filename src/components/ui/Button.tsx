type ButtonProps = React.ComponentProps<"button"> & {
  variante?: "primario" | "discreto"
}

const estilos = {
  primario: "bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50",
  discreto: "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
}

const Button = ({ variante = "primario", className = "", type = "button", ...rest }: ButtonProps) => {
  return (
    <button
      type={type}
      {...rest}
      className={`cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 ${estilos[variante]} ${className}`}
    />
  )
}

export default Button
