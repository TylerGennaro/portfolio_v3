import { ThemeToggle } from './ThemeToggle';
import logo from '../../public/logo.svg';
import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';
import { Button } from './Button';

export default function Header() {
	return (
		<header>
			<div className='max-w-screen-xl mx-auto px-8 flex justify-between py-4'>
				<Image
					src={logo}
					alt='Logo'
					className='w-12 aspect-square shadow-lg rounded-full'
				/>
				<div className='flex gap-2 items-center'>
					<a href='https://github.com/TGennnaro' target='_blank'>
						<Button variant='icon'>
							<Github />
						</Button>
					</a>
					<a href='https://www.linkedin.com/in/tyler-gennaro/' target='_blank'>
						<Button variant='icon'>
							<Linkedin />
						</Button>
					</a>
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
