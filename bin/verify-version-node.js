#!/usr/bin/env node
import { param_r_ } from '@ctx-core/cli-args'
import { node_version_ } from '../dist'
main()
function main() {
	const param_r = param_r_(process.argv.slice(2), {
		help: '-h, --help',
		package_dir: '-p, --package-dir'
	})
	if (param_r.help) {
		console.info(help_msg_())
		process.exit(0)
	}
	node_version_(param_r.package_dir)
}
function help_msg_() {
	return `
Usage: verify-version-node.js [-p <package-dir>]

Options:

-h, --help        This help message
-p, --package-dir Directory of package (defaults to '.')
		`.trim()
}
