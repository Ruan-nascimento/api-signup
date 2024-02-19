export function buildRoutPath(path) {

    const routParamaterRegex = /:([a-zA-Z]+)/g
    const pathWithParams = path.replaceAll(routParamaterRegex, '(?<$1>[a-z0-9\-_]+)')

    const pathRegex = new RegExp(`^${pathWithParams}`)

    return pathRegex
    // console.log(Array.from(path.matchAll(routParamaterRegex)))

}