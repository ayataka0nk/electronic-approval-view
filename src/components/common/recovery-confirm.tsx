import { useState } from 'react'
import { Button } from './'

type RecoveryConfirmProps = {
  buttonValue: string
  confirmMessage: string
  onRecoveryClick: () => void
}

export const RecoveryConfirm = (props: RecoveryConfirmProps) => {
  const [isDisplayConfirm, setIsDisplayConfirm] = useState(false)

  const onDisplayRecoveryButtonClick = () => {
    setIsDisplayConfirm(true)
  }

  const onCancelDestroyButtonClick = () => {
    setIsDisplayConfirm(false)
  }

  return (
    <>
      {!isDisplayConfirm && (
        <Button
          variant="primary"
          value={props.buttonValue}
          onClick={onDisplayRecoveryButtonClick}
        />
      )}
      {isDisplayConfirm && (
        <>
          <div>{props.confirmMessage}</div>
          <div className="flex justify-around mb-10">
            <div className="flex-1 mr-2">
              <Button
                variant="primary"
                value="復元する"
                onClick={props.onRecoveryClick}
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
