import React from 'react'

export const InputNumber = (props: {
  id?: string
  value: number
  onChange?: (value: number) => void
  readOnly?: boolean
  placeholder?: string
}) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(Number(event.target.value))
  }

  return (
    <input
      id={props.id}
      className="shadow appearance-none border rounded w-full px-3 h-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="number"
      value={props.value}
      onChange={onChange}
      readOnly={props.readOnly}
      placeholder={props.placeholder}
    />
  )
}
