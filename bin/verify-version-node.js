#!/usr/bin/env node
import { _h__param } from '@ctx-core/cli-args'
import { verify__version__node } from '../lib'
main()
function main() {
	const h__param = _h__param(process.argv.slice(2), {
		help: '-h, --help',
		package_dir: '-p, --package-dir'
	})
	if (h__param.help) {
		console.info(_help_msg())
		process.exit(0)
	}
	verify__version__node(h__param.package_dir)
}
function _help_msg() {
	return `
Usage: verify-version-node.js [-p <package-dir>]

Options:

-h, --help        This help message
-p, --package-dir Directory of package (defaults to '.')
		`.trim()
}
