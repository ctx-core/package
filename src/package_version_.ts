import { package_json_ } from './package_json_.js'
export async function package_version_(package_path:string):Promise<string> {
	return (await package_json_(package_path)).version
}
export {
	package_version_ as _package_version,
	package_version_ as _version,
}
