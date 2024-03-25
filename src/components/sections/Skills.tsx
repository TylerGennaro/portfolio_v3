import Banner from '@/components/Banner';
import SectionHeading from '@/components/SectionHeading';
import Skill from '@/components/Skill';

export default function Skills() {
	const BANNER_SPEED = 45;
	return (
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
	);
}
