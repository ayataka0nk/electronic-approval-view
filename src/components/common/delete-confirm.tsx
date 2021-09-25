import { useState } from 'react'
import { Button } from './button'

type DeleteConfirmProps = {
  buttonValue: string
  confirmMessage: string
  onDestroyClick: () => void
}

export const DeleteConfirm = (props: DeleteConfirmProps) => {
  const [isDisplayConfirm, setIsDisplayConfirm] = useState(false)

  const onDisplayDestroyButtonClick = () => {
    setIsDisplayConfirm(true)
  }

  const onCancelDestroyButtonClick = () => {
    setIsDisplayConfirm(false)
  }

  return (
    <>
      {!isDisplayConfirm && (
        <Button
          variant="warning"
          value={props.buttonValue}
          onClick={onDisplayDestroyButtonClick}
        />
      )}
      {isDisplayConfirm && (
        <>
          <div>{props.confirmMessage}</div>
          <div className="flex justify-around mb-10">
            <div className="flex-1 mr-2">
              <Button
                variant="warning"
                value="削除する"
                onClick={props.onDestroyClick}
              />
            </div>
            <div className="flex-1">
              <Button
                variant="secondary"
                value="キャンセル"
                onClick={onCancelDestroyButtonClick}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}
