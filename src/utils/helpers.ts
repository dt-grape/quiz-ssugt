export const addLeadingZero = (number: number) => {
  if (number > 9) {
    return number
  } else {
    return '0' + number
  }
}

// utility function to format the remaining time as minutes:seconds
export function formatTime(time: number) {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export const convertSeconds = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  const hourString = hours > 0 ? `${hours} час${hours % 10 === 1 && hours % 100 !== 11 ? '' : hours % 10 >= 2 && hours % 10 <= 4 && (hours % 100 < 10 || hours % 100 >= 20) ? 'а' : 'ов'}` : ''
  const minuteString = minutes > 0 ? `${minutes} минут${minutes % 10 === 1 && minutes % 100 !== 11 ? 'а' : minutes % 10 >= 2 && minutes % 10 <= 4 && (minutes % 100 < 10 || minutes % 100 >= 20) ? 'ы' : ''}` : ''
  const secondString = remainingSeconds > 0 ? `${remainingSeconds} секунд${remainingSeconds % 10 === 1 && remainingSeconds % 100 !== 11 ? 'а' : remainingSeconds % 10 >= 2 && remainingSeconds % 10 <= 4 && (remainingSeconds % 100 < 10 || remainingSeconds % 100 >= 20) ? 'ы' : ''}` : ''

  if (hours > 0) {
    return `${hourString} : ${minuteString || '0 минут'} ${secondString ? `: ${secondString}` : ''}`
  } else if (!hours && minutes > 0) {
    return `${minuteString} ${secondString ? `: ${secondString}` : ''}`
  }

  return secondString
}

export const refreshPage = (): void => {
  window.location.reload()
}

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array]

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    // Swap elements using array destructuring
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }

  return shuffledArray
}
