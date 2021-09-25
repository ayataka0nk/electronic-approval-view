import { useRef } from 'react'
import { InputText, Button } from '.'

export const FileAddButton = (props: {
  onSelectFile: (file: File) => void
}) => {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0)
    if (file) {
      props.onSelectFile(file)
    }
  }
  const onClick = () => {
    inputFileRef?.current?.click()
  }
  //input type="file" で、value=""がないと、input自体がファイルを持ってしまうので、
  //ファイルを指定して配列に格納→配列からそのファイルを削除→同じファイルを指定
  //という操作をした際に、onChangeイベントが機能しない
  return (
    <div>
      <input
        type="file"
        ref={inputFileRef}
        onChange={onChange}
        style={{ display: 'none' }}
        value=""
      />
      <div className="w-20">
        <Button variant="primary" value="選択" onClick={onClick} />
      </div>
    </div>
  )
}

export const InputFile = (props: {
  fileName: string
  onChange: (file: File) => void
}) => {
  return (
    <div className="flex items-center">
      <InputText value={props.fileName} readOnly />
      <div>
        <FileAddButton onSelectFile={props.onChange} />
      </div>
    </div>
  )
}
