import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';
import '../styles/globals.css';
import { twMerge } from 'tailwind-merge';
import Providers from '@/components/Providers';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });

const description = `I am a recent graduate from Monmouth University in West Long Branch,
					NJ with a Bachelor of Science in Computer Science. I have
					six years experience in web development and three years
					experience using modern frameworks such as React.js and Next.js.`;

export const metadata: Metadata = {
	title: 'Portfolio - Tyler Gennaro',
	description,
	openGraph: {
		title: 'Portfolio - Tyler Gennaro',
		description,
		type: 'website',
		locale: 'en_US',
		url: 'https://tgennaro.com',
		siteName: 'Portfolio - Tyler Gennaro',
		images: [
			{
				url: 'https://tgennaro.com/og-image.png',
				alt: 'Tyler Gennaro | Full-Stack Web Developer',
				width: 1200,
				height: 630,
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={twMerge(openSans.className, 'bg-background')}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
