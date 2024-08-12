import React from 'react';
import Marquee from 'react-fast-marquee'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


// Import logo 1
import logo1  from '../Assets/Medias/ENTREPRISES/BACI-Logo.png'
import logo2  from '../Assets/Medias/ENTREPRISES/hawkeye.jpg'
import logo3  from '../Assets/Medias/ENTREPRISES/LOGO SADA CI.jpg'
import logo4  from '../Assets/Medias/ENTREPRISES/Logo_CFAO.svg.png'
import logo5  from '../Assets/Medias/ENTREPRISES/Logosib.png'
import logo6  from '../Assets/Medias/ENTREPRISES/Yango_(entreprise).png'
import logo7  from '../Assets/Medias/LOGO PI/n.jpg'
import logo8  from '../Assets/Medias/LOGO PI/nn.png'
import logo9  from '../Assets/Medias/LOGO PI/no.jpg'
import logo10 from '../Assets/Medias/MEDIAS/AFRICA_logo_VF_(1)_(1).png'
import logo11 from '../Assets/Medias/MEDIAS/ci-radio-frequence-2.jpg'
import logo13 from '../Assets/Medias/MEDIAS/Hit-Radio.jpg'
import logo14 from '../Assets/Medias/MEDIAS/hq720.jpg'
import logo15 from '../Assets/Medias/MEDIAS/images (5).png'
import logo16 from '../Assets/Medias/MEDIAS/liferadia.png'
import logo18 from '../Assets/Medias/MEDIAS/Logo-radio_ci.png'
import logo19 from '../Assets/Medias/MEDIAS/Logo_bf1.png'
import logo20 from '../Assets/Medias/MEDIAS/Logo_Life_TV.jpg'
import logo21 from '../Assets/Medias/MEDIAS/RFI_logo_2013.svg.png'
import logo22 from '../Assets/Medias/MEDIAS/rti.jpg'
import logo23 from '../Assets/Medias/MEDIAS/unnamed (2).jpg'
import logo24 from '../Assets/Medias/MEDIAS/abidjan-net.jpg'

// Import logo 2
import Logo1 from '../Assets/Medias/Logos-Entreprise/0.png'
import Logo2 from '../Assets/Medias/Logos-Entreprise/00.jpg'
import Logo3 from '../Assets/Medias/Logos-Entreprise/AIVOIRE.jpg'
import Logo4 from '../Assets/Medias/Logos-Entreprise/cropped-Logo_3X_nu-1.png'
import Logo5 from '../Assets/Medias/Logos-Entreprise/Dinor.png'
import Logo6 from '../Assets/Medias/Logos-Entreprise/jenesse.png'
import Logo7 from '../Assets/Medias/Logos-Entreprise/LOGO cnlcvc.png'
import Logo8 from '../Assets/Medias/Logos-Entreprise/logo commerce.jpg'
import Logo9 from '../Assets/Medias/Logos-Entreprise/logo transport.jpg'
import Logo10 from '../Assets/Medias/Logos-Entreprise/LOGO-CNDH-bon.png'
import Logo11 from '../Assets/Medias/Logos-Entreprise/logo-signature.png'
import Logo12 from '../Assets/Medias/Logos-Entreprise/LOGO.jpg'
import Logo14 from '../Assets/Medias/Logos-Entreprise/Logo_RTI_1.svg.png'
import Logo15 from '../Assets/Medias/Logos-Entreprise/Logo_TotalEnergies.svg.png'
import Logo16 from '../Assets/Medias/Logos-Entreprise/MARAHOUE.png'
import Logo17 from '../Assets/Medias/Logos-Entreprise/MASA.png'
import Logo18 from '../Assets/Medias/Logos-Entreprise/MTN.png'
import Logo19 from '../Assets/Medias/Logos-Entreprise/Nci-logo-1.jpg'
import Logo20 from '../Assets/Medias/Logos-Entreprise/ONFEJES.png'
import Logo21 from '../Assets/Medias/Logos-Entreprise/PNLTA.png'
import Logo22 from '../Assets/Medias/Logos-Entreprise/REPUBLIQUE.png'
import Logo23 from '../Assets/Medias/Logos-Entreprise/S.png'
import Logo24 from '../Assets/Medias/Logos-Entreprise/social-sharing-image-belle-nubian.webp'
import Logo25 from '../Assets/Medias/Logos-Entreprise/tourisme_ci_logo.png'
import Logo26 from '../Assets/Medias/Logos-Entreprise/unnamed.jpg'
import Logo27 from '../Assets/Medias/Logos-Entreprise/yalam.jpg'


