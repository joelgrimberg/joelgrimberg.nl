import { json } from '@remix-run/node'
import { NavLink, useLoaderData, Outlet } from '@remix-run/react'
import * as blog1 from 'post.post1.mdx'
import * as blog2 from 'post.post2.mdx'
import * as blog3 from 'post.post3.mdx'

function postFromModule(mod: any) {
	const fileName = mod.filename.replace(/\.mdx?$/, '')
	const newFileName = fileName.slice(5)
	console.log('fn: ', newFileName)
	console.log('newFileName: ', newFileName)
	return {
		slug: newFileName,
		...mod.attributes,
	}
}

export async function loader() {
	// Return metadata about each of the posts for display on the index page.
	// Referencing the posts here instead of in the Index component down below
	// lets us avoid bundling the actual posts themselves in the bundle for the
	// index page.
	return json([
		postFromModule(blog1),
		postFromModule(blog2),
		postFromModule(blog3),
	])
}
export default function Blog() {
	const data = useLoaderData<typeof loader>()
	console.log('data: ', data)
	return (
		<div className="container flex flex-wrap items-center justify-between gap-3 align-top sm:flex-nowrap md:gap-8">
			<div className="container flex-1 align-top">
				Blog related stuff
				{data.map(something => {
					return (
						<div key={something.slug}>
							<h1>
								<NavLink to={`/blog/post/${something.slug}`}>
									{something.slug}
								</NavLink>
							</h1>
						</div>
					)
				})}
			</div>
			<div className="grid w-full grid-cols-1 pl-2 md:container md:mx-2 md:pr-0">
				<Outlet />
			</div>
		</div>
	)
}
