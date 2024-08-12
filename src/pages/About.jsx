import React from 'react'

// import components
import Header from '../components/Header'
import Banner from '../components/Banner'
import Teams from '../components/Teams'
import Footer from '../components/Footer'

// import video
import present from '../Assets/Videos/presentation.MP4'

const VideoComponent = () => {
    return (
      <div className="w-full h-full">
        <video className="w-full h-full" src={present} controls>
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

const About = () => {
  return (
    <div>
        <Header />
        <Banner />
        {/* Card */}
        <div data-aos="fade-up"
        data-aos-duration="1500"
        className='container w-full h-full relative bg-gradient-to-br from-[#000B43] to-[#2E75D4] opacity-100 sm:w-[758px] sm:h-[437px] mx-auto md:-mt-16 -mt-8'>
            <div className='container w-full'>
                <div className='flex ml-10 md:pt-9 sm:pt-14 py-7'>
                    <span data-aos="fade-right"
                    data-aos-duration="1500" 
                    data-aos-delay="300"
                    className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-2 mt-2'></span>
                    <span data-aos="fade-right"
                    data-aos-duration="1500" 
                    data-aos-delay="400"
                    className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-2 mt-2'></span>
                    <span data-aos="fade-right"
                    data-aos-duration="1500" 
                    data-aos-delay="500"
                    className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-2 mt-2'></span>
                    <h4 data-aos="fade-right"
                    data-aos-duration="1500" 
                    className='uppercase text-white font-bold text-sm md:text-xl'>mot du fondateur</h4>
                </div>
                <div data-aos="zoom-in"
                data-aos-duration="1500"
                    className='mt-5'>
                    <p className='text-white font-semibold leading-none ml-8 lg:text-2xl text-2xl pb-8'>
                        “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum eget purus vel scelerisque. 
                        Mauris porta, justo nec feugiat varius, purus diam congue mi, ac ullamcorper eros orci non odio. Integer 
                        vel pharetra risus. In hac habitasse platea dictumst. Nulla facilisi. Vestibulum gravida consequat diam, 
                        sit amet tristique nulla lobortis sit amet. “
                    </p>
                </div>
            </div>
        </div>

        {/* section que faisons-nous ? */}
        <section className='bg-gradient-to-br from-[#000B43] to-[#0044A0] opacity-100 my-24 h-full'>
            <div className=" max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-full lg:grid-cols-2">
                    <div data-aos="fade-right"
                    data-aos-duration="1500"
                    className="relative flex items-center">
                        <span data-aos="fade-right"
                        data-aos-duration="1500"
                        className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <div className='flex'>
                                <div>
                                    <span className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                    <span className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                    <span className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                </div>
                                <h5 className='text-white font-bold uppercase '>que faisons-nous ?</h5>
                            </div>
                            <h2 className="text-2xl uppercase text-white font-bold sm:text-2xl">
                                accompagner nos clients et partenaires vers une communication 360° plus perfomante et intégrée
                            </h2>

                            <span data-aos="fade-right"
                            data-aos-duration="1500"
                            className="block w-[176px] h-[1px] bg-[#CBCBCB] my-5"></span>
                            <p className="mt-4 text-white font-semibold ml-8 text-xl">
                                Nous sommes fiers de redéfinir la communication 360° en Afrique, contribuant à des stratégies 
                                dynamiques et innovantes qui propulsent les entreprises vers le succès dans ce continent 
                                en pleine croissance.
                            </p>
                            <span data-aos="fade-right"
                            data-aos-duration="1500" 
                            className="block w-[176px] h-[1px] bg-[#CBCBCB] my-5"></span>
                            <button className="rounded-2xl border-2 border-white px-3.5 py-2.5 text-xl font-bold leading-6 text-white shadow-sm uppercase w-[287px] h-[70px] text-center">
                                obtenir un devis
                            </button>

                        </div>
                    </div>
                    <div data-aos="zoom-out"
                    data-aos-duration="1500" 
                    className="relative z-10 py-24 lg:py-24 sm:py-28">
                        <div className="relative h-full sm:h-full lg:h-full">
                            <VideoComponent />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#B495F6] to-[#000B43] opacity-60 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* teams */}
        <Teams />

        {/* footer */}
        <Footer />
    </div>
  )
}

export default About