import React from 'react'

function AppHeader({ handleChangeTheme }) {
  return (
    <div className='app-header'>
        <h1>My Notes</h1>
        <button
            onClick={() =>
                handleChangeTheme(
                    (previousTheme) => !previousTheme
                )
            }
            className='theme'
        >
            Change Theme
        </button>
    </div>
  )
}

export default AppHeader
