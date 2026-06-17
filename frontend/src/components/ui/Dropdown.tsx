import { useState } from "react"

type Option = {
  label: string
  value: string
} 

type DropdownProps = {
  options: Option[]
  value: string
  onChange: (value: string) => void
}

const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  const selectedLabel =
      options.find((opt) => opt.value === value)?.label || "Selecione"

   return (
    <div style={{ position: "relative", width: 200 }}>
      
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: 10,
          border: "1px solid #ccc",
          borderRadius: 6,
          background: "white",
          cursor: "pointer",
        }}
      >
        {selectedLabel}
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            border: "1px solid #ccc",
            background: "white",
            borderRadius: 6,
            marginTop: 4,
            zIndex: 10,
          }}
        >
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value)
                setOpen(false)
              }}
              style={{
                padding: 10,
                cursor: "pointer",
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
    )
}

export default Dropdown
