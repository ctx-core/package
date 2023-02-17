import { readFile } from 'fs/promises'
import resolve from 'resolve'
import { promisify } from 'util'
const resolve_async = promisify(resolve)
/**
 * @param package_path{string}
 * @returns{Promise<import('../_types').Package>}
 */
export async function package_json_(package_path) {
	/** @type {string} */
	let directory
	if (package_path) {
		const resolve_path = await resolve_async(package_path)
		const search = `/${package_path}/`
		const directory_index = resolve_path.lastIndexOf(search) + search.length
		directory = resolve_path.slice(0, directory_index)
	} else {
		directory = '.'
	}
	const json = (await readFile(`${directory}/package.json`)).toString()
	return JSON.parse(json)
}
export { package_json_ as _package_json, }
