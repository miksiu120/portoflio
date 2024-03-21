import React from 'react'
import SectionTitle from './SectionTitle'
import ProjectCard from './elementsProjects/ProjectCard'
import cryptoImg from '../img/cryptoWebsiteImg.png'
import waiWebsiteImg from '../img/waiWebsiteImage2.png'
import photoWebsiteImg from '../img/photoWebsiteImg2.png'
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
					text={
						'This website gives you the possibility to check cryptocurrency data. There are shown last prices and statistics cryptocurrency chosen by you '
					}
					image={cryptoImg}
					href={'https://github.com/miksiu120/cryptoChecker/tree/gh-pages'}
					alt={'Photo of CryptoChecker website'}
					
				/>
				<ProjectCard
					title='PhotoWebsite'
					text={'Simple black and White website'}
					image={photoWebsiteImg}
					alt={'Photo of Photo Website'}
					href={'https://miksiu120.github.io/PhotoWebsite/'}
				/>

				<ProjectCard
					title='Website for studies'
					text={
						'Project created for studies. Built using pure HTML, SASS, and JavaScript. The website is fully responsive, showcasing various methods of data storage in web applications.'
					}
					image={waiWebsiteImg}
					alt={'Photo of Website for studies'}
					href ={'https://miksiu120.github.io/WAIProject/'}
				/>
			</div>
		</section>
	)
}

export default Projects
