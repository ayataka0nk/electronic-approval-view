export const CheckBox = (props: {
  value: boolean
  onChange?: (value: boolean) => void
  disabled?: boolean
}) => {
  const onChangeLocal = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof props.onChange !== 'undefined') {
      props.onChange(event.target.checked)
    }
  }
  return (
    <input
      className="h-5 w-5"
      type="checkbox"
      checked={props.value}
      onChange={onChangeLocal}
      disabled={props.disabled}
    />
  )
}

export const CheckBoxWithLabel = (props: {
  label: string
  value: boolean
  onChange?: (value: boolean) => void
  disabled?: boolean
}) => {
  return (
    <div className="flex items-center">
      <CheckBox
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <div className="ml-2">{props.label}</div>
    </div>
  )
}
