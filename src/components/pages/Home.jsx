import React from 'react';
import '../styles/Home.scss';
import Image from '../../assets/images/passport.jpg';
import { Skills } from '../data';

const Home = () => {
	return (
		<div className='home'>
			<div className='wrapper'>
				<img src={Image} alt='' />
				<span className='text2'>Oseghale Ehichioya Israel</span>
				<span className='text3'>Web Developer | SysAdmin</span>
			</div>
			<div className='wrapper2'>
				<div className='header2'>
					<span className='headers'>Skills</span>
					<div className='line2' />
				</div>
				{Skills.map((skill, key) => (
					<div key={key.id}>
						<span className='header'>{skill.skill}</span>
						<div className='line' />
						<p className='content'>{skill.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
