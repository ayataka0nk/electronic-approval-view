import React from 'react'

export const SearchInputText = (props: {
  id?: string
  value: string
  onChange?: (value: string) => void
  readOnly?: boolean
  placeholder?: string
}) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(event.target.value)
  }

  return (
    <input
      id={props.id}
      className="shadow appearance-none border rounded w-full px-3 h-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      value={props.value}
      onChange={onChange}
      readOnly={props.readOnly}
      placeholder={props.placeholder}
    />
  )
}
