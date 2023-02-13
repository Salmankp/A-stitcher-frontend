export const debounce = (fn: any, ms = 800) => {
  let timeId: any = null
  return (...args: any) => {
    if (timeId) clearTimeout(timeId)
    timeId = setTimeout(() => {
      fn(...args)
    }, ms)
  }
}

const sleep = async (m: number) => await new Promise((r) => setTimeout(r, m))

export const updatingActionWrapper = (
  reverseAction: () => void,
  Api: any,
  trials: number,
  timeIncrement: number
) => {
  return Api().catch(async () => {
    await (async function () {
      await sleep(timeIncrement)
      if (trials > 1) {
        await updatingActionWrapper(
          reverseAction,
          Api,
          trials - 1,
          timeIncrement + timeIncrement
        )
      }
      if (trials === 1) reverseAction()
    })()
  })
}
