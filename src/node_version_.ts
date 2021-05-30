import { package_json_ } from './package_json_'
export function node_version_(package_path?:string):void|string {
  const package_json = package_json_(package_path)
  const { engines } = package_json
  const node_version = engines && engines.node
  return node_version
}
export {
  node_version_ as _node_version,
}
