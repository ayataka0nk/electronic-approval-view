export type TypographyProps = {
  variant: 'error'
  children: string
}

export const Typography = (props: TypographyProps) => {
  if (props.variant === 'error') {
    return <span className="text-red-700">{props.children}</span>
  } else {
    return <span>{props.children}</span>
  }
}
