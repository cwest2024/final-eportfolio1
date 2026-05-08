import { useState } from 'react'

function useToggle(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue)

  const toggle = () => {
    setIsOn((prev) => !prev)
  }

  return [isOn, toggle]
}

export default useToggle