import React from 'react'

function Movie({color}) {
  return (
    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" fill={color} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="OndemandVideoIcon"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6-7 4V7z"></path></svg>
  )
}

export default Movie