import CTAForm from '@/components/cta-form'
import Introduction from '@/components/introduction'
import Podcasts from '@/components/podcasts'
import Logo from '@/public/assets/desktop/logo.svg'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='relative'>
			<div className='fixed h-full w-full md:hidden bg-navy-black mix-blend-multiply -z-50'>
				<Image
					src={'/assets/mobile/image-host.jpg'}
					fill
					alt='Hero Image'
					className='object-contain'
				/>
			</div>
			<section className='flex flex-col items-center justify-center min-h-screen gap-14 px-6 md:px-10'>
				<Image src={Logo} alt='Logo' className='object-contain' />
				<Introduction />
				<Podcasts />
				<CTAForm />
			</section>
		</main>
	)
}
