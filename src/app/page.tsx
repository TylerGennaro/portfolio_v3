import Banner from '@/components/Banner';
import { Button } from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import { ShadowHeading } from '@/components/ShadowHeading';
import Skill from '@/components/Skill';
import SlotText from '@/components/SlotText';
import { Text } from '@/components/Text';
import {
	Project,
	ProjectDescription,
	ProjectImage,
	ProjectTitle,
	ProjectTool,
	ProjectTools,
} from '@/components/project';
import { Box, Github, Mail } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import commonwealth from '../../public/commonwealth.jpg';
import coursehawk from '../../public/coursehawk.png';
import devslistDark from '../../public/devslist-dark.png';
import devslistLight from '../../public/devslist-light.png';
import logo from '../../public/logo.svg';
import pulsateDark from '../../public/pulsate-dark.png';
import pulsateLight from '../../public/pulsate-light.png';
import vortex from '../../public/vortex.svg';
import Meteors from '@/components/Meteors';

export const metadata: Metadata = {
	title: 'Portfolio - Tyler Gennaro',
	description: 'My personal portfolio.',
};

export default function Home() {
	const BANNER_SPEED = 45;

	return (
		<main className='max-w-screen-xl mx-auto'>
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
					<div className='mt-12 flex items-center flex-wrap gap-4'>
						<a href='mailto:tylergennaro10@gmail.com'>
							<Button className='slide-in [animation-delay:_200ms]' icon={Mail}>
								Contact Me
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
			<section className='px-0 xl:px-8'>
				<div className='w-full bg-gradient-to-r from-primary to-secondary xl:rounded-lg px-16 py-32 relative shadow-lg overflow-hidden'>
					<div className='absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2'>
						<Image src={vortex} alt='' className='motion-safe:animate-rotate' />
					</div>
					<ShadowHeading color='light'>About Me</ShadowHeading>
					<Text className='max-w-screen-sm mt-8' color='lmuted'>
						I am a student at Monmouth University in West Long Branch, NJ
						expected to graduate in May 2024. I am pursuing a Bachelor&apos;s of
						Science in Computer Science. I have <b>five</b> years experience in
						web development, and <b>two</b> years experience using modern
						frameworks such as React.js.
						<br />
						<br />I am seeking an entry-level software development position to
						utilize my problem-solving and collaborative skills to drive company
						success. I am passionate about web development and am eager to
						continue to learn and grow.
						<br />
						<br />
						If you&apos;re interested in my work, please reach out to me at{' '}
						<a href='mailto:tylergennaro10@gmail.com' className='underline'>
							tylergennaro10@gmail.com
						</a>
						.
					</Text>
				</div>
			</section>
			<section className='px-8 mt-64 scroll-m-24' id='projects'>
				<SectionHeading header='Projects'>
					A list of my projects from the last two years. Each project showcases
					both front- and back-end stacks.
				</SectionHeading>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<Project href='https://github.com/TGennnaro/pulsate'>
						<ProjectImage
							src={pulsateLight}
							alt='Pulsate'
							className='dark:hidden'
						/>
						<ProjectImage
							src={pulsateDark}
							alt='Pulsate'
							className='hidden dark:block'
						/>
						<ProjectTitle>Pulsate</ProjectTitle>
						<ProjectDescription>
							Inventory management application
						</ProjectDescription>
						<ProjectTools>
							<ProjectTool>TypeScript</ProjectTool>
							<ProjectTool>Next.js</ProjectTool>
							<ProjectTool>TailwindCSS</ProjectTool>
							<ProjectTool>ShadcnUI</ProjectTool>
							<ProjectTool>PostgreSQL</ProjectTool>
							<ProjectTool>Prisma</ProjectTool>
							<ProjectTool>NextAuth</ProjectTool>
							<ProjectTool>React Query</ProjectTool>
							<ProjectTool>Stripe</ProjectTool>
						</ProjectTools>
					</Project>
					<Project href='https://github.com/TGennnaro/devslist'>
						<ProjectImage
							src={devslistLight}
							alt='DevsList'
							className='dark:hidden'
						/>
						<ProjectImage
							src={devslistDark}
							alt='DevsList'
							className='hidden dark:block'
						/>
						<ProjectTitle>DevsList</ProjectTitle>
						<ProjectDescription>
							Recruitment platform for developers
						</ProjectDescription>
						<ProjectTools>
							<ProjectTool>TypeScript</ProjectTool>
							<ProjectTool>Next.js</ProjectTool>
							<ProjectTool>TailwindCSS</ProjectTool>
							<ProjectTool>NextUI</ProjectTool>
							<ProjectTool>MySQL</ProjectTool>
							<ProjectTool>Drizzle ORM</ProjectTool>
							<ProjectTool>NextAuth</ProjectTool>
							<ProjectTool>React Query</ProjectTool>
						</ProjectTools>
					</Project>
					<Project href='https://github.com/TGennnaro/common-metal'>
						<ProjectImage src={commonwealth} alt='Commonwealth Metal' />
						<ProjectTitle>Commonwealth Metal Company</ProjectTitle>
						<ProjectDescription>Company website</ProjectDescription>
						<ProjectTools>
							<ProjectTool>TypeScript</ProjectTool>
							<ProjectTool>Next.js</ProjectTool>
							<ProjectTool>TailwindCSS</ProjectTool>
							<ProjectTool>ShadcnUI</ProjectTool>
						</ProjectTools>
					</Project>
					<Project href='https://github.com/TGennnaro/CourseHawk'>
						<ProjectImage src={coursehawk} alt='CourseHawk' />
						<ProjectTitle>CourseHawk</ProjectTitle>
						<ProjectDescription>
							Professor rating database for Monmouth University
						</ProjectDescription>
						<ProjectTools>
							<ProjectTool>TypeScript</ProjectTool>
							<ProjectTool>Next.js</ProjectTool>
							<ProjectTool>TailwindCSS</ProjectTool>
							<ProjectTool>NextUI</ProjectTool>
							<ProjectTool>Pocketbase</ProjectTool>
						</ProjectTools>
					</Project>
				</div>
			</section>
			<section className='px-0 xl:px-8'>
				<div className='mt-24 bg-[linear-gradient(to_right,_var(--primary),_#18A4B9,_#3068D4_40%,_var(--secondary))] py-8 xl:rounded-lg flex flex-col items-center gap-4 shadow-lg'>
					<Text size='lg' color='light'>
						See more projects
					</Text>
					<a href='https://github.com/TGennnaro' target='_blank'>
						<Button className='' variant='light' icon={Github}>
							GitHub
						</Button>
					</a>
				</div>
			</section>
			<section className='px-8 mt-64'>
				<SectionHeading header='Skills'>
					Languages, frameworks, technologies, and tools that I have hands-on
					experience with. Some skills were utilized in the projects above.
				</SectionHeading>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
					<Skill label='TypeScript' skill='typescript' big />
					<Skill label='Next.js' skill='nextjs' big />
					<Skill label='HTML/CSS' skill='html' big />
				</div>
				<Banner
					className='mt-8'
					items={[
						{ label: 'React.js', skill: 'reactjs' },
						{ label: 'Node.js', skill: 'nodejs' },
						{ label: 'Express.js', skill: 'expressjs', hasDark: true },
						{ label: 'JavaScript', skill: 'javascript' },
						{ label: 'Java', skill: 'java' },
						{ label: 'Lua', skill: 'lua' },
						{ label: 'TailwindCSS', skill: 'tailwindcss' },
						{ label: 'Sass', skill: 'sass' },
					]}
					speed={BANNER_SPEED}
					direction='right'
				/>
				<Banner
					className='mt-4'
					items={[
						{ label: 'MySQL', skill: 'mysql' },
						{ label: 'PostgreSQL', skill: 'postgresql' },
						{ label: 'Prisma', skill: 'prisma', hasDark: true },
						{ label: 'Drizzle', skill: 'drizzle' },
						{ label: 'Figma', skill: 'figma' },
						{ label: 'Github', skill: 'github', hasDark: true },
						{ label: 'VS Code', skill: 'vscode' },
						{ label: 'Vercel', skill: 'vercel', hasDark: true },
					]}
					speed={BANNER_SPEED}
					direction='left'
				/>
			</section>
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
