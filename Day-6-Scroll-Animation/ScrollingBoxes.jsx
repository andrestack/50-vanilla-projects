import React, { useState, useEffect } from 'react'

const ScrollingBoxes = () => {
  const [showBox, setShowBox] = useState(false)

  useEffect(() => {
    const checkBoxes = () => {
      const triggerBottom = window.innerHeight * 0.8

      if (window.scrollY > triggerBottom) {
        setShowBox(true)
      } else {
        setShowBox(false)
      }
    }

    window.addEventListener('scroll', checkBoxes)

    // Cleanup function
    return () => window.removeEventListener('scroll', checkBoxes)
  }, [])

  return (
    <div>
      <div className={`box ${showBox ? 'show' : ''}`}>Box 1</div>
      <div className={`box ${showBox ? 'show' : ''}`}>Box 2</div>
      <div className={`box ${showBox ? 'show' : ''}`}>Box 3</div>
      {/* Add more boxes as needed */}
    </div>
  )
}

export default ScrollingBoxes
