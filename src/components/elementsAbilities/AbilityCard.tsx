import React from 'react'

interface Prop {
	srcImage: string
	text: string
	name: string
}

function Card({ name, srcImage, text }: Prop) {
	function showHeight() {
		console.log(window.scrollY)
	}

	return (
		<div
			data-aos='flip-up'
			data-aos-offset='300'
			data-aos-once='true'
			onClick={showHeight}
			className={`abilities__box__card abilities__box__card__${name}`}>
			<img src={`./icons/${srcImage}`} />
			<h3>{text}</h3>
		</div>
	)
}
export default Card
