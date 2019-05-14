import React from 'react'

export const IconLink = props => (
	<a href={props.linkUrl}>
		<img src={`${props.imageLink}`} title={`${props.linkUrlAlt}`} alt={`${props.linkUrlAlt}`} />
	</a>
)
export default IconLink
