import { Flag } from '../../types'

export const CheckBoxString = (props: {
  value: Flag
  onChange?: (value: Flag) => void
  disabled?: boolean
}) => {
  const onChangeLocal = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof props.onChange !== 'undefined') {
      props.onChange(event.target.checked ? '1' : '0')
    }
  }
  return (
    <input
      className="h-5 w-5"
      type="checkbox"
      checked={props.value === '1'}
      onChange={onChangeLocal}
      disabled={props.disabled}
    />
  )
}

export const CheckBoxStringWithLabel = (props: {
  label: string
  value: Flag
  onChange?: (value: Flag) => void
  disabled?: boolean
}) => {
  return (
    <div className="flex items-center">
      <CheckBoxString
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <div className="ml-2">{props.label}</div>
    </div>
  )
}
