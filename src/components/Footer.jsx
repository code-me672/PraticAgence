import React from 'react'

import logo from '../Assets/LOGO1.png'
import Facebook from '../Assets/facebook.png'
import Linkedin from '../Assets/linkedin.png'
import Instagram from '../Assets/social.png'
import Youtube from '../Assets/youtube.png'
import TikTok from '../Assets/tik-tok.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className='lg:flex lg:justify-around items-center  bg-[#000B43] h-full p-5'> 
            <div className='sm:flex justify-center my-5'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-20 text-white">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg>
                </span>
                <h4 className='text-white md:text-xl text-lg uppercase leading-9 font-bold'>
                    un besoin? une demande
                    <Link to={'/contact-us'}>
                        <p className='capitalize'>contactez-nous !</p>
                    </Link>
                </h4>
            </div>
            <div className='sm:flex justify-center my-5'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-20 text-white">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                </span>
                <h4 className='text-white md:text-xl text-lg uppercase leading-9 font-bold'>
                    demander un devis
                    <p className='capitalize'>remplir le formulaire</p>
                </h4>
            </div>
            <div className="sm:flex justify-center my-5">
                <div>
                    <input type="text" placeholder='Email' className='sm:p-[18px] p-[10px] rounded-lg bg-[#D9D9D9] opacity-35 text-white font-medium placeholder:text-white sm:text-xl text-lg border-b-4 w-full' />
                </div>
                <div>
                    <button className='text-white sm:p-5 p-3 bg-gradient-to-br from-[#B495F6] to-[#2E75D4] opacity-100 rounded-lg sm:-ml-2 sm:text-lg text-base uppercase font-extrabold'>
                        s'abonner
                    </button>
                </div>
            </div>
        </div>

        {/* footer */}
        <footer className="bg-gradient-to-br from-[#000B43] to-[#2E75D4] opacity-100">
            <div className="mx-auto max-w-screen-2xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div className="flex sm:justify-center justify-start">
                                <img src={logo} alt="" className='h-[242px]'/>
                            </div>

                            <p className="mt-6 sm:mx-auto max-w-md leading-none font-semibold text-white sm:max-w-md sm:text-center text-left ">
                                Votre partenaire de confiance pour une communication intégrée qui stimule la réussite et l'innovation.
                            </p>

                            <ul className="mt-8 mx-auto flex sm:justify-center gap-2 justify-start md:gap-3">
                                <li>
                                    <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-teal-700 transition hover:text-teal-700/75"
                                    >
                                        <img src={Facebook} alt="" className='h-[52px] hover:cursor-pointer hover:scale-125 duration-300 transition ease-in'/>
                                    </a>
                                </li>

                                <li>
                                    <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-teal-700 transition hover:text-teal-700/75"
                                    >
                                        <img src={Linkedin} alt="" className='h-[52px] hover:cursor-pointer hover:scale-125 duration-300 transition ease-in'/>
                                    </a>
                                </li>

                                <li>
                                    <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-teal-700 transition hover:text-teal-700/75"
                                    >
                                        <img src={Instagram} alt="" className='h-[52px] hover:cursor-pointer hover:scale-125 duration-300 transition ease-in'/>
                                    </a>
                                </li>

                                <li>
                                    <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-teal-700 transition hover:text-teal-700/75"
                                    >
                                        <img src={TikTok} alt="" className='h-[52px] hover:cursor-pointer hover:scale-125 duration-300 transition ease-in'/>
                                    </a>
                                </li>

                                <li>
                                    <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-teal-700 transition hover:text-teal-700/75"
                                    >
                                        <img src={Youtube} alt="" className='h-[52px] hover:cursor-pointer hover:scale-125 duration-300 transition ease-in'/>
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:col-span-2"> 
                            <div></div>
                            <div></div>
                            <div className="sm:text-center lg:text-left text-left justify-center ">
                                <p className="text-lg font-bold uppercase text-white">playground</p>

                                <ul className="mt-8 space-y-4 text-sm capitalize">
                                    <li>
                                        <Link to={'/services/evenementiel'} className="text-[#878688] font-medium transition hover:text-gray-700/75" href="#">
                                            évenementiel
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={'/services/formation-coaching'} className="text-[#878688] font-medium transition hover:text-gray-700/75" href="#">
                                            formation & coaching
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={'/services/production-audiovisuelle'} className="text-[#878688] font-medium transition hover:text-gray-700/75" href="#">
                                            production audiovisuelle
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={'/services/conseil-en-communication'} className="text-[#878688] font-medium transition hover:text-gray-700/75" href="#"> 
                                            conseil en communication 
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="sm:text-center text-left lg:text-left justify-center">
                                <p className="text-lg font-bold uppercase text-white">liens utiles</p>

                                <ul className="mt-8 space-y-4 text-sm capitalize">
                                    <li>
                                    <Link to={'/'} className="text-[#878688] font-medium transition hover:text-gray-700/75" href="#">
                                        accueil
                                    </Link>
                                    </li>

                                    <li>
                                        <Link to={'/about'} className="text-[#878688] font-medium transition hover:text-gray-700/75" href="#"> 
                                            à propos de PRATIC AGENCE 
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={'/contact-us'} className="text-[#878688] font-medium transition hover:text-gray-700/75" href="#"> 
                                            nous contacter 
                                        </Link>
                                    </li>

                                </ul>
                            </div>

                    </div>
                </div>

                <div className="mt-12 border-t border-gray-100 pt-6">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="text-lg text-white">
                            <span className="block sm:inline capitalize font-extralight">developed by</span> <span className='uppercase font-extrabold'>cognis group</span>
                        </p>

                        <p className="mt-4 text-lg text-white sm:order-first sm:mt-0">
                            &copy; <span className='uppercase font-extrabold'>pratic agence 2024</span> <span className='capitalize font-extralight'>| all right reserved</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer