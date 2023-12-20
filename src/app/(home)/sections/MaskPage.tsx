import HeroMask from './HeroMask'
import ProjectsMask from './ProjectsMask'
import ContactMask from './ContactMask'
import Mask from '@/components/Mask'

const MaskPage = () => {
	return (
		<div className='absolute top-0 left-0 right-0 w-full'>
			<Mask>
				<HeroMask />
				<ProjectsMask />
				<ContactMask />
			</Mask>
		</div>
	)
}

export default MaskPage
