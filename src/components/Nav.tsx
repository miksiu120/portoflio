import React from 'react'
import { Link } from 'react-scroll'
function Nav() {
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
				<i className='nav__burger fa-solid fa-bars'></i>
			</div>
		</nav>
	)
}
export default Nav
