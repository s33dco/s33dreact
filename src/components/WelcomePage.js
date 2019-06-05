import React from 'react'
import Icon from './Icon'

const WelcomePage = () => (
	<main>
		<div>
			<h1 className='page-title'>Welcome to s33d</h1>
		</div>
		<div className='welcome'>
			<p>Ruby and JavaScript flavoured web development.</p>
			<p>Front end, Back end, Full Stack, JAMStack.</p>
			<p>Single page apps, RESTful APIS, web sites and applications.</p>
			<div className='techbox'>
				<Icon className='techbox__icon' imageLink={`./images/ruby.png`} />
				<Icon className='techbox__icon' imageLink={`./images/rails.png`} />
				<Icon className='techbox__icon' imageLink={`./images/node.png`} />
				<Icon className='techbox__icon' imageLink={`./images/js.png`} />
				<Icon className='techbox__icon' imageLink={`./images/mongo.png`} />
				<Icon className='techbox__icon' imageLink={`./images/express.png`} />
				<Icon className='techbox__icon' imageLink={`./images/redux.png`} />
				<Icon className='techbox__icon' imageLink={`./images/react.png`} />
				<Icon className='techbox__icon' imageLink={`./images/webpack.png`} />
			</div>
		</div>
	</main>
)

export default WelcomePage
