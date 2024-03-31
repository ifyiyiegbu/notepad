import React from 'react'

function AppHeader({handleToggle}) {
  return (
    <div className='app-header'>
        <h1>Notes</h1>
        <button
            onClick={() =>
                handleToggle(
                    (previousMode) => !previousMode
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
