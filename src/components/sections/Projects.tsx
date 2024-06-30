import SectionHeading from '@/components/SectionHeading';
import {
	Project,
	ProjectDescription,
	ProjectImage,
	ProjectTitle,
	ProjectTool,
} from '@/components/project';
import commonwealth from '../../../public/commonwealth.jpg';
import coursehawk from '../../../public/coursehawk.png';
import devslistDark from '../../../public/devslist-dark.png';
import devslistLight from '../../../public/devslist-light.png';
import pulsateDark from '../../../public/pulsate-dark.png';
import pulsateLight from '../../../public/pulsate-light.png';
import ProjectTools from '../ProjectTools';

export default function Projects() {
	return (
		<section className='px-8 mt-64 scroll-m-24' id='projects'>
			<SectionHeading header='Projects'>
				A list of my projects from the last two years. Each project showcases
				both front- and back-end stacks.
			</SectionHeading>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
				<Project
					liveHref='https://pulsate.cloud'
					githubHref='https://github.com/TylerGennaro/pulsate'
				>
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
				<Project
					liveHref='https://devslist.vercel.app'
					githubHref='https://github.com/TylerGennaro/devslist'
					disableLiveSite
				>
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
				<Project
					liveHref='https://commonwealthmetal.com'
					githubHref='https://github.com/TylerGennaro/common-metal'
				>
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
				<Project
					liveHref='https://coursehawk.vercel.app'
					githubHref='https://github.com/TylerGennaro/CourseHawk'
				>
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
	);
}
