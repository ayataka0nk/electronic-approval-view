type ToolsProps = {
  children: React.ReactNode
  align?: 'center'
}

export const Tools = (props: ToolsProps) => {
  let alignCss = ''
  if (props.align === 'center') {
    alignCss = 'justify-around'
  }
  const className = `md:flex ${alignCss}`
  return <div className={className}>{props.children}</div>
}

type ToolProps = {
  children: React.ReactNode
}
export const Tool = (props: ToolProps) => {
  return (
    <div className="flex-auto mb-2 md:mb-0 last:mr-0 md:mr-2 md:max-w-xs">
      {props.children}
    </div>
  )
}
