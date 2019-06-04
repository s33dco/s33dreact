import React from 'react'
import ProductModal from './ProductModal'
import Icon from './Icon'
import IconLink from './IconLink'

export default class ProjectItem extends React.Component {
	state = {
		isOpen: false
	}

	handleOpenProductModal = () => {
		this.setState({ isOpen: true })
	}

	handleCloseProductModal = () => {
		this.setState({ isOpen: false })
	}

	render() {
		return (
			<div className='projectItem'>
				<div className='project__header'>
					<h3 className='project__title'>{this.props.name}</h3>
					<div className='project__icons'>
						{!this.props.icons && this.props.icons.length === 0
							? null
							: this.props.icons.map((icon, index) => {
									return <Icon key={index} imageLink={`./images/${icon}`} />
							  })}
						{this.props.gem && (
							<IconLink
								linkUrl={this.props.gem}
								imageLink={`./images/gems.png`}
								linkUrlAlt={this.props.gemAlt}
							/>
						)}
						{this.props.npm && (
							<IconLink
								linkUrl={this.props.npm}
								imageLink={`./images/npm.png`}
								linkUrlAlt={this.props.npmAlt}
							/>
						)}
						{this.props.repo && (
							<IconLink
								linkUrl={this.props.repo}
								imageLink={`./images/github.png`}
								linkUrlAlt={this.props.repoAlt}
							/>
						)}
						{this.props.site && (
							<IconLink
								linkUrl={this.props.site}
								imageLink={`./images/livesite.png`}
								linkUrlAlt={this.props.siteAlt}
							/>
						)}
					</div>
				</div>

				<p>{this.props.intro}</p>
				<a className='project__readmore' onClick={this.handleOpenProductModal}>
					read more
				</a>

				{this.props.paras && (
					<ProductModal
						name={this.props.name}
						isOpen={this.state.isOpen}
						paras={this.props.paras}
						willClose={this.handleCloseProductModal}
					/>
				)}
			</div>
		)
	}
}
