import { _node_version } from './_node_version'
export function verify_node_version(package_path?:string) {
	const expected_node_version = _node_version(package_path)
	const actual_node_version = process.versions['node']
	if (
		expected_node_version
		&& expected_node_version !== actual_node_version
	) {
		throw `Expected to be running node version ${expected_node_version}. Running ${actual_node_version}.`
	}
}
export {
	verify_node_version as verify__node_version
}