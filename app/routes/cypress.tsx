import BlogHeader from '#app/components/blog-header.tsx'
import Blog from './blog.tsx'

export default function Cypress() {
	return (
		<div className="container mb-48 mt-36 flex flex-col items-center justify-center gap-6">
			<div className="flex-1">Cypress related stuff</div>
			<BlogHeader header="/cypress" />
		</div>
	)
}
