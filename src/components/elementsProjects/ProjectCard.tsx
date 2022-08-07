import React from 'react'

interface Prop {
	title: string
	text: string
	image: string
}

function ProjectCard({ title, text, image }: Prop) {
	return (
		<div className='projects__projectCard'>
			<h3 className='projects__projectCard__title'>{title}</h3>
			<p className='projects__projectCard__text'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, consectetur inventore voluptatum recusandae, Lorem, ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, sed! 
				
			</p>
			<img src={`./img/${image}`} className='projects__projectCard__image'></img>
			<button type='button' className='projects__projectCard__button'>Try now</button>
		</div>
	)
}

export default ProjectCard
