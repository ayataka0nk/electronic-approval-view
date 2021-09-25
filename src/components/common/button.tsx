export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'warning'
  value: string
  onClick: () => Promise<void> | void
  isActive?: boolean
}

const PrimaryButton = (props: ButtonProps) => {
  const bgcolor = props.isActive ? 'bg-blue-700' : 'bg-blue-500'
  const className = `${bgcolor} hover:bg-blue-700 text-white font-bold px-4 h-10 border border-blue-700 rounded w-full`
  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

const SecondaryButton = (props: ButtonProps) => {
  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 h-10 border border-blue-500 hover:border-transparent rounded w-full"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}

const WarningButton = (props: ButtonProps) => {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 h-10 border border-red-700 rounded w-full"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}

export const Button = (props: ButtonProps) => {
  if (props.variant === 'primary') {
    return <PrimaryButton {...props} />
  } else if (props.variant === 'secondary') {
    return <SecondaryButton {...props} />
  } else if (props.variant === 'warning') {
    return <WarningButton {...props} />
  } else {
    return <PrimaryButton {...props} />
  }
}
