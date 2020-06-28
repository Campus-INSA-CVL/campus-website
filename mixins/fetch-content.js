/**
 * Create a mixin to fetch data using @nuxt/content
 * @param {Object} options
 */
export default function fetchContent(options = {}) {
  const { folderName, sortBy, only, paramsNames, fileName } = options

  if (!folderName || typeof folderName !== 'string') {
    throw new Error("The 'folderName' option is required and must be a string")
  }

  if (fileName && typeof fileName !== 'string') {
    throw new Error("The 'fileName' option must be a string")
  }

  if (only && !Array.isArray(only)) {
    throw new TypeError("The 'sortBy' option must be a array")
  }

  if (
    sortBy &&
    (typeof sortBy !== 'object' ||
      Array.isArray(sortBy) ||
      !Object.keys(sortBy).includes('key') ||
      !Object.keys(sortBy).includes('direction'))
  ) {
    throw new TypeError(
      "The 'sortBy' option must be a object with a key and direction property"
    )
  }

  if (paramsNames && !Array.isArray(paramsNames)) {
    throw new TypeError("The 'paramsNames' option must be a array")
  }

  const mixin = {
    async asyncData({ $content, params }) {
      let content = $content(`${folderName}`)
      if (fileName) {
        content = $content(`${folderName}/${fileName}`)
      }
      if (paramsNames?.length === 1) {
        content = $content(
          `${folderName}/${params[paramsNames[0]]}/${fileName}`
        )
      }
      if (paramsNames?.length === 2) {
        content = $content(
          `${folderName}/${params[paramsNames[0]]}/${
            params[paramsNames[1]]
          }/${fileName}
          `
        )
      }

      if (only) {
        content.only(only)
      }
      if (sortBy) {
        content.sortBy(sortBy.key, sortBy.direction)
      }

      content = await content.fetch()
      return {
        content,
      }
    },
  }

  return mixin
}
