import resolve from 'resolve';
import fs from 'fs';
export function package_json_(package_path) {
    let json;
    if (package_path) {
        const resolve_path = resolve.sync(package_path, { basedir: __dirname });
        const search = `/${package_path}/`;
        const directory_index = resolve_path.lastIndexOf(search) + search.length;
        const directory = resolve_path.slice(0, directory_index);
        json = fs.readFileSync(`${directory}/package.json`).toString();
    }
    else {
        json = fs.readFileSync(`./package.json`).toString();
    }
    return JSON.parse(json);
}
export { package_json_ as _package_json, };
//# sourceMappingURL=src/package_json_.js.map