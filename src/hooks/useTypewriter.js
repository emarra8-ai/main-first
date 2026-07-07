import { useEffect, useState } from 'react'

/**
 * useTypewriter — reveals `text` one character at a time.
 *
 * @param {string} text        The full string to type out (supports \n).
 * @param {number} speed       Delay between characters, in ms (default 38).
 * @param {number} startDelay  Delay before typing starts, in ms (default 600).
 * @returns {{ displayed: string, done: boolean }}
 */
export function useTypewriter(text, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)

    let i = 0
    let interval

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, speed, startDelay])

  return { displayed, done }
}
