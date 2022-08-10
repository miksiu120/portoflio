import React, { useEffect } from 'react'
import SideNav from './components/SideNav'
import Nav from './components/Nav'
import Header from './components/Header'
import Quote from './components/Quote'
import Abilities from './components/Abilities'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
	useEffect(() => {
		console.log(window.screenY)
	}, [window.screenY])

	return (
		<div className='App' data-bs-spy='scroll' data-bs-target='#sideNav'>
			<Nav />
			<SideNav />
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
