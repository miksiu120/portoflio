import React from 'react'

interface Prop {
	toggleMobileNav(): void
	isMenuOpened: boolean
}

function MobileNav({ isMenuOpened, toggleMobileNav }: Prop) {
	console.log(isMenuOpened)

	const showedMobile = {
		transform: isMenuOpened ? 'translateY(0%)' : '',
	}

	return (
		<div style={showedMobile} className='mobileNav'>
			<a onClick={toggleMobileNav} className='mobileNav__element' href='#aboutMe'>
				About me
			</a>
			<a onClick={toggleMobileNav} className='mobileNav__element' href='#abilities'>
				Abilities
			</a>
			<a onClick={toggleMobileNav} className='mobileNav__element' href='#projects'>
				Projects
			</a>
			<a onClick={toggleMobileNav} className='mobileNav__element' href='#contact'>
				Contact
			</a>
		</div>
	)
}
export default MobileNav
