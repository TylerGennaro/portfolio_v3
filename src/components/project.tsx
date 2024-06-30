import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from './Button';
import { Github, Radio } from 'lucide-react';

export function Project({
	children,
	liveHref,
	githubHref,
	disableLiveSite,
}: {
	children: ReactNode;
	liveHref?: string;
	githubHref?: string;
	disableLiveSite?: boolean;
}) {
	return (
		<div className='w-full h-full p-4 border rounded-lg shadow-md [&:hover>img]:scale-[1.01] transition duration-300 flex flex-col justify-between'>
			<div>{children}</div>
			<div className='flex gap-4 flex-wrap w-full mt-8'>
				<a
					href={liveHref}
					target='_blank'
					className={`grow ${disableLiveSite ? 'pointer-events-none' : ''}`}
				>
					<Button
						className='w-full justify-center'
						icon={Radio}
						disabled={disableLiveSite}
					>
						Live Site
					</Button>
				</a>
				<a href={githubHref} target='_blank' className='grow'>
					<Button
						variant='muted'
						className='w-full justify-center'
						icon={Github}
					>
						View on Github
					</Button>
				</a>
			</div>
		</div>
	);
}

export function ProjectImage({
	src,
	alt,
	className,
}: {
	src: string | StaticImageData;
	alt: string;
	className?: string;
}) {
	return (
		<Image
			src={src}
			alt={alt}
			className={twMerge(
				'w-full border rounded-lg transition duration-300 h-72 object-cover',
				className
			)}
		/>
	);
}

export function ProjectTitle({ children }: { children: ReactNode }) {
	return (
		<h3 className='text-foreground font-bold text-2xl mt-4'>{children}</h3>
	);
}

export function ProjectDescription({ children }: { children: ReactNode }) {
	return <p className='text-lg mt-2 text-foreground-muted'>{children}</p>;
}

export function ProjectTool({ children }: { children: ReactNode }) {
	return (
		<li className='text-sm text-foreground-muted bg-content border w-fit px-6 py-1 rounded-full inline'>
			{children}
		</li>
	);
}
