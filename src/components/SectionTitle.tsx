import React from 'react'

interface Prop {
	sectionName: string
}

function SectionTitle({ sectionName }: Prop) {
	return (
		<div className='title'>
			<div className='title__square'></div>
			<h2 className='title__text'>{sectionName}</h2>
		</div>
	)
}
export default SectionTitle
