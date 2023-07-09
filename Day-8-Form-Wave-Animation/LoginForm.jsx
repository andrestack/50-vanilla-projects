import React, { useEffect, useRef } from 'react'
import './style.css'

function LoginForm() {
  const labelsRef = useRef([])

  useEffect(() => {
    labelsRef.current.forEach((label) => {
      label.innerHTML = label.innerText
        .split('')
        .map(
          (letter, idx) =>
            `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
        )
        .join('')
    })
  }, [])

  return (
    <div className="container">
      <h1>Please Login</h1>
      <div className="form-control">
        <input type="text" required />
        <label ref={(el) => (labelsRef.current[0] = el)}>Email</label>
      </div>

      <div className="form-control">
        <input type="password" required />
        <label ref={(el) => (labelsRef.current[1] = el)}>Password</label>
      </div>

      <button className="btn">Login</button>
      <p className="text">
        Don't have an account <a href="#">Register</a>
      </p>
    </div>
  )
}

export default LoginForm
