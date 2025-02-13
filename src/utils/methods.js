export function truncateString(input, length = 20) {
  if (input === null || input === undefined) return '' // Handle null/undefined
  const inputStr = input.toString() // Convert number to string
  return inputStr.length > length
    ? `${inputStr.substring(0, length)}...`
    : inputStr
}

export const headers = (token) => ({
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
})
