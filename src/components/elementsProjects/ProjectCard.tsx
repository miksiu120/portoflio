import React from 'react'

interface Prop {
	title: string
	text: string
	href: string
	image: string
	alt: string
}

function ProjectCard({ title, text, href, image, alt }: Prop) {
	return (
		<div className='projects__projectCard'>
			<h3 className='projects__projectCard__title'>{title}</h3>
			<p className='projects__projectCard__text'>{text}</p>
			<img src={image} className='projects__projectCard__image' alt={alt}></img>
			<a href={href} target='_blank' className='projects__projectCard__button'>
				Try now
			</a>
		</div>
	)
}

export default ProjectCard
