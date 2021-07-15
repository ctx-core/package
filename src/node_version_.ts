import { package_json_ } from './package_json_.js'
export async function node_version_(package_path?:string):Promise<void|string> {
  const package_json = await package_json_(package_path)
  const { engines } = package_json
  return engines?.node
}
export {
  node_version_ as _node_version,
}
