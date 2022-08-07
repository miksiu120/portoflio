import React from 'react'
import SectionTitle from './SectionTitle'

function Contact() {
	return (
		<section className='contact' id='contact'>
			<div className='contact__secondColor'></div>
			<div className='container'>
				<SectionTitle sectionName='Contact' />
				<div className='contact__elements'>
					<div className='contact__data'>
						<h3 className='contact__data__title'> Get in touch </h3>
						<p className='contact__data__description'>
							{' '}
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae libero ea, nulla debitis laborum
							laboriosam.
						</p>
						<div className='contact__data__list'>
							<a className='contact__data__list__element'>
								<i className='fa-brands fa-facebook'></i>
								facebook
							</a>

							<a className='contact__data__list__element'>
								<i className='fa-brands fa-github'></i>
								github
							</a>

							<a className='contact__data__list__element'>
								<i className='fa-solid fa-envelope'></i>
								miksiu120@gmail.com
							</a>

							<a className='contact__data__list__element'>
								<i className='fa-solid fa-phone'></i>
								725 102 741
							</a>
						</div>
					</div>
					<div data-aos='fade-up' data-aos-offset='300' className='contact__box'>
						<h3 className='contact__box__title'> Send me a message</h3>
						<form>
							<input placeholder='email' type='email' className='contact__box__email '></input>
							<input placeholder='subject' type='subject' className='contact__box__subject'></input>
							<textarea rows={6} placeholder='write your message here' className='contact__box__message' />
							<button>Send</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
