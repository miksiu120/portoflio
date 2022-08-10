import React from 'react'
import Scrollspy from 'react-scrollspy'
function SideNav() {
	return (
		<Scrollspy
			items={['aboutMe', 'abilities', 'projects', 'contact']}
			className='sideNav'
			id='sideNav'
			currentClassName='is-current'
			offset={2}>
			<a href='#aboutMe' className='sideNav__element'>
				<div className='squareBorder'></div> About me
			</a>
			<a href='#abilities' className='sideNav__element'>
				<div className='squareBorder'></div> Abilities
			</a>
			<a href='#projects' className='sideNav__element'>
				<div className='squareBorder'></div> Projects
			</a>
			<a href='#contact' className='sideNav__element'>
				<div className='squareBorder'></div> Contact
			</a>
		</Scrollspy>
	)
}

export default SideNav
