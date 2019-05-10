import React from 'react'

export const IconLink = props => (
	<a href={props.linkUrl}>
		<img src={`${props.imageLink}`} alt={`${props.linkUrlAlt}`} />
	</a>
)
export default IconLink
