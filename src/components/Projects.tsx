import React from 'react'
import SectionTitle from './SectionTitle'
import ProjectCard from './elementsProjects/ProjectCard'
function Projects() {
	return (
		<section className='projects container' id='projects'>
			<img data-aos='fade-right' src='./icons/code.svg' className='projects__decor' />
			<img data-aos='fade-left' src='./icons/cpu.svg' className='projects__decor' />
			<img data-aos='fade-right' src='./icons/terminal.svg' className='projects__decor' />
			<SectionTitle sectionName='Projects' />
			<div className='projects__box'>
				<ProjectCard
					title='CryptoChecker'
					text={'On this website you can find history and changes about cryptocurrency chosed by you'}
					image='cryptoWebsiteImg.png'
				/>
				<ProjectCard
					title='PhotoWebsite'
					text={'On this website you can find history and changes about cryptocurrency chosed by you'}
					image='cryptoWebsiteImg.png'
				/>
				<ProjectCard
					title='Website for miniHackathon'
					text={'On this website you can find history and changes about cryptocurrency chosed by you'}
					image='cryptoWebsiteImg.png'
				/>
			</div>
		</section>
	)
}

export default Projects
