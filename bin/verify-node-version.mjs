#!/usr/bin/env node
import { param_r_ } from '@ctx-core/cli-args'
import { verify_node_version } from '../dist/index.js'
main().then()
async function main() {
	const param_r = param_r_(process.argv.slice(2), {
		help: '-h, --help',
		package_dir_a: '-p, --package-dir'
	})
	if (param_r.help) {
		console.info(help_msg_())
		process.exit(0)
	}
	for (const package_dir of param_r.package_dir_a) {
		await verify_node_version(`${package_dir}/package.json`)
	}
}
function help_msg_() {
	return `
Usage: verify-version-node.js [-p <package-dir>]

Options:

-h, --help        This help message
-p, --package-dir Directory of package (defaults to '.')
		`.trim()
}
