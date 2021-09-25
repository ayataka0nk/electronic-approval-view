import React from 'react'
import Link from 'next/link'

export const Header = (props: { onMenuOpenClick: () => void }) => {
  return (
    <div className="p-3 border-b flex justify-between">
      <div className="text-xl">
        <Link href="/">電子決裁システム</Link>
      </div>
      <div className="cursor-pointer md:hidden" onClick={props.onMenuOpenClick}>
        三
      </div>
    </div>
  )
}
