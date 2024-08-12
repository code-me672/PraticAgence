import React from 'react'

// import logo
import Facebook from '../Assets/facebook.png'
import Linkedin from '../Assets/linkedin.png'

// import images teams
import NAPON_ENOCK from'../Assets/Medias/PHOTOS PA/NAPON_ENOCK.JPG'
import YAMEGO_BELLA from'../Assets/Medias/PHOTOS PA/YAMEGO_BELLA.JPG'
import OULOTO_STEPHANE from'../Assets/Medias/PHOTOS PA/OULOTO_STEPHANE.jpg'


const Teams = () => {
  return (
    <div>
        <section class="bg-white">
            <div class="h-[25rem] -mt-8">
                <div class="container px-6 py-10 mx-auto grid text-center justify-center">
                    <h1 data-aos='fade-down'
                    data-aos-duration='1600'
                    className="text-2xl font-bold text-center text-[#878688] uppercase lg:text-3xl">notre équipe</h1>
                    <hr data-aos="zoom-in-up"
                    data-aos-duration="1600"
                    data-aos-delay="200"
                    className="w-[176px] border-t-2 border-[#878688] opacity-75 my-4" />
                </div>
            </div>

            <div class="container px-6 pb-14 mx-auto sm:-mt-80 ">
                <div data-aos='zoom-out'
                data-aos-duration='1600' 
                class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    <div class="flex flex-col items-center p-4 border sm:p-4 rounded-xl bg-gradient-to-br from-[#000B43] to-[#2E75D4] opacity-100">
                        <img class="object-cover w-full rounded-xl aspect-square" src={NAPON_ENOCK} alt="" />

                        <div className='text-center'>
                            <h1 class="mt-4 text-xl font-semibold text-white uppercase">Enock Napon</h1>
                            <p class="mt-2 text-xl font-bold text-white uppercase">Concepteur Visuel</p>
                            

                            <div class="flex justify-center mt-3 -mx-2">
                                <a href="#" className="mx-2  transition-colors duration-300" aria-label="Reddit">
                                    <img src={Facebook} alt="" className='h-[40px] w-[40px]' />
                                </a>

                                <a href="#" className="mx-2 transition-colors duration-300" aria-label="Facebook">
                                    <img src={Linkedin} alt="" className='h-[40px] w-[40px]' />
                                </a>

                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col items-center p-4 border sm:p-4 rounded-xl bg-gradient-to-br from-[#000B43] to-[#2E75D4] opacity-100">
                        <img class="object-cover w-full rounded-xl aspect-square" src={YAMEGO_BELLA} alt="" />

                        <div className='text-center'>
                            <h1 class="mt-4 text-xl font-semibold text-white uppercase">Bella Yamego</h1>
                            <p class="mt-2 text-xl font-bold text-white uppercase">Assistante Communication</p>
                            

                            <div class="flex justify-center mt-3 -mx-2">
                                <a href="#" className="mx-2  transition-colors duration-300" aria-label="Reddit">
                                    <img src={Facebook} alt="" className='h-[40px] w-[40px]' />
                                </a>

                                <a href="#" className="mx-2 transition-colors duration-300" aria-label="Facebook">
                                    <img src={Linkedin} alt="" className='h-[40px] w-[40px]' />
                                </a>

                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col items-center p-4 border sm:p-4 rounded-xl bg-gradient-to-br from-[#000B43] to-[#2E75D4] opacity-100">
                        <img class="object-cover w-full rounded-xl aspect-square" src={OULOTO_STEPHANE} alt="" />

                        <div className='text-center'>
                            <h1 class="mt-4 text-xl font-semibold text-white uppercase">Stéphane Ouloto</h1>
                            <p class="mt-2 text-xl font-bold text-white uppercase">vidéastre photographe </p>
                            

                            <div class="flex justify-center mt-3 -mx-2">
                                <a href="#" className="mx-2  transition-colors duration-300" aria-label="Reddit">
                                    <img src={Facebook} alt="" className='h-[40px] w-[40px]' />
                                </a>

                                <a href="#" className="mx-2 transition-colors duration-300" aria-label="Facebook">
                                    <img src={Linkedin} alt="" className='h-[40px] w-[40px]' />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Teams