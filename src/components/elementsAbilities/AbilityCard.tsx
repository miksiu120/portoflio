import React from 'react'

interface Prop {
	image: string
	text: string
	name: string
}

function Card({ name, image, text }: Prop) {
	function showHeight() {
		console.log(window.scrollY)
	}
	console.log(typeof image)
	return (
		<div
			data-aos='flip-up'
			data-aos-offset='300'
			data-aos-once='true'
			onClick={showHeight}
			className={`abilities__box__card abilities__box__card__${name}`}>
			<img src={`icon of ${name}`} />
			<h3>{text}</h3>
		</div>
	)
}
export default Card
