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

	// new component to render an icon
	// new component to render a link from icon
	// <LinkIcon link={url} icon={pathToFile} /> - github, npm, ruby gems, livesite

	render() {
		return (
			<div className='projectItem'>
				<h3>{this.props.name}</h3>

				<div className='icons'>
					{this.props.icons.length === 0
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
				<p>{this.props.intro}</p>
				<a className='align-right read-more' onClick={this.handleOpenProductModal}>
					read more...
				</a>
				<ProductModal
					name={this.props.name}
					isOpen={this.state.isOpen}
					paras={this.props.paras}
					icons={this.props.icons}
					gem={this.props.gem}
					gemAlt={this.props.gemAlt}
					npm={this.props.npm}
					npmAlt={this.props.npmAlt}
					site={this.props.site}
					siteAlt={this.props.siteAlt}
					repo={this.props.repo}
					repoAlt={this.props.repoAlt}
					willClose={this.handleCloseProductModal}
				/>
			</div>
		)
	}
}
