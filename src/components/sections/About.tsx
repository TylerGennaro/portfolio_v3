import { ShadowHeading } from '@/components/ShadowHeading';
import { Text } from '@/components/Text';
import Image from 'next/image';
import vortex from '../../../public/vortex.svg';

export default function About() {
	return (
		<section className='px-0 xl:px-8'>
			<div className='w-full bg-gradient-to-r from-primary to-secondary xl:rounded-lg px-16 py-32 relative shadow-lg overflow-hidden'>
				<div className='absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2'>
					<Image src={vortex} alt='' className='motion-safe:animate-rotate' />
				</div>
				<ShadowHeading color='light'>About Me</ShadowHeading>
				<Text className='max-w-screen-sm mt-8' color='lmuted'>
					I am a recent graduate from Monmouth University in West Long Branch,
					NJ with a Bachelor of Science in Computer Science. I have <b>six</b>{' '}
					years experience in web development and <b>three</b> years experience
					using modern frameworks such as React.js and Next.js. I am currently
					working full-time as a full-stack software developer building
					electronic health records systems.
					<br />
					<br />I am open to entry-level software development positions to
					utilize my problem-solving and collaborative skills to provide
					high-quality solutions in a fast-paced and dynamic environment. I am
					passionate about software development and am eager to continue
					learning and grow my skillset.
					<br />
					<br />
					If you&apos;re interested in my work and would like a copy of my
					resume, please reach out to me at{' '}
					<a href='mailto:tylergennaro10@gmail.com' className='underline'>
						tylergennaro10@gmail.com
					</a>
					.
				</Text>
			</div>
		</section>
	);
}
