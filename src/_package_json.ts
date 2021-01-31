import resolve from 'resolve'
import fs from 'fs'
export function _package_json(path__package?) {
	let json
	if (path__package) {
		const resolve_path = resolve.sync(path__package, { basedir: __dirname })
		const search = `/${path__package}/`
		const directory_index = resolve_path.lastIndexOf(search) + search.length
		const directory = resolve_path.slice(0, directory_index)
		json = fs.readFileSync(`${directory}/package.json`)
	} else {
		json = fs.readFileSync(`./package.json`)
	}
	return JSON.parse(json)
}