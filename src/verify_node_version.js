import { engines_node_ } from './engines_node_.js'
import satisfies from 'semver/functions/satisfies.js'
/** @type {import(verify_node_version).verify_node_version} */
export const verify_node_version = async package_path=>{
	const engines_node = await engines_node_(package_path)
	const process_versions_node = process.versions.node
	if (engines_node && !satisfies(process_versions_node, engines_node)) {
		throw `Expected to be running node version ${engines_node}. Running ${process_versions_node}. package_path: ${package_path}`
	}
}
export { verify_node_version as verify__node_version }