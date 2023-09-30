
import TechLogo from './tool-logos'


const TechInfo = () => {
  return (
    <section className="relative overflow-hidden ">



      <div className='container ' >
        <div className="px-4 sm:px-6">
          <div className="pt-28 pb-8 md:pt-36 md:pb-16">

            {/* Hero content */}
            <div className="max-w-5xl text-center mx-auto">

              <h1 className="h1 font-roboto font-medium leading-[1.3] text-white/80">
                <span className='gradient-text' >Next js 13</span> Starter template
              </h1>

              <h1 className="gradient-text">
                Tech used :-
              </h1>
            </div>

          </div>
        </div>

        <TechLogo />
      </div>

    </section>
  )
}
export default TechInfo