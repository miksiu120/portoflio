import React from 'react'
import dots from '../img/bgImg/whitedots.png'

function Header() {
	return (
		<header className='header container' id='aboutMe'>
			<h1 className='header__title'> Hi, I'm Michał</h1>
			<h2 className='header__describe'>Frontend developer and Computer Science Student</h2>
			<a href='#abilities' className='header__button'>
				Check
			</a>
			<img src={dots} className='header__bgDots'></img>
			<img src={dots} className='header__bgDots2'></img>
			<div className='header__bgPhoto'>
				<div className='header__photo'></div>
			</div>
		</header>
	)
}
export default Header
