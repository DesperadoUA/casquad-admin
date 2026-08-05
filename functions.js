export function isValidEmail(email) {
	if (!email || typeof email !== 'string') return false
	const trimmed = email.trim()
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
}
