import React from 'react'

export const LoadingMask: React.FC<{ className?: string; loading: boolean }> = (
  props
) => {
  const { className, loading } = props
  if (loading) {
    return (
      <div className={className}>
        <div className="absolute top-0 left-0 w-full h-full bg-gray-500 z-10 opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 m-auto flex flex-col justify-center items-center z-20 w-24 h-12 rounded-sm bg-gray-300">
          <div className="circle">
            <img src="/loading.gif" />
          </div>
          <div>読み込み中...</div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}
