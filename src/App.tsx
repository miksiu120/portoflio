import React, { useEffect } from 'react'
import SideNav from './components/SideNav'
import Nav from './components/Nav'
import Header from './components/Header'
import Quote from './components/Quote'
import Abilities from './components/Abilities'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'
function App() {
	//const [doesMobileNavShowed, setDoesMobileNavShowed] = React.useState(true)
	const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false)

	function toggleMobileNav() {
		setIsMenuOpened(item => !item)
	}
	useEffect(() => {
		document.title = 'My website';
	  }, []);

	return (
		<div
			style={{ overflow: isMenuOpened ? 'hidden' : '' }}
			className='App'
			data-bs-spy='scroll'
			data-bs-target='#sideNav'>
			<Nav isMenuOpened={isMenuOpened} toggleMobileNav={toggleMobileNav} />
			<SideNav />
			<MobileNav isMenuOpened={isMenuOpened} toggleMobileNav={toggleMobileNav} />
			<Header />
			<main className='main'>
				<Quote />
				<Abilities />
				<Projects />
				<Contact />
			</main>
			<Footer></Footer>
		</div>
	)
}

export default App
