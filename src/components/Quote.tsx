import React from 'react'

function Quote() {
	return (
		<section className='quote'>
			<img className='quote__quoteIcon quote__quoteIconLeft' src='./img/quote-left-solid.svg'></img>
			<img className='quote__quoteIcon quote__quoteIconRight' src='./img/quote-right-solid.svg'></img>
			<h3>“Opportunities don't happen, you create them.”</h3>
			<p> Chris Grosser</p>
		</section>
	)
}

export default Quote
