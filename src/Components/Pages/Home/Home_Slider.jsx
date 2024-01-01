import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Home_Slider = () => {

      // Slider Related
      function ThumbnailPlugin(mainRef) {
        return (slider) => {
          function removeActive() {
            slider.slides.forEach((slide) => {
              slide.classList.remove("active")
            })
          }
          function addActive(idx) {
            slider.slides[idx].classList.add("active")
          }
      
          function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
              slide.addEventListener("click", () => {
                if (mainRef.current) mainRef.current.moveToIdx(idx)
              })
            })
          }
      
          slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
              removeActive()
              const next = main.animator.targetIdx || 0
              addActive(main.track.absToRel(next))
              slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
          })
        }
    }

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })

    const [thumbnailRef] = useKeenSlider(
        {
          initial: 0,
          slides: {
            perView: 4,
            spacing: 10,
          },
        },
        [ThumbnailPlugin(instanceRef)]
    )
    

    return (
        <div>

            <div ref={sliderRef} className="keen-slider h-full lg:h-[500px]">
                <div className="keen-slider__slide  number-slide1" >
                    <img src="https://i.ibb.co/M2pmcZJ/Home-01.jpg" />
                </div>

                
                <div className="keen-slider__slide number-slide3">
                    <img src="https://i.ibb.co/VQbYrHR/Home-03.png" alt="" />
                </div>

                <div className="keen-slider__slide number-slide2">
                    <img src="https://i.ibb.co/RP3wH4B/Home-02.jpg" />
                </div>

                <div className="keen-slider__slide number-slide4">
                    <img src="https://i.ibb.co/P42h40J/Home-04.jpg" alt="" />
                </div>

                <div className="keen-slider__slide number-slide5">
                    <img src="https://i.ibb.co/h7vbqyQ/Home-05.png" alt="" />
                </div>

                <div className="keen-slider__slide number-slide6">
                    <img src="https://i.ibb.co/wRCFC2K/Home-06.png" alt="" />
                </div>
                    

              

            </div>

            <div className="w-8/12 mx-auto my-3">
                <div ref={thumbnailRef} className="keen-slider thumbnail">

                    <div className="keen-slider__slide  number-slide1 cursor-pointer " >
                        <img src="https://i.ibb.co/M2pmcZJ/Home-01.jpg" alt="" className=" "/>

                    </div>

                    <div className="keen-slider__slide number-slide2 cursor-pointer">
                        <img src="https://i.ibb.co/RP3wH4B/Home-02.jpg"  alt="" />
                    </div>

                    <div className="keen-slider__slide number-slide3 cursor-pointer">
                        <img src="https://i.ibb.co/VQbYrHR/Home-03.png" alt="" />
                    </div>

                    <div className="keen-slider__slide number-slide4 cursor-pointer">
                        <img src="https://i.ibb.co/P42h40J/Home-04.jpg" alt="" />
                    </div>

                    <div className="keen-slider__slide number-slide5 cursor-pointer">
                        <img src="https://i.ibb.co/h7vbqyQ/Home-05.png" alt="" />
                    </div>

                    <div className="keen-slider__slide number-slide6">
                        <img src="https://i.ibb.co/wRCFC2K/Home-06.png" alt="" />
                    </div>




                </div>
            </div>

        </div>

    );
};

export default Home_Slider;