import { useState } from 'react'
import { SearchInputText, Button } from '.'

type AccorddionFilterCardProps = {
  anyFilter: string
  onChangeAnyFilter: (value: string) => void
  children: React.ReactNode
}
export const AccordionFilterCard = (props: AccorddionFilterCardProps) => {
  const [isSearchCondOpen, setIsSearchCondOpen] = useState(false)

  const onToggleSearchCondClick = () => {
    setIsSearchCondOpen((prev) => !prev)
  }

  const searchCondClassName = `h-24 shadow p-2 ${
    isSearchCondOpen ? '' : 'hidden'
  }`

  return (
    <div>
      <div className="md:flex flex-wrap">
        <div className="flex-1 md:mr-2">
          <SearchInputText
            value={props.anyFilter}
            onChange={props.onChangeAnyFilter}
            placeholder="簡易検索"
          />
        </div>
        <div className="mt-2 md:mt-0">
          <Button
            variant="primary"
            value="詳細条件"
            onClick={onToggleSearchCondClick}
            isActive={isSearchCondOpen}
          />
        </div>
      </div>
      <div className={searchCondClassName}>{props.children}</div>
    </div>
  )
}
