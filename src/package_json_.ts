import { resolve } from 'import-meta-resolve'
import { readFile } from 'fs/promises'
import type { Package } from './Package.js'
export async function package_json_(package_path?:string):Promise<Package> {
	let json:string
	if (package_path) {
		const resolve_path = await resolve(package_path, import.meta.url)
		const search = `/${package_path}/`
		const directory_index = resolve_path.lastIndexOf(search) + search.length
		const directory = resolve_path.slice(0, directory_index)
		json = (await readFile(`${directory}/package.json`)).toString()
	} else {
		json = (await readFile(`./package.json`)).toString()
	}
	return JSON.parse(json)
}
export {
	package_json_ as _package_json,
}
