import React from 'react'
import { Link } from 'react-scroll'
function Nav() {
	let topSlab = <div className='nav__burger__topSlab'></div>
	let mainSlab = <div className='nav__burger__mainSlab'></div>
	let bottomSlab = <div className='nav__burger__bottomSlab'></div>
	
	function clickBurger() {
		console.log(topSlab)
	}

	return (
		<nav className='nav'>
			<div className='container'>
				<a className='nav__logo'>
					miksiu <span> dev </span>
				</a>
				<div className='nav__menu'>
					<a href='#' className='nav__menu__element'>
						About me
					</a>
					<a href='#abilities' className='nav__menu__element'>
						Abilities
					</a>
					<a href='#projects' className='nav__menu__element'>
						Projects
					</a>
					<a href='#contact' className='nav__menu__element'>
						Contact
					</a>
				</div>
				<div onClick={clickBurger} className='nav__burger'>
					{topSlab}
					{mainSlab}
					{bottomSlab}
				</div>
			</div>
		</nav>
	)
}
export default Nav
