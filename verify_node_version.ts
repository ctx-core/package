import { _node_version } from './_node_version'
export function verify_node_version(path__package?) {
	const expected_node_version = _node_version(path__package)
	const actual_node_version = process.versions['node']
	if (
		expected_node_version
		&& expected_node_version !== actual_node_version
	) {
		throw `Expected to be running node version ${expected_node_version}. Running ${actual_node_version}.`
	}
}
export const verify__node_version = verify_node_version
