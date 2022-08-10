import React from 'react'
import SectionTitle from './SectionTitle'
import ProjectCard from './elementsProjects/ProjectCard'
import cryptoImg from '../img/cryptoWebsiteImg.png'
import bgIconCode from '../img/icons/code.svg'
import bgIconCpu from '../img/icons/cpu.svg'
import bgIconTerminal from '../img/icons/terminal.svg'
function Projects() {
	return (
		<section className='projects container' id='projects'>
			<img data-aos='fade-right' src={bgIconCode} className='projects__decor' />
			<img data-aos='fade-left' src={bgIconCpu} className='projects__decor' />
			<img data-aos='fade-right' src={bgIconTerminal} className='projects__decor' />
			<SectionTitle sectionName='Projects' />
			<div className='projects__box'>
				<ProjectCard
					title='CryptoChecker'
					text={'On this website you can find history and changes about cryptocurrency chosed by you'}
					image={cryptoImg}
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
