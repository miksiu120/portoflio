import React from 'react'
import leftQuote from '../img/icons/quote-left-solid.svg'
import rightQuote from '../img/icons/quote-right-solid.svg'
function Quote() {
	return (
		<section className='quote'>
			<img className='quote__quoteIcon quote__quoteIconLeft' src={leftQuote} alt='leftQuote'></img>
			<img className='quote__quoteIcon quote__quoteIconRight' src={rightQuote} alt='rightQuote'></img>
			<h3>“Opportunities don't happen, you create them.”</h3>
			<p> Chris Grosser</p>
		</section>
	)
}

export default Quote
