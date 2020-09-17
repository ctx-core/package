import { _package_json } from './_package_json'
export function _package_version(path__package) {
	return _package_json(path__package).version
}
export const _version = _package_version
