import Link from 'next/link'

export const Menu = () => {
  return (
    <div className="bg-white">
      <div className="p-1">メニュー</div>
      <div className="p-1">マスタメンテナンス</div>
      <Link href="/user/list">
        <a className="block p-1 ml-4">ユーザ</a>
      </Link>
      <Link href="/shinseisho/list">
        <a className="block p-1 ml-4">申請書</a>
      </Link>
      <Link href="/bumon/list">
        <a className="block p-1 ml-4">部門</a>
      </Link>
      <Link href="/shori/list">
        <a className="block p-1 ml-4">処理</a>
      </Link>
      <Link href="/yakushoku/list">
        <a className="block p-1 ml-4">役職</a>
      </Link>
      <Link href="/shinsei-komoku/list">
        <a className="block p-1 ml-4">申請項目</a>
      </Link>
    </div>
  )
}
