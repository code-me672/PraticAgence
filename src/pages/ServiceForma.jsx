import React from 'react'

// import icons
import { MdLibraryAddCheck } from "react-icons/md";

// import components
import Header from '../components/Header'
import Devis from '../components/Devis'
import Footer from '../components/Footer';

// import images
import formation from '../Assets/Medias/formation.jpg'

const ServiceForma = () => {
  return (
    <div>
        <Header />
        <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat h-[401px] lg:mt-32 mt-36">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B495F6] to-[#000B43] opacity-70"></div>

            <div data-aos='fade-down'
            data-aos-duration='1600'
            className="relative mx-auto px-4 pt-14 pb-20 sm:h-full sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8 text-white">
                <div className="max-w-xl ml-10">
                    <p className='capitalize'>accueil</p>
                    <h1 className="text-3xl font-extrabold sm:text-4xl uppercase">
                        formation & coaching
                    </h1>

                    <hr data-aos='fade-right'
                    data-aos-duration='1800'
                    data-aos-delay='200'
                    class="my-3 border-[#D9D9D9] w-[176px]" />
                    <p className="mt-4 ml-7 max-w-lg sm:text-lg/none">
                        Plus que de simples formations, notre programme de formation et de coaching aligne vos 
                        compétences et votre branding avec les tendances actuelles, pour une communication efficace 
                        et une présence affirmée dans tous vos engagements
                    </p>
                    <hr data-aos='fade-right'
                    data-aos-duration='1800'
                    data-aos-delay='200'
                    class="my-3 border-[#D9D9D9] w-[176px]" />

                </div>
            </div>
        </section>

        {/* main page */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 my-20">
            <div data-aos='fade-down'
            data-aos-duration='1500'
            className="lg:ml-10 mx-5 lg:col-span-2">
                <div className='flex'>
                    <div>
                        <span data-aos="fade-right"
                        data-aos-duration="1500" 
                        data-aos-delay="300" 
                        className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1'></span>
                        <span data-aos="fade-right"
                        data-aos-duration="1500" 
                        data-aos-delay="400" 
                        className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1'></span>
                        <span data-aos="fade-right"
                        data-aos-duration="1500" 
                        data-aos-delay="500" 
                        className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1'></span>
                        <span data-aos="fade-right"
                        data-aos-duration="1500" 
                        data-aos-delay="600" 
                        className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1'></span>
                        <span data-aos="fade-right"
                        data-aos-duration="1500" 
                        data-aos-delay="700" 
                        className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1'></span>
                    </div>
                    <h4 data-aos="fade-right"
                    data-aos-duration="1500" 
                    className='uppercase text-[#878688] font-medium text-sm mt-1'>formation & coaching</h4>
                </div>
                <h2 className='uppercase text-3xl mt-5 text-[#000B43] font-extrabold mb-2'>notre offre en formation et coaching</h2>
                <div className='relative'>
                    <img src={formation} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B495F6] to-[#000B43] opacity-80"></div>
                </div>

                {/* section description */}
                <div className='mt-7'>
                    <div>
                        <h3 className='uppercase font-bold text-[#000B43] text-2xl'>de quoi s'agit-il ?</h3>
                        <hr class="my-3 border-[#878688] border-2 w-full" />
                        <p data-aos='fade-right'
                        data-aos-duration='1500' 
                        className='text-[#878688] text-xl leading-none'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum eget purus vel scelerisque. 
                            Mauris porta, justo nec feugiat varius, purus diam congue mi
                        </p>
                    </div>

                    <div className='my-16'>
                        <h3 className='uppercase font-bold text-[#000B43] text-2xl'>quelle est la proposition de valeur?</h3>
                        <p data-aos='fade-right'
                        data-aos-duration='1500' 
                        className='text-[#878688] text-xl leading-none'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum eget purus vel scelerisque. 
                            Mauris porta, justo nec feugiat varius, purus diam congue mi, ac ullamcorper eros orci non odio. Integer 
                            vel pharetra risus. In hac habitasse platea dictumst. Nulla facilisi. Vestibulum gravida consequat diam, 
                            sit amet tristique nulla lobortis sit amet. Donec ut eleifend nulla. Quisque euismod ipsum vel nulla pellentesque varius. 
                            Nunc eu vestibulum lacus.
                        </p>
                    </div>

                    <div className='mt-16'>
                        <h3 className='uppercase font-bold text-[#000B43] text-2xl'>quelle est l'approche de praticagence ?</h3>
                        <p data-aos='fade-right'
                        data-aos-duration='1500' 
                        className='text-[#878688] text-xl leading-none'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum eget purus vel scelerisque. 
                            Mauris porta, justo nec feugiat varius, purus diam congue mi, ac ullamcorper eros orci non odio. Integer 
                            vel pharetra risus. In hac habitasse platea dictumst. Nulla facilisi. Vestibulum gravida consequat diam, 
                            sit amet tristique nulla lobortis sit amet. Donec ut eleifend nulla. Quisque euismod ipsum vel nulla pellentesque varius. 
                            Nunc eu vestibulum lacus. <br /> <br />


                            Proin congue feugiat leo, ut molestie tortor luctus sed. Nam varius, leo a sollicitudin fringilla, sapien sem 
                            fringilla metus, nec pharetra lectus nunc non risus. Ut id maximus orci. Nullam sit amet sapien eget velit condimentum condimentum. 
                            Vestibulum sed lacus diam.
                        </p>
                    </div>
                </div>

                {/* section expertise & question */}
                <div className='mt-32'>
                    <div>
                        <h3 className='uppercase font-bold text-[#000B43] text-2xl'>nos expertises</h3>
                        <hr class="my-3 border-[#878688] border-2 w-full" />
                    </div>
                    {/* expertise */}
                    <div className='sm:flex gap-64'>
                        <div data-aos="fade-right"
                        data-aos-duration="1500">
                            <div className='flex mt-5'>
                                <span className='text-[#0044A0]'>
                                    <MdLibraryAddCheck className='h-9 w-9'/>
                                </span>
                                <p className='text-[#0044A0] font-semibold text-2xl ml-2'>Art oratoire</p>
                            </div>

                            <div className='flex mt-5'>
                                <span className='text-[#0044A0]'>
                                    <MdLibraryAddCheck className='h-9 w-9'/>
                                </span>
                                <p className='text-[#0044A0] font-semibold text-2xl ml-2'>Média Training</p>
                            </div>
                        </div>

                        <div data-aos="fade-right"
                        data-aos-duration="1500"
                        data-aos-delay='300'>
                            <div className='flex mt-5'>
                                <span className='text-[#0044A0]'>
                                    <MdLibraryAddCheck className='h-9 w-9'/>
                                </span>
                                <p className='text-[#0044A0] font-semibold text-2xl ml-2'>Branding</p>
                            </div>
                        </div>
                    </div>

                    {/* question */}
                    <div className='mt-7'>
                        <div>
                            <h3 className='uppercase font-bold text-[#000B43] text-2xl'>vous avez encore des questions ? posez-les</h3>
                            <hr class="my-3 border-[#878688] border-2 w-full" />
                        </div>
                        <div className='py-6 flex'>
                            <input type="text" placeholder='Votre question' className='w-full max-w-96 bg-[#0044A0] bg-opacity-25 py-4 p-5 border-b-4 border-[#000B43] border-opacity-100  text-[#000B43] font-medium placeholder:text-[#000B43] placeholder:text-opacity-50 text-xl' />
                            <button className="uppercase inline-block bg-gradient-to-r from-[#000B43] to-[#2E75D4] opacity-100 py-5 px-20 text-xl font-bold text-white ml-10">
                                envoyer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            

            <div data-aos='fade-down'
            data-aos-duration='1500'
            className="lg:mr-10">
                <Devis />
                <div className='mt-14 border border-[#878688] p-6'>
                    <div className='flex pb-3'>
                        <div>
                            <span className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1'></span>
                            <span className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1'></span>
                            <span className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1'></span>
                            <span className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1'></span>
                            <span className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1'></span>
                        </div>
                        <h4 className='uppercase text-[#878688] font-bold'>besoin d'aide</h4>
                    </div>
                    <h2 className='uppercase text-[#000B43] font-bold xl:text-2xl text-lg'>vous avez une préoccupation ?</h2>
                    <p className='text-[#878688] xl:text-xl text-base'>
                        N’hésitez pas à nous contacter directement et nous laisser un message
                    </p>
                    <p className='text-[#0044A0] lg:text-lg text-base font-bold my-5'>
                        direction@praticagence.com
                    </p>
                    <button className="uppercase inline-block bg-gradient-to-r from-[#000B43] to-[#2E75D4] opacity-100 py-3 px-7 text-lg font-bold text-white">
                        +225 07 14 19 19 14
                    </button>
                </div>
            </div>
        </div>
        <Footer /> 
    </div>
  )
}

export default ServiceForma