import React from 'react'
import Header from './Header'
import HomeBanner from './HomeBanner'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className="bg-white">
        <Header />
        <HomeBanner />

        {/* Card */}
        <div data-aos="flip-down"
        data-aos-duration="1500" 
        className='container w-full h-full relative bg-gradient-to-br from-[#000B43] to-[#2E75D4] opacity-100 sm:w-[881px] sm:h-[508px] mx-auto lg:-mt-32 -mt-16'>
            <div className='container w-full'>
                <div className='flex ml-10 md:pt-9 sm:pt-14 py-7'>
                    <span data-aos="fade-right"
                    data-aos-duration="1800" 
                    data-aos-delay="400"  
                    className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1 mt-1'></span>
                    <span data-aos="fade-right"
                    data-aos-duration="1800" 
                    data-aos-delay="500"  
                    className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1 mt-1'></span>
                    <span data-aos="fade-right"
                    data-aos-duration="1800" 
                    data-aos-delay="600"   
                    className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1 mt-1'></span>
                    <h4 data-aos="fade-right"
                    data-aos-duration="1800"  
                    className='uppercase text-white font-bold text-sm md:text-xl -mt-2'>que faisons-nous ?</h4>
                </div>
                <div className='md:ml-20 ml-14 mt-5'>
                    <h3 data-aos="fade-down"
                    data-aos-duration="1800" 
                    data-aos-delay="200"  
                    className='uppercase text-white font-extrabold md:text-xl text-lg leading-none'>
                        Le savoir-faire de Pratic Agence se manifeste par <br /> l'intégration harmonieuse de stratégies créatives et <br /> 
                        de solutions technologiques avancées, offrant une <br /> communication 360° d'exception
                    </h3>
                    <hr data-aos="fade-left"
                    data-aos-duration="1800" 
                    data-aos-delay="1200"  
                    className="w-[176px] border-t-2 border-white opacity-75 my-4" />
                    <p data-aos="fade-left"
                    data-aos-duration="1800" 
                    data-aos-delay="400"  
                    className='text-white font-semibold leading-none ml-8 my-6'>
                        En tant que partenaire de confiance, Pratic Agence guide ses clients à <br /> 
                        travers l'univers complexe de la communication pour saisir de <br /> 
                        nouvelles opportunités et renforcer leur avantage compétitif. Avec une <br /> 
                        équipe de professionnels chevronnés, Pratic Agence harmonise <br /> 
                        créativité et technologie pour propulser votre marque vers le succès.
                    </p>
                    <hr data-aos="fade-left"
                    data-aos-duration="1800" 
                    data-aos-delay="800"  
                    className="w-[176px] border-t-2 border-white opacity-75 my-4" />

                    <button data-aos="fade-right"
                    data-aos-duration="1800" 
                    data-aos-delay="800" 
                    className='uppercase font-bold md:text-[26px] text-xl  text-white border-2 md:px-14 sm:px-7 sm:py-3 px-5 py-3 md:py-4 my-8'>
                        <Link to={'/about'}>
                            à propos
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero