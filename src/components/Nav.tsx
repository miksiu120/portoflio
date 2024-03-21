import React from 'react'
import { Link } from 'react-scroll'

interface Prop {
	toggleMobileNav(): void
	isMenuOpened: boolean
}
function Nav({ toggleMobileNav, isMenuOpened }: Prop) {
	const [topSlab, setTopSlab] = React.useState(<div className='nav__burger__topSlab'></div>)
	const [mainSlab, setMainSlab] = React.useState(<div className='nav__burger__mainSlab'></div>)
	const [bottomSlab, setBottomSlab] = React.useState(<div className='nav__burger__bottomSlab'></div>)

	function clickBurger() {
		if (!isMenuOpened) {
			setMainSlab(<div className='nav__burger__mainSlab hideMainSlab'></div>)
			setTopSlab(<div className='nav__burger__topSlab moveUp'></div>)
			setBottomSlab(<div className='nav__burger__bottomSlab moveDown'></div>)
			toggleMobileNav()
		} else {
			setMainSlab(<div className='nav__burger__mainSlab'></div>)
			setTopSlab(<div className='nav__burger__topSlab'></div>)
			setBottomSlab(<div className='nav__burger__bottomSlab'></div>)
			toggleMobileNav()
		}
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
