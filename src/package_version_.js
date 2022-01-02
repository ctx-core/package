import { package_json_ } from './package_json_.js'
/** @type {import(package_version_).package_version_} */
export const package_version_ = async package_path=>
	(await package_json_(package_path)).version
export { package_version_ as _package_version, package_version_ as _version, }
