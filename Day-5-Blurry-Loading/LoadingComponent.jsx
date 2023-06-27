import React, { useState, useEffect } from 'react'
import styled from  "styled-components"

const Background = styled.section`
background: url('https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80')
    no-repeat center center / cover;
  position: absolute;
  top: -30px;
  left: -30px;
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
  z-index: -1;
  filter: blur(0px);
`
const Loading = styled.div`
font-size: 50px;
  color: #fff;
`

const LoadingComponent = () => {
  const [load, setLoad] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad((prevLoad) => {
        if (prevLoad >= 99) {
          clearInterval(interval)
          return prevLoad
        }
        return prevLoad + 1
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

  const opacity = scale(load, 0, 100, 1, 0)
  const blur = scale(load, 0, 100, 30, 0)

  return (
    <Background style={{ filter: `blur(${blur}px)` }}>
      <Loading className="loading-text" style={{ opacity }}>
        {load}%
      </Loading>
    </Background>
  )
}

export default LoadingComponent

//This refactor assumes that the 'loading-text' and 'bg' classes apply to elements that are part of the same component. If they are not, you may need to lift state up to a common ancestor component.
