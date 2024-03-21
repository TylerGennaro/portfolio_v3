import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

const text = tv({
	base: 'text-lg text-foreground',
	variants: {
		size: {
			lg: 'text-5xl font-semibold leading-snug',
			xl: 'text-7xl font-bold leading-snug',
		},
		color: {
			light: 'text-white',
			lmuted: 'text-white/80',
			muted: 'text-foreground-muted',
		},
	},
});

type TextVariants = VariantProps<typeof text>;

interface TextProps extends TextVariants {
	children: React.ReactNode;
	className?: string;
}

export const Text = (props: TextProps) => {
	return (
		<p className={twMerge(text(props), props.className)}>{props.children}</p>
	);
};
