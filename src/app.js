import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import LoadingPage from './components/LoadingPage'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

let hasRendered = false
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(<AppRouter />, document.getElementById('app'))
		hasRendered = true
	}
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'))
renderApp()
