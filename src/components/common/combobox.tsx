export type ComboBoxOptions = { value: string; name: string }[]
type ComboBoxProps = {
  value: string
  options: ComboBoxOptions
  onChange?: (value: string) => void
  disabled?: boolean
}

export const ComboBox = (props: ComboBoxProps) => {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChange && props.onChange(event.target.value)
  }
  const optionsLocal = [{ value: '', name: '' }, ...props.options]
  return (
    <select
      className="block w-full px-2 h-10 rounded border shadow focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      value={props.value}
      onChange={onChange}
      disabled={props.disabled}
    >
      {optionsLocal.map((option, index) => (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}
