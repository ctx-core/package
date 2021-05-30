import { package_json_ } from './package_json_'
export function package_version_(package_path:string):string {
	return package_json_(package_path).version
}
export {
	package_version_ as _package_version,
	package_version_ as _version,
}
