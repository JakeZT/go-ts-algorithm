export {}
namespace Leetcode1763 {
	function longestNiceSubstring2(s: string): string {
		let max = -1,
			pos = [1, 1]
		for (let i = 0; i < s.length; i++) {
			for (let j = 1; j <= s.length; j++) {
				const str = s.slice(i, j)
				const size = new Set(str.split('')).size
				const UpSize = new Set(str.toUpperCase().split('')).size
				if (size === UpSize * 2) {
					if (j - i > max) {
						max = j - i
						pos = [i, j]
					}
				}
			}
		}
		return s.slice(...pos)
	}

	const SIZE = 26,
		_A = 65,
		_a = 97
	function checkString(str: string): boolean {
		const lowerArr = new Array(SIZE).fill(false)
		const upperArr = new Array(SIZE).fill(false)
		for (let i = 0; i < str.length; i++) {
			const s = str.charCodeAt(i)
			if (s >= _a) {
				lowerArr[s - _a] = true
			} else {
				upperArr[s - _A] = true
			}
		}
		for (let i = 0; i < SIZE; i++) {
			if (lowerArr[i] !== upperArr[i]) return false
		}
		return true
	}

	export function longestNiceSubstring(s: string): string {
		let res = ''
		for (let i = 0; i < s.length; i++) {
			for (let j = i + 1; j < s.length; j++) {
				const size = j + 1 - i
				const subStr = s.substring(i, j + 1)
				if (checkString(subStr) === true && size > res.length) {
					res = subStr
				}
			}
		}
		return res
	}
}

const test = () => {
	return Leetcode1763.longestNiceSubstring('YazaAay')
}

console.log(test())
