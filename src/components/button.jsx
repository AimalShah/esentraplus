import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from './magnetic';

export default function Button({children, backgroundColor="#455CE9", ...attributes}) {

  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect( () => {
    timeline.current = gsap.timeline({paused: true})
    timeline.current
      .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
      .to(circle.current, {top: "-150%", width: "125%", duration: 0.25}, "exit")
  }, [])

  const manageMouseEnter = () => {
    if(timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit');
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout( () => {
      timeline.current.play();
    }, 300)
  }

  return (
    <Magnetic>
      <div className={"rounded-full flex items-center justify-center bg-white border border-white px-[60px] py-[15px] cursor-pointer group [&_p]:relative [&_p]:z-10 [&_p]:transition-colors [&_p]:duration-[400ms] [&_p]:ease-linear z-20"} style={{overflow: "hidden"}} onMouseEnter={() => {manageMouseEnter()}} onMouseLeave={() => {manageMouseLeave()}} {...attributes}>
          {
            children
          }
        <div ref={circle} style={{backgroundColor}} className={"w-full absolute rounded-full top-[100%]"}></div>
      </div>
    </Magnetic>
  )
}
