import { twMerge } from 'tailwind-merge';
import { VariantProps, tv } from 'tailwind-variants';

const shadowHeading = tv({
	base: 'text-5xl lg:text-7xl text-foreground font-bold leading-snug [&>span:first-of-type]:text-primary',
	variants: {
		color: {
			light:
				'text-white [&>span:first-of-type]:text-white [&>span:nth-of-type(2)]:opacity-5',
		},
	},
});

type ShadowHeadingVariants = VariantProps<typeof shadowHeading>;

interface ShadowHeadingProps extends ShadowHeadingVariants {
	children: React.ReactNode;
}

export const ShadowHeading = (props: ShadowHeadingProps) => {
	return (
		<h1 className={twMerge(shadowHeading(props), 'relative z-[1]')}>
			<span className='mr-2'>_</span>
			<span className='absolute hidden sm:inline left-6 -bottom-3 text-[82px] lg:text-[128px] lg:left-10 lg:bottom-0 opacity-[2%] select-none -z-[1]'>
				{props.children}
			</span>
			{props.children}
		</h1>
	);
};
