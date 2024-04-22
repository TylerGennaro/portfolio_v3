import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { Github } from 'lucide-react';

export default function SeeMore() {
	return (
		<section className='px-0 xl:px-8'>
			<div className='mt-24 bg-[linear-gradient(to_right,_var(--primary),_#18A4B9,_#3068D4_40%,_var(--secondary))] py-8 xl:rounded-lg flex flex-col items-center gap-4 shadow-lg'>
				<Text size='lg' color='light'>
					See more projects
				</Text>
				<a href='https://github.com/TylerGennaro' target='_blank'>
					<Button className='' variant='light' icon={Github}>
						GitHub
					</Button>
				</a>
			</div>
		</section>
	);
}
