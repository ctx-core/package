import { _package_json } from './_package_json'
export function _node_version(package_path?:string):void|string {
  const package_json = _package_json(package_path)
  const { engines } = package_json
  const node_version = engines && engines.node
  return node_version
}