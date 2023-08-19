import Image from "next/image"

const Illustrations = () => {
	return (
		<div className='hidden md:block absolute bottom-0 lg:right-0 lg:bottom-24'>
			<Image
				src={'/assets/desktop/bg-pattern-dots.svg'}
				width={232}
				height={104}
				alt=''
				className='object-contain'
			/>
		</div>
	)
}
export default Illustrations
