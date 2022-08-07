import React from 'react'
import SectionTitle from './SectionTitle'
import AbilityCard from './elementsAbilities/AbilityCard'
function Abilities() {
	return (
		<section className='abilities' id='abilities'>
			<div className='container'>
				<SectionTitle sectionName='Abilities' />
				<div className='abilities__box'>
					<AbilityCard name={'html'} srcImage={'html.png'} text={'HTML'} />
					<AbilityCard name={'css'} srcImage={'css.png'} text={'CSS'} />
					<AbilityCard name={'sass'} srcImage={'sass.png'} text={'SASS'} />
					<AbilityCard name={'typeScript'} srcImage={'ts.png'} text={'TS'} />
					<AbilityCard name={'javaScript'} srcImage={'js.png'} text={'JavaScript'} />
					<AbilityCard name={'react'} srcImage={'react.png'} text={'React'} />
					<AbilityCard name={'git'} srcImage={'git.png'} text={'GIT'} />
				</div>
			</div>
		</section>
	)
}
export default Abilities
