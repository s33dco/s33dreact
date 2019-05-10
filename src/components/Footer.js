import React from 'react'
import moment from 'moment'
import IconLink from './IconLink'

const Footer = () => (
	<footer>
		<div className='footer-strap'>
			<h3>develop and grow with s33d</h3>
			<IconLink
				linkUrl={'https://www.npmjs.com/~s33dco'}
				imageLink={`./images/npm.png`}
				linkUrlAlt={'visit NPM profile'}
			/>
			<IconLink
				linkUrl={'https://github.com/s33dco'}
				imageLink={`./images/gems.png`}
				linkUrlAlt={'visit GitHub profile'}
			/>
			<IconLink
				linkUrl={'https://rubygems.org/profiles/s33dco'}
				imageLink={`./images/github.png`}
				linkUrlAlt={'visit RubyGems profile'}
			/>
			<div className='copyright'>
				<p>s33d © {moment().format('YYYY')}</p>
			</div>
		</div>
	</footer>
)

export default Footer
