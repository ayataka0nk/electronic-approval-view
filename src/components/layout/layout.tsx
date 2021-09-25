import React from 'react'
import { Header } from './header'
import { Menu } from './menu'
import { LoadingMask } from '../common/loading-mask'

export type LayoutProps = {
  pageTitle?: string
  loading?: boolean
  children: React.ReactNode
}
export const Layout = (props: LayoutProps) => {
  const [isMenuShowed, setIsMenuShowed] = React.useState(false)
  const onToggleMenuClick = () => {
    setIsMenuShowed(!isMenuShowed)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <LoadingMask loading={props.loading || false} />
      <Header onMenuOpenClick={onToggleMenuClick} />
      <div className="flex flex-auto">
        {isMenuShowed && (
          <div className="absolute w-full border md:hidden shadow-lg pb-12 bg-white">
            <Menu />
          </div>
        )}
        <div className="w-40 border-r hidden md:block">
          <Menu />
        </div>
        <div className="flex-1">
          {props.pageTitle && (
            <div className="text-xl p-1 border-b">{props.pageTitle}</div>
          )}
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  )
}
