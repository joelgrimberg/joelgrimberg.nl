export default function BlogHeader({ image }: { image: string }) {
	console.log('image', image)
	return (
		<div>
			<img src={image} alt="neon art" />
		</div>
	)
}
