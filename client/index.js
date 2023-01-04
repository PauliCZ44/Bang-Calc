import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import 'Assets/DragDropTouch'
import 'Assets/custom.scss'
import App from 'Components/App'
import ErrorBoundary from 'Components/ErrorBoundary'

const container = document.getElementById('root')
const root = createRoot(container)

const refresh = () =>
	root.render(
		<BrowserRouter>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</BrowserRouter>
	)

refresh()

if (module.hot) {
	module.hot.accept()
}
