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
					I am a student at Monmouth University in West Long Branch, NJ expected
					to graduate in May 2024. I am pursuing a Bachelor&apos;s of Science in
					Computer Science. I have <b>five</b> years experience in web
					development, and <b>two</b> years experience using modern frameworks
					such as React.js.
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
	);
}
