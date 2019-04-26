import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ProjectsPage from "../components/ProjectsPage"
import WelcomePage from "../components/WelcomePage"
import ContactPage from "../components/ContactPage"
import NotFoundPage from "../components/NotFoundPage"
import ProjectPage from "../components/ProjectPage"
import Header from "../components/Header"
import Footer from "../components/Footer"

const AppRouter = () => (
	<BrowserRouter>
		<div class='container'>
			<Header />
			<Switch>
				<Route path='/' component={WelcomePage} exact={true} />
				<Route path='/Contact' component={ContactPage} />
				<Route path='/Projects' component={ProjectsPage} exact={true} />
				<Route path='/Projects/:id' component={ProjectPage} />
				<Route component={NotFoundPage} />
			</Switch>
			<Footer />
		</div>
	</BrowserRouter>
)

export default AppRouter
