type InputProps = Omit<React.ComponentProps<"input">, "onChange"> & {
  onChange?: (value: string) => void
}

const Input = ({ onChange, className = "", ...rest }: InputProps) => {
  return (
    <input
      type="text"
      {...rest}
      onChange={(e) => onChange?.(e.target.value)}
      className={`rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 ${className}`}
    />
  )
}

export default Input