// Import Image
import municipale from '../Assets/Medias/municipale2023.jpg'
import conference from '../Assets/Medias/conference.jpg'
import capsule from '../Assets/Medias/VENOM2.jpg'
import testimonials from '../Assets/testimonials.jpg'

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, 
    logo11, logo13, logo14, logo15, logo16, logo18, logo19, logo20, 
    logo21, logo22, logo23, logo24]

const Logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10, 
        Logo11, Logo12, Logo14, Logo15, Logo16, Logo17, Logo18, Logo19, Logo20, 
        Logo21, Logo22, Logo23, Logo24, Logo25, Logo26, Logo27]

          
const Stories = () => {

  return (
    <div className="">
        {/* ils nous font confiance */}
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-full px-6 lg:px-8">
                <div className='text-center mb-20'>
                    <h2 data-aos="fade-down"
                    data-aos-duration="1800" 
                    className='uppercase text-[#878688] text-[32px] font-bold'>
                        ils nous font confiance
                        <span data-aos="zoom-in-up"
                        data-aos-duration="1800"
                        data-aos-delay="200"  
                        className="block w-[176px] h-0.5 bg-[#878688] mt-1 mx-auto"></span>
                    </h2>
                </div>
                <Marquee className="mt-10 flex w-screen items-center">
                    {logos.map((logo, index) => (
                    <img key={index} src={logo} alt={`Logo ${index}`} 
                    width={158}
                    height={48}
                    className="max-h-20 w-full px-5" />
                    ))}
                </Marquee>
                <Marquee autoFill pauseOnClick direction='right' className="mt-10 flex w-screen items-center">
                    {Logos.map((Logo, index) => (
                    <img key={index} src={Logo} alt={`Logo ${index}`} 
                    width={158}
                    height={48}
                    className="max-h-20 w-full px-5" />
                    ))}
                </Marquee>
            </div>
        </div>

        {/* success stories */}
        <section class="bg-white items-center justify-center flex">
            <div class="container py-10">
                <h1 data-aos="fade-right"
                data-aos-duration="1500" 
                className='uppercase font-bold text-[#000B43] text-3xl mb-5'>Découvrez nos success stories</h1>
                <hr data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="300" 
                class="my-3 border-gray-200 dark:border-gray-700 w-[176px]" />
                <div class="flex items-center justify-between">
                    <h1 data-aos="fade-right"
                    data-aos-duration="1500"
                    class="text-xl font-medium text-[#878688] lg:text-xl leading-none ml-7">
                        Découvrez comment nous avons transformé les objectifs de nos <br /> clients en succès concrets et durables. 
                    </h1>

                    <div data-aos="fade-left"
                    data-aos-duration="1500" 
                    className='bg-gradient-to-br from-[#000B43] to-[#2E75D4] opacity-100 py-4 px-6'>
                        <span className='text-white uppercase font-bold'>nos autres références</span>
                    </div>
                </div>

                <hr data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="300" 
                class="my-3 border-gray-200 dark:border-gray-700 w-[176px]" />

                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 mt-14">
                    {/* card 1 */}
                    <div data-aos="fade-right"
                    data-aos-duration="1500"
                    className='bg-gradient-to-br from-[#000B43] to-[#2E75D4]'>
                        <img class="object-cover object-center w-full h-64 lg:h-80" src={municipale} alt="" />

                        <div class="m-5">
                            <h1 class="mt-4 text-xl font-bold text-gray-800 dark:text-white leading-none uppercase">
                                Municipales 2023 à Yamoussoukro :
                                Conception et réalisation des supports de communication du Ministre
                                Souleymane DIARRASSOUBA (Films, Capsules Vidéos, Spots TV et Magazine)
                            </h1>

                            <p class="mt-2 text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                recusandae nulla veritatis id tempore sapiente
                            </p>

                            <div class="flex items-center justify-between mt-4">
                                <div>
                                    <a href="#" class="text-lg uppercase font-medium text-white ml-7 hover:underline hover:text-gray-500">
                                        en savoir plus
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    {/* card 2 */}
                    <div data-aos="zoom-in-up"
                    data-aos-duration="1500" 
                    className='bg-gradient-to-br from-[#000B43] to-[#2E75D4] opacity-100'>
                        <img class="object-cover object-center w-full h-64 lg:h-80" src={conference} alt="" />

                        <div class="m-5">
                            <h1 class="mt-4 text-xl font-bold text-gray-800 dark:text-white leading-none uppercase">
                                Organisation de la conférence de presse de
                                présentation du livre « Banaliser LE SUCCES
                            </h1>

                            <p class="mt-2 text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                recusandae nulla veritatis id tempore sapiente
                            </p>

                            <div class="flex items-center justify-between mt-20">
                                <div>
                                    <a href="#" class="text-lg uppercase font-medium text-white ml-7 hover:underline hover:text-gray-500">
                                        en savoir plus
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* card 3 */}
                    <div data-aos="fade-left"
                    data-aos-duration="1500" 
                    className='bg-gradient-to-br from-[#000B43] to-[#2E75D4]'>
                        <img class="object-cover object-center w-full h-64 lg:h-80" src={capsule} alt="" />

                        <div class="m-5">
                            <h1 class="mt-4 text-xl font-bold text-gray-800 dark:text-white leading-none uppercase">
                                Réalisation de plusieurs capsules vidéos pour le CNVLC (Conseil
                                National de Lutte Contre la Vie Chère) avec plusieurs célébrités
                            </h1>

                            <p class="mt-2 text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                                recusandae nulla veritatis id tempore sapiente
                            </p>

                            <div class="flex items-center justify-between mt-16">
                                <div>
                                    <a href="#" class="text-lg uppercase font-medium text-white ml-7 hover:underline hover:text-gray-500">
                                        en savoir plus
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* testimonials */}
        <div className='relative'>
            <img src={testimonials} alt="" className='h-[410px] w-full object-cover' />
            <div className="absolute inset-0 bg-gradient-to-r from-[#B495F6] to-[#000B43] opacity-80"></div>
        </div>
        {/* section testimonies */}
        <section className="bg-white">
            <div className="mx-auto max-w-screen-xl h-full px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="-mt-44 relative gap-4 md:gap-8">
                    <Swiper slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    }}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper">
                        <SwiperSlide className="rounded-lg bg-[#000B43] p-6 shadow-sm sm:p-8">
                            <p className="mt-4 text-[#878688]">
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
                                consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
                                error officiis atque voluptates magnam!"
                            </p>
                            <div className="flex items-center gap-4 text-white">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                    className="size-14 rounded-full object-cover"
                                />

                                <div>
                                    <div className="flex justify-start capitalize gap-0.5">
                                        John Doe
                                    </div>

                                    <p className="mt-0.5 text-lg font-semibold capitalize">directeur commercial</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="rounded-lg bg-[#000B43] p-6 shadow-sm sm:p-8">
                            <p className="mt-4 text-[#878688]">
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
                                consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
                                error officiis atque voluptates magnam!"
                            </p>
                            <div className="flex items-center gap-4 text-white">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                    className="size-14 rounded-full object-cover"
                                />

                                <div>
                                    <div className="flex justify-start capitalize gap-0.5">
                                        John Doe
                                    </div>

                                    <p className="mt-0.5 text-lg font-semibold capitalize">directeur commercial</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="rounded-lg bg-[#000B43] p-6 shadow-sm sm:p-8">
                            <p className="mt-4 text-[#878688]">
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
                                consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
                                error officiis atque voluptates magnam!"
                            </p>
                            <div className="flex items-center gap-4 text-white">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                    className="size-14 rounded-full object-cover"
                                />

                                <div>
                                    <div className="flex justify-start capitalize gap-0.5">
                                        John Doe
                                    </div>

                                    <p className="mt-0.5 text-lg font-semibold capitalize">directeur commercial</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="rounded-lg bg-[#000B43] p-6 shadow-sm sm:p-8">
                            <p className="mt-4 text-[#878688]">
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
                                consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
                                error officiis atque voluptates magnam!"
                            </p>
                            <div className="flex items-center gap-4 text-white">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                    className="size-14 rounded-full object-cover"
                                />

                                <div>
                                    <div className="flex justify-start capitalize gap-0.5">
                                        John Doe
                                    </div>

                                    <p className="mt-0.5 text-lg font-semibold capitalize">directeur commercial</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Stories