import CTAForm from '@/components/cta-form'
import Introduction from '@/components/introduction'
import Podcasts from '@/components/podcasts'
import Logo from '@/public/assets/desktop/logo.svg'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='relative py-20 md:pt-0 min-h-screen flex flex-col items-center justify-center gap-14 md:items-start px-6 md:px-10 md:justify-start lg:px-40 md:gap-36'>
			<div className='absolute w-full h-full bg-navy-black mix-blend-multiply -z-50 md:hidden'>
				<Image
					src={'/assets/mobile/image-host.jpg'}
					fill
					alt='Hero Image'
					className='opacity-10'
				/>
			</div>
			<div className='hidden md:block absolute right-0'>
				<Image
					src={'/assets/tablet/image-host.jpg'}
					width={491}
					height={767}
					alt='Hero Image'
					className=''
				/>
			</div>
			<Image
				src={Logo}
				alt='Logo'
				className='object-contain md:pt-12 lg:pt-24'
			/>
			<section className='md:bg-navy-black z-50 md:py-24 md:pr-8'>
				<Introduction />
				<div className='flex flex-col items-center gap-12 md:flex-col-reverse mt-9 md:items-start'>
					<Podcasts />
					<CTAForm />
				</div>
			</section>
			<div className='hidden md:block absolute bottom-0'>
				<Image
					src={'/assets/desktop/bg-pattern-dots.svg'}
					width={232}
					height={104}
					alt=''
					className='object-contain'
				/>
			</div>
		</main>
	)
}
