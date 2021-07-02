export const useLodash = () => {
  const range = (num1: number, num2?: number) => {
    if (num2) {
      return [...Array(num2 - num1).keys()].map((k) => k + num1)
    } else {
      return [...Array(num1).keys()].map((k) => k + 1)
    }
  }

  return { range }
}
