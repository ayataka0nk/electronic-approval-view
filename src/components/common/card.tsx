import React from 'react'

export type CardProps = {
  children: React.ReactNode
  maxWidth?: 'max-w-xs' | 'max-w-md' | 'max-w-2xl' | ''
  isDisabled?: boolean
  onClick?: () => void
}

export const Card = (props: CardProps) => {
  const pointer = typeof props.onClick !== 'undefined' ? 'cursor-pointer' : ''
  const bg = props.isDisabled ? 'bg-gray-300' : 'bg-white'
  const className = `w-full shadow-md rounded px-8 pt-6 pb-8 mb-4 ${
    props.maxWidth || ''
  } ${pointer} ${bg}`
  return (
    <div className={className} onClick={props.onClick}>
      {props.children}
    </div>
  )
}
