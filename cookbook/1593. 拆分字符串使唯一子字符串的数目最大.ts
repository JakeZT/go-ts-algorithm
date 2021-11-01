var maxUniqueSplit = function (s: string): number {
	const S = new Set()
	const n = s.length
	let max = 1
	const dfs = (start: number) => {
		if (n - start + S.size <= max) return
		if (start === n) {
			max = Math.max(max, S.size)
			return
		}
		let temp = ''
		for (let i = start; i < n; i++) {
			temp += s[i]
			if (!S.has(temp)) {
				S.add(temp)
				dfs(i + 1)
				S.delete(temp)
			}
		}
	}
	dfs(0)
	return max
}

{
	const maxUniqueSplit = function (s: string): number {
		const map = new Map<string, boolean>()
		let max = 0
		const dfs = (s: string) => {
			if (map.size + s.length < max) return
			if (s.length === 0) {
				max = Math.max(map.size, max)
			}
			for (let i = 0; i < s.length; i++) {
				const temp = s.substring(0, i + 1)
				if (!map.has(temp)) {
					map.set(temp, true)
					dfs(s.substring(i + 1))
					map.delete(temp)
				}
			}
		}
		dfs(s)
		return max
	}
}
