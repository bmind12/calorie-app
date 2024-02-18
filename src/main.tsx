import React from 'react'
import ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')
if (rootElement !== null) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>hello</React.StrictMode>
  )
} else {
  console.error('Failed to find the root element')
}
