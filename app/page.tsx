import CTAForm from '@/components/cta-form'
import HeroImage from '@/components/hero-image'
import Illustrations from '@/components/illustrations'
import Introduction from '@/components/introduction'
import Podcasts from '@/components/podcasts'
import Logo from '@/public/assets/desktop/logo.svg'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='relative py-20 md:pt-0 lg:pt-32 min-h-screen flex flex-col items-center justify-center gap-14 md:items-start px-6 md:px-10 md:justify-start lg:px-40 md:gap-36'>
			<HeroImage />
			<Illustrations />
			<Image
				src={Logo}
				alt='Logo'
				className='object-contain md:pt-12 lg:pt-0'
			/>
			<section className='md:bg-navy-black z-50 md:py-24 md:pr-8 lg:py-10 lg:pr-80'>
				<Introduction />
				<div className='flex flex-col items-center gap-12 md:flex-col-reverse mt-9 md:items-start lg:gap-16 lg:mt-10'>
					<Podcasts />
					<CTAForm />
				</div>
			</section>
		</main>
	)
}
