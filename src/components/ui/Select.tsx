type Opcao = {
  rotulo: string
  valor: string
}

type SelectProps = Omit<React.ComponentProps<"select">, "onChange"> & {
  opcoes: Opcao[]
  textoVazio: string
  onChange: (valor: string) => void
}

// <select> nativo: já funciona com teclado, leitor de tela e celular
const Select = ({ opcoes, textoVazio, onChange, className = "", ...rest }: SelectProps) => {
  return (
    <select
      {...rest}
      onChange={(e) => onChange(e.target.value)}
      className={`rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 ${className}`}
    >
      <option value="" disabled>
        {textoVazio}
      </option>
      {opcoes.map((opcao) => (
        <option key={opcao.valor} value={opcao.valor}>
          {opcao.rotulo}
        </option>
      ))}
    </select>
  )
}

export default Select
