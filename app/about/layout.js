import React from 'react'

export default function layout({children}) {
  return (
    <div>
        <div>This is my about layout below I am rendering the main page</div>
        {children}
        <div>About layout signing off</div>
    </div>
  )
}
