/**
 * Create a mixin to fetch data using @nuxt/content
 * @param {Object} options
 */
export default function fetchContent(options) {
  const { folderName, sortBy, only = [] } = options

  if (!folderName || typeof folderName !== 'string') {
    throw new Error("The 'folderName' option is required and must be a string")
  }

  if (!Array.isArray(only)) {
    throw new TypeError("The 'sortBy' option must be a array")
  }

  if (
    !sortBy ||
    typeof sortBy !== 'object' ||
    Array.isArray(sortBy) ||
    !Object.keys(sortBy).includes('key') ||
    !Object.keys(sortBy).includes('direction')
  ) {
    throw new TypeError(
      "The 'sortBy' option must be a object with a key and direction property"
    )
  }

  const mixin = {
    async asyncData({ $content }) {
      const pages = await $content(folderName)
        .only(only)
        .sortBy(sortBy.key, sortBy.direction)
        .fetch()
      return {
        pages,
      }
    },
  }

  return mixin
}
