import type { Metadata } from 'next'
import { Chivo } from 'next/font/google'
import './globals.css'

const chivo = Chivo({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'POD Request Access Landing Page',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${chivo.className} relative bg-navy-black min-h-screen scroll-smooth`}>
				{children}
			</body>
		</html>
	)
}
