namespace Leetcode1304 {
	function sumZero(n: number): number[] {
		let res = []
		let total = 0
		for (let i = 1; i < n; i++) {
			res.push(i)
			total += i
		}
		res.push(-total)
		return res
	}
}
