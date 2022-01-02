import { package_json_ } from './package_json_.js'
/** @type {import(engines_node_).engines_node_} */
export const engines_node_ = async package_path=>{
	const package_json = await package_json_(package_path)
	const { engines } = package_json
	return engines === null || engines === void 0 ? void 0 : engines.node
}
export { engines_node_ as node_version_, engines_node_ as _node_version, }
