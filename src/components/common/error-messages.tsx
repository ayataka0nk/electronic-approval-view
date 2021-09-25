import { Typography } from '.'
export const ErrorMessages = (props: { messages?: string[] }) => {
  return (
    <>
      {props.messages?.map((msg, index) => (
        <div key={index}>
          <Typography variant="error">{msg}</Typography>
        </div>
      ))}
    </>
  )
}
