import AppleLogo from '@/public/assets/desktop/apple-podcast.svg'
import GoogleLogo from '@/public/assets/desktop/google-podcasts.svg'
import PocketLogo from '@/public/assets/desktop/pocket-casts.svg'
import SpotifyLogo from '@/public/assets/desktop/spotify.svg'
import Image from 'next/image'

const podcastsData = [
	{
		name: 'Spotify',
		logo: SpotifyLogo,
	},
	{
		name: 'Apple Podcasts',
		logo: AppleLogo,
	},
	{
		name: 'Google Podcasts',
		logo: GoogleLogo,
	},
	{
		name: 'Pocket Casts',
		logo: PocketLogo,
	},
]

const Podcasts = () => {
	return (
		<ul className='flex items-center gap-6 flex-wrap md:gap-10 opacity-50'>
			{podcastsData.map((item) => (
				<li key={item.name}>
					<Image src={item.logo} alt={item.name} className='object-contain' />
				</li>
			))}
		</ul>
	)
}
export default Podcasts
