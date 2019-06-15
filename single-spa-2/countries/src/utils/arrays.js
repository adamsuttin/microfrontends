export const partitionArray = (arr = [], columns = 1) => {
  const size = Math.ceil(arr.length / columns)
  return Array.from(
    {
      length: Math.ceil(arr.length / size)
    },
    (v, i) => arr.slice(i * size, i * size + size)
  )
}
