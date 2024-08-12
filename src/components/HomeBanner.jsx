import React from 'react'

import Facebook from '../Assets/facebook.png'
import Linkedin from '../Assets/linkedin.png'
import Instagram from '../Assets/social.png'
import Youtube from '../Assets/youtube.png'
import TikTok from '../Assets/tik-tok.png'
import { Link } from 'react-router-dom'

const HomeBanner = () => {

  return (
    <div>
        <section className="relative bg-home-image bg-cover bg-center bg-no-repeat mt-40">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B495F6] to-[#000B43] opacity-80"></div>

            <div className="flex lg:ml-32 relative px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center text lg:px-8">
                <div className='mr-10 md:block md:relative md:mt-0 flex absolute -mt-16'>
                    <a data-aos="fade-down"
                    data-aos-duration="2000" 
                    data-aos-delay="1000" 
                    href="">
                        <img src={Facebook} alt="" className='w-[52px] h-[52px] mb-2 hover:cursor-pointer hover:scale-125 duration-300 transition ease-in'/>
                    </a>
                    <a data-aos="fade-up"
                    data-aos-duration="2000" 
                    data-aos-delay="800" 
                    href="">
                        <img src={Linkedin} alt="" className='w-[52px] h-[52px] mb-2 hover:cursor-pointer hover:scale-125 duration-300 transition ease-in'/>
                    </a>
                    <a data-aos="fade-up"
                    data-aos-duration="2000" 
                    data-aos-delay="600" 
                    href="">
                        <img src={Instagram} alt="" className='w-[52px] h-[52px] mb-2 hover:cursor-pointer hover:scale-125 duration-300 transition ease-in'/>
                    </a>
                    <a data-aos="fade-up"
                    data-aos-duration="2000" 
                    data-aos-delay="400" 
                    href="">
                        <img src={Youtube} alt="" className='w-[52px] h-[52px] mb-2 hover:cursor-pointer hover:scale-125 duration-300 transition ease-in'/>
                    </a>
                    <a data-aos="fade-up"
                    data-aos-duration="2000" 
                    data-aos-delay="200" 
                    href="">
                        <img src={TikTok} alt="" className='w-[52px] h-[52px] hover:cursor-pointer hover:scale-125 duration-300 transition ease-in'/>
                    </a>
                </div>

                <div className="max-w-full">
                    <div  className='flex'>
                        <div>
                            <span data-aos="fade-right"
                            data-aos-duration="1800" 
                            data-aos-delay="300"  
                            className='w-2 h-2 rounded-full bg-[#000B43] inline-block mr-1'></span>
                            <span data-aos="fade-right"
                            data-aos-duration="1800" 
                            data-aos-delay="400"   
                            className='w-2 h-2 rounded-full bg-[#000B43] inline-block mr-1'></span>
                            <span data-aos="fade-right"
                            data-aos-duration="1800" 
                            data-aos-delay="500"  
                            className='w-2 h-2 rounded-full bg-[#000B43] inline-block mr-1'></span>
                            <span data-aos="fade-right"
                            data-aos-duration="1800" 
                            data-aos-delay="600"   
                            className='w-2 h-2 rounded-full bg-[#000B43] inline-block mr-1'></span>
                            <span data-aos="fade-right"
                            data-aos-duration="1800" 
                            data-aos-delay="700"   
                            className='w-2 h-2 rounded-full bg-[#000B43] inline-block mr-1'></span>
                        </div>
                        <h3 data-aos="fade-right"
                        data-aos-duration="1800" 
                        data-aos-delay="200"   
                        className="text-base font-extrabold lg:text-lg uppercase text-white">
                            pratic agence
                        </h3>
                    </div>
                    <h1 data-aos="zoom-in-up"
                    data-aos-duration="1800" 
                    data-aos-delay="400"
                    className='font-bold tracking-tight lg:text-5xl text-white uppercase text-3xl lg:leading-[45px] mt-8'>
                        chez pratic agence, nous <br /> transformons chaque idée en une <br /> innovation remarquable.
                    </h1>

                    <hr data-aos="fade-left"
                    data-aos-duration="1600" 
                    data-aos-delay="1800"  
                    className="w-[176px] border-t-1 border-white opacity-75 my-6" />
                    <p data-aos="fade-left"
                    data-aos-duration="1800" 
                    data-aos-delay="500" 
                    className="mt-4 max-w-3xl lg:text-xl/none my-6 text-base/none text-white font-bold">
                        Faites le choix de Pratic Agence pour des stratégies de communication complètes et sur mesure pour renforcer 
                        votre présence et atteindre vos ambitions.
                    </p>
                    <hr data-aos="fade-left"
                    data-aos-duration="1800" 
                    data-aos-delay="1200"  
                    className="w-[176px] border-t-1 border-white opacity-75 my-6" />

                    <div className="mt-12 flex flex-wrap lg:gap-8 gap-4 text-center">
                        <Link data-aos="fade-up-right"
                        data-aos-duration="2000" 
                        to={'/'} 
                        className="bg-white lg:text-xl text-base font-bold text-[#000B43] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 uppercase text-center sm:block rounded-2xl lg:px-12 px-5 py-5 focus:outline-none focus:ring sm:w-auto "
                        >
                            nos offres
                        </Link>

                        <Link data-aos="fade-up-left"
                        data-aos-duration="2000"
                        to={'/about'}
                        className="bg-white lg:text-xl text-base font-bold text-[#000B43] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 uppercase text-center sm:block rounded-2xl lg:px-12 px-5 py-5 focus:outline-none focus:ring sm:w-auto"
                        >
                            qui sommes nous?
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HomeBanner