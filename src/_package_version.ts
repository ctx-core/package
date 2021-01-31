import { _package_json } from './_package_json'
export function _package_version(package_path:string) {
	return _package_json(package_path).version
}
export { _package_version as _version }