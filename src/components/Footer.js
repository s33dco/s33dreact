import React from 'react'
import moment from 'moment'
import IconLink from './IconLink'

const Footer = () => (
	<footer>
		<h3 className='footer__strap'>develop and grow with s33d</h3>
		<div className='footer__icons'>
			<IconLink
				className='footer__image'
				linkUrl={'https://www.npmjs.com/~s33dco'}
				imageLink={`./images/npm.png`}
				linkUrlAlt={'visit NPM profile'}
			/>
			<IconLink
				className='footer__image'
				linkUrl={'https://github.com/s33dco'}
				imageLink={`./images/gems.png`}
				linkUrlAlt={'visit GitHub profile'}
			/>
			<IconLink
				className='footer__image'
				linkUrl={'https://rubygems.org/profiles/s33dco'}
				imageLink={`./images/github.png`}
				linkUrlAlt={'visit RubyGems profile'}
			/>
		</div>
		<div className='footer__copyright'>
			<p>s33d © {moment().format('YYYY')}</p>
		</div>
	</footer>
)

export default Footer
