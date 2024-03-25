import Banner from '@/components/Banner';
import SectionHeading from '@/components/SectionHeading';
import Skill from '@/components/Skill';
import { Text } from '@/components/Text';
import About from '@/components/sections/About';
import Landing from '@/components/sections/Landing';
import Projects from '@/components/sections/Projects';
import SeeMore from '@/components/sections/SeeMore';
import Skills from '@/components/sections/Skills';
import { Metadata } from 'next';

export default function Home() {
	return (
		<main className='max-w-screen-xl mx-auto'>
			<Landing />
			<About />
			<Projects />
			<SeeMore />
			<Skills />
			<footer className='mt-32 mb-8'>
				<div className='bg-[linear-gradient(to_right,_var(--primary),_#18A4B9,_#3068D4_40%,_var(--secondary))] py-4 xl:rounded-lg flex flex-col items-center gap-4 shadow-lg'>
					<Text color='light'>
						Powered by Me © {new Date().getFullYear()} •{' '}
						<a
							className='underline'
							href='https://github.com/TGennnaro/portfolio_v3'
							target='_blank'
						>
							Source Code
						</a>
					</Text>
				</div>
			</footer>
		</main>
	);
}
