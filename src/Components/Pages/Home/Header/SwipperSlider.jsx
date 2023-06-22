import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import TypeWriter from "./TypeWriter";
// import "./styles.css"

const SwipperSlider = () => {
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )
    return (

        <div>
        <div className="relative flex justify-center">
          <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1 "><img src="https://i.ibb.co/Q8Wzp2w/free-photo-of-camera-map-bust-and-newspaper-on-table.png" className="blur-sm w-full h-[70vh] object-fill" alt="" /></div>
      
      <div className="keen-slider__slide number-slide3 "><img className="blur-sm w-full h-[70vh] object-fill" src="https://i.ibb.co/71JyMgD/pexels-photo-106011-1.png" alt="" /></div>

      <div className="keen-slider__slide number-slide5 "><img className="blur-sm w-full h-[70vh] object-fill" src="https://i.ibb.co/1nw5xK2/pexels-photo-8960464-1.png" alt="" /></div>

    </div>
    </div>
    <div className="z-20 absolute bottom-[55%] right-[25%] w-[900px] border-x-10 border-red-300"><div>
      
      <TypeWriter></TypeWriter>
    </div>
        </div>
        </div>

    )
  };

export default SwipperSlider;