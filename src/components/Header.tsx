'use client';

import { ThemeToggle } from './ThemeToggle';
import logo from '../../public/logo.svg';
import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';
import { Button } from './Button';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		setIsScrolled(window !== undefined ? window.scrollY > 1 : false);
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 1);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={twMerge(
				'sticky top-0 z-10 bg-background transition',
				isScrolled && 'border-b shadow-md'
			)}
		>
			<div className='max-w-screen-xl mx-auto px-8 flex justify-between py-4'>
				<Image
					src={logo}
					alt='Logo'
					className='w-10 aspect-square shadow-lg rounded-full'
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