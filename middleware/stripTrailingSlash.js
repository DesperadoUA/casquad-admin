export default function ({ route, redirect }) {
	const path = route.path
	if (path !== '/' && path.endsWith('/')) {
		const newPath = path.replace(/\/+$/, '')
		const query = route.fullPath.split('?')[1]
		const redirectPath = query ? `${newPath}?${query}` : newPath

		return redirect(301, redirectPath)
	}
}
