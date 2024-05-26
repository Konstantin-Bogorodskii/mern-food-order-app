import HeroImage from '@shared/assets/images/hero.png';

export const Hero = () => {
	return (
		<img
			src={HeroImage}
			className="w-full max-h-[600px] object-cover"
		/>
	);
};
