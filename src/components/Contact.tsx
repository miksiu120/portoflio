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
							Please feel free to get in touch if you're interested in collaborating with me. You can reach me via:
						</p>
						<div className='contact__data__list'>
							<a
								className='contact__data__list__element'
								href='https://www.linkedin.com/in/micha%C5%82-turski-871639280/'
								target='blank'>
								<i className='fa-brands fa-linkedin'></i>
								linkedin
							</a>

							<a className='contact__data__list__element' href='https://github.com/miksiu120'>
								<i className='fa-brands fa-github'></i>
								github
							</a>

							<a className='contact__data__list__element' href='#'>
								<i className='fa-solid fa-envelope'></i>
								miksiu120@gmail.com
							</a>

							<a className='contact__data__list__element' href='#'>
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
