import React from 'react'
import SectionTitle from './SectionTitle'
import AbilityCard from './elementsAbilities/AbilityCard'
import html from '../img/icons/html.png'
import css from '../img/icons/css.png'
import sass from '../img/icons/sass.png'
import ts from '../img/icons/ts.png'
import js from '../img/icons/js.png'
import react from '../img/icons/react.png'
import git from '../img/icons/git.png'
function Abilities() {
	return (
		<section className='abilities' id='abilities'>
			<div className='container'>
				<SectionTitle sectionName='Abilities' />
				<div className='abilities__box'>
					<AbilityCard name={'html'} image={html} text={'HTML'} />
					<AbilityCard name={'css'} image={css} text={'CSS'} />
					<AbilityCard name={'sass'} image={sass} text={'SASS'} />
					<AbilityCard name={'typeScript'} image={ts} text={'TS'} />
					<AbilityCard name={'javaScript'} image={js} text={'JavaScript'} />
					<AbilityCard name={'react'} image={react} text={'React'} />
					<AbilityCard name={'git'} image={git} text={'GIT'} />
				</div>
			</div>
		</section>
	)
}
export default Abilities
