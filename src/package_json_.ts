import { readFile } from 'fs/promises'
import { promisify } from 'util'
import resolve from 'resolve'
const resolve_async = promisify(resolve)
import type { Package } from './Package.js'
export async function package_json_(package_path?:string):Promise<Package> {
	let directory:string
	if (package_path) {
		const resolve_path = (await resolve_async(package_path)) as string
		const search = `/${package_path}/`
		const directory_index = resolve_path.lastIndexOf(search) + search.length
		directory = resolve_path.slice(0, directory_index)
	} else {
		directory = '.'
	}
	const json = (await readFile(`${directory}/package.json`)).toString()
	return JSON.parse(json)
}
export {
	package_json_ as _package_json,
}
