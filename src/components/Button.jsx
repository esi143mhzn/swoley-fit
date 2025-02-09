import React from 'react'

export default function Button(props) {
  const {buttonText, func}  = props
  return (
    <button onClick={func} className="px-8 mx-auto py-4 rounded-md border-[2px] border-blue-400 bg-slate-950 border-solid blueShadow duration-200">
        <p>{buttonText}</p>
    </button>
  )
}
