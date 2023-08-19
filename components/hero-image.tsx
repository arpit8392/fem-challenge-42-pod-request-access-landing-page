import Image from "next/image"

const HeroImage = () => {
	return (
		<>
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
					className='hidden md:block lg:hidden'
				/>
				<Image
					src={'/assets/desktop/image-host.jpg'}
					width={888}
					height={640}
					alt='Hero Image'
					className='hidden lg:block'
				/>
			</div>
		</>
	)
}
export default HeroImage
