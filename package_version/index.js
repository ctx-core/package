import { package_json_ } from '../package_json/index.js'
/**
 * @param package_path{string}
 * @returns {Promise<string>}
 */
export async function package_version_(package_path) {
	return package_json_(package_path).then($=>$.version)
}
export {
	package_version_ as _package_version,
	package_version_ as _version,
}
