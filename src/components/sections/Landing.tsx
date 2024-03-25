import { Button } from '@/components/Button';
import Meteors from '@/components/Meteors';
import SlotText from '@/components/SlotText';
import { Text } from '@/components/Text';
import { Box, Linkedin } from 'lucide-react';
import Image from 'next/image';
import logo from '../../../public/logo.svg';

export default function Landing() {
	return (
		<>
			<Meteors number={40} />
			<section className='min-h-screen flex items-center px-4 sm:px-8 pb-32 md:pt-16'>
				<div className='w-full'>
					<div className='flex items-center justify-between flex-wrap-reverse gap-16'>
						<div className='hidden sm:block'>
							<Text size='xl' className='slide-in'>
								Hey, I&apos;m Tyler
							</Text>
							<div className='text-4xl sm:text-5xl lg:text-7xl font-bold !leading-snug slide-in delay-75'>
								I am a <SlotText />
							</div>
						</div>
						<div className='sm:hidden'>
							<Text size='xl' className='slide-in'>
								Hey, I&apos;m Tyler, I am
							</Text>
							<div className='text-4xl sm:text-5xl lg:text-7xl font-bold !leading-snug slide-in delay-75'>
								a <SlotText />
							</div>
						</div>
						<div className='relative slide-in delay-150'>
							<div className='bg-primary dark:bg-secondary absolute inset-0 -z-[1] blur-[60px] opacity-50 scale-in' />
							<Image
								src={logo}
								alt='Logo'
								className='w-20 md:w-28 aspect-square'
							/>
						</div>
					</div>
					<div className='mt-8 flex items-center flex-wrap gap-4'>
						<a
							href='https://www.linkedin.com/in/tyler-gennaro/'
							target='_blank'
						>
							<Button
								className='slide-in [animation-delay:_200ms]'
								icon={Linkedin}
							>
								LinkedIn
							</Button>
						</a>
						<a href='#projects'>
							<Button
								className='slide-in [animation-delay:_250ms]'
								variant='outline'
								icon={Box}
							>
								Projects
							</Button>
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
