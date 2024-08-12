import React from 'react'
import {Link} from 'react-router-dom'

const Expertise = () => {
  return (
    <div className=''>
        <div className='text-center'>
            <h2 data-aos="fade-down"
            data-aos-duration="1800" 
            className='uppercase text-[#878688] text-[32px] font-bold my-10'>
                nos expertises
                <span data-aos="zoom-in-up"
                data-aos-duration="1800"
                data-aos-delay="200"  
                className="block w-[176px] h-0.5 bg-[#878688] mt-1 mx-auto"></span>
            </h2>
        </div>

        {/* section conseil en communication */}
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div data-aos="fade-right"
                    data-aos_duration="3000" 
                    className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#B495F6] to-[#000B43] opacity-80"></div>
                        </div>
                    </div>

                    <div data-aos="fade-left"
                    data-aos_duration="3000" 
                    className="relative flex items-center bg-gray-100">
                        <span
                        className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <div className='flex'>
                                <div>
                                    <span data-aos="fade-left"
                                    data-aos-duration="1800" 
                                    data-aos-delay="500" 
                                    className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                    <span data-aos="fade-left"
                                    data-aos-duration="1800" 
                                    data-aos-delay="400"  
                                    className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                    <span data-aos="fade-left"
                                    data-aos-duration="1800" 
                                    data-aos-delay="300"  
                                    className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                </div>
                                <h5 data-aos="fade-left"
                                data-aos-duration="1800" 
                                data-aos-delay="600"  
                                className='text-[#878688] font-semibold'>Créer - Innover - Réaliser</h5>
                            </div>
                            <h2 data-aos="fade-down"
                            data-aos-duration="1800" 
                            data-aos-delay="400"  
                            className="text-2xl uppercase text-[#000B43] font-bold sm:text-3xl">
                                Conseil en <br />Communication
                            </h2>

                            <p data-aos="fade-left"
                            data-aos-duration="1800" 
                            data-aos-delay="300" 
                            className="mt-4 text-[#878688] font-semibold">
                                <span className="block w-[176px] h-[1px] bg-[#878688] my-5"></span>
                                Pratic Agence vous propose un conseil en communication complet, incluant Communication, 
                                Marketing, Branding, Publicité, Médias, Digital, Conception graphique, et Relations presse 
                                et publiques, assurant une stratégie cohérente et efficace pour votre marque
                                <span className="block w-[176px] h-[1px] bg-[#878688] my-5"></span>
                            </p>

                            <Link data-aos="fade-up"
                            data-aos-duration="1800" 
                            data-aos-delay="300"
                                to={'/services/conseil-en-communication'}
                                className="mt-8 uppercase inline-block bg-gradient-to-r from-[#000B43] to-[#2E75D4] opacity-100 px-12 py-5 text-sm font-bold text-white focus:outline-none focus:ring active:text-indigo-500"
                            >
                                en savoir plus
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* section production visuelle */}
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div data-aos="fade-up-right"
                    data-aos_duration="3000" 
                    className="relative flex items-center bg-gray-100">
                        <span
                        className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <div className='flex'>
                                <div>
                                    <span data-aos="fade-right"
                                    data-aos-duration="1800" 
                                    data-aos-delay="300"
                                    className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                    <span data-aos="fade-right"
                                    data-aos-duration="1800" 
                                    data-aos-delay="400"
                                    className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                    <span data-aos="fade-right"
                                    data-aos-duration="1800" 
                                    data-aos-delay="500"
                                    className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                </div>
                                <h5 data-aos="fade-right"
                                data-aos-duration="1800" 
                                data-aos-delay="600"  
                                className='text-[#878688] font-semibold'>Créer - Innover - Réaliser</h5>
                            </div>
                            <h2 data-aos="fade-down"
                            data-aos-duration="1800" 
                            data-aos-delay="400" 
                            className="text-2xl uppercase text-[#000B43] font-bold sm:text-3xl">
                                production <br /> audiovisuelle
                            </h2>

                            <p data-aos="fade-right"
                            data-aos-duration="1800" 
                            data-aos-delay="300" 
                            className="mt-4 text-[#878688] font-semibold">
                                <span className="block w-[176px] h-[1px] bg-[#878688] my-5"></span>
                                Avec Pratic Agence, bénéficiez d'une production de contenu multimédia qui englobe émissions TV, 
                                radio, films, ainsi que capsules vidéos et contenus digitaux, afin de vous fournir des solutions 
                                médiatiques percutantes et adaptées à votre audience
                                <span className="block w-[176px] h-[1px] bg-[#878688] my-5"></span>
                            </p>

                            <Link data-aos="fade-up"
                            data-aos-duration="1800" 
                            data-aos-delay="300"
                                to={'/services/production-audiovisuelle'}
                                className="mt-8 uppercase inline-block bg-gradient-to-r from-[#000B43] to-[#2E75D4] opacity-100 px-12 py-5 text-sm font-bold text-white focus:outline-none focus:ring active:text-indigo-500"
                            >
                                en savoir plus
                            </Link>
                        </div>
                    </div>

                    <div data-aos="fade-down-left"
                    data-aos_duration="3000" 
                    className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="relative inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#B495F6] to-[#000B43] opacity-80"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* section évènementiel */}
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div data-aos="fade-right"
                    data-aos_duration="3000"  
                    className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#B495F6] to-[#000B43] opacity-80"></div>
                        </div>
                    </div>

                    <div data-aos="fade-left"
                    data-aos_duration="3000" 
                    className="relative flex items-center bg-gray-100">
                        <span
                        className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <div className='flex'>
                                <div>
                                    <span data-aos="fade-left"
                                    data-aos-duration="1800" 
                                    data-aos-delay="500" 
                                    className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                    <span data-aos="fade-left"
                                    data-aos-duration="1800" 
                                    data-aos-delay="400" 
                                    className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                    <span data-aos="fade-left"
                                    data-aos-duration="1800" 
                                    data-aos-delay="300" 
                                    className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                </div>
                                <h5 data-aos="fade-left"
                                data-aos-duration="1800" 
                                data-aos-delay="600" 
                                className='text-[#878688] font-semibold'>Créer - Innover - Réaliser</h5>
                            </div>
                            <h2 data-aos="fade-down"
                            data-aos-duration="1800" 
                            data-aos-delay="400" 
                            className="text-2xl uppercase text-[#000B43] font-bold sm:text-3xl">
                                évènementiel
                            </h2>

                            <p data-aos="fade-left"
                            data-aos-duration="1800" 
                            data-aos-delay="300" 
                            className="mt-4 text-[#878688] font-semibold">
                                <span className="block w-[176px] h-[1px] bg-[#878688] my-5"></span>
                                Chez Pratic Agence, nous orchestrons des événements impeccables en concevant, planifiant, organisant 
                                et promouvant des conférences, concerts, foires commerciales, festivals, remises de prix et dîners 
                                de gala, afin de créer des expériences inoubliables pour vous et vos invités.
                                <span className="block w-[176px] h-[1px] bg-[#878688] my-5"></span>
                            </p>

                            <Link data-aos="fade-up"
                            data-aos-duration="1800" 
                            data-aos-delay="300"
                                to={'/services/evenementiel'}
                                className="mt-8 uppercase inline-block bg-gradient-to-r from-[#000B43] to-[#2E75D4] opacity-100 px-12 py-5 text-sm font-bold text-white focus:outline-none focus:ring active:text-indigo-500"
                            >
                                en savoir plus
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* section formation et coaching */}
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div data-aos="fade-up-right"
                    data-aos_duration="3000"  
                    className="relative flex items-center bg-gray-100">
                        <span
                        className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <div className='flex'>
                                <div>
                                    <span data-aos="fade-right"
                                    data-aos-duration="1800" 
                                    data-aos-delay="300" 
                                    className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                    <span data-aos="fade-right"
                                    data-aos-duration="1800" 
                                    data-aos-delay="400" 
                                    className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                    <span data-aos="fade-right"
                                    data-aos-duration="1800" 
                                    data-aos-delay="500" 
                                    className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                </div>
                                <h5 data-aos="fade-right"
                                data-aos-duration="1800" 
                                data-aos-delay="600"  
                                className='text-[#878688] font-semibold'>Créer - Innover - Réaliser</h5>
                            </div>
                            <h2 data-aos="fade-down"
                            data-aos-duration="1800" 
                            data-aos-delay="400"  
                            className="text-2xl uppercase text-[#000B43] font-bold sm:text-3xl">
                            Formation <br />et Coaching
                            </h2>

                            <p data-aos="fade-right"
                            data-aos-duration="1800" 
                            data-aos-delay="300"  
                            className="mt-4 text-[#878688] font-semibold">
                                <span className="block w-[176px] h-[1px] bg-[#878688] my-5"></span>
                                Pratic Agence vous accompagne pour exceller en art oratoire, renforcer votre branding, 
                                et maîtriser le média training, afin d'optimiser votre communication et d'assurer une 
                                présence médiatique convaincante et professionnelle.
                                <span className="block w-[176px] h-[1px] bg-[#878688] my-5"></span>
                            </p>

                            <Link data-aos="fade-up"
                            data-aos-duration="1800" 
                            data-aos-delay="300"
                                to={'/services/formation-coahcing'}
                                className="mt-8 uppercase inline-block bg-gradient-to-r from-[#000B43] to-[#2E75D4] opacity-100 px-12 py-5 text-sm font-bold text-white focus:outline-none focus:ring active:text-indigo-500"
                            >
                                en savoir plus
                            </Link>
                        </div>
                    </div>

                    <div data-aos="fade-down-left"
                    data-aos_duration="3000"  
                    className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="relative inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#B495F6] to-[#000B43] opacity-80"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        
        {/* section proposition de valeur */}
        <section className='bg-gradient-to-br from-[#000B43] to-[#0044A0] opacity-100'>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div data-aos="fade-right"
                    data-aos_duration="3000" 
                    className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#B495F6] to-[#000B43] opacity-80"></div>
                        </div>
                    </div>

                    <div className="relative flex items-center">
                        <span
                        className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <div className='flex'>
                                <div>
                                    <span data-aos="fade-left"
                                    data-aos-duration="1800" 
                                    data-aos-delay="500" 
                                    className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                    <span data-aos="fade-left"
                                    data-aos-duration="1800" 
                                    data-aos-delay="400" 
                                    className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                    <span data-aos="fade-left"
                                    data-aos-duration="1800" 
                                    data-aos-delay="300" 
                                    className='w-2 h-2 rounded-full bg-[#0044A0] inline-block mr-1'></span>
                                </div>
                                <h5 data-aos="fade-left"
                                data-aos-duration="1800"
                                className='text-white font-bold uppercase '>notre proposition de valeur</h5>
                            </div>
                            <h2 data-aos="fade-down"
                            data-aos-duration="1800" 
                            data-aos-delay="600" 
                            className="text-2xl uppercase text-white font-bold sm:text-3xl">
                                pourquoi travailler avec nous ?
                            </h2>

                            <span data-aos="fade-left"
                            data-aos-duration="1800" 
                            data-aos-delay="700" 
                            className="block w-[176px] h-[1px] bg-[#CBCBCB] my-5"></span>
                            <p data-aos="fade-left"
                            data-aos-duration="1800" 
                            data-aos-delay="300" 
                            className="mt-4 text-white font-semibold ml-8">
                                La force de notre agence réside dans sa capacité à élaborer des solutions de communication 
                                innovantes et adaptées, en combinant une expertise approfondie avec une stratégie d'exécution 
                                précise pour maximiser l'impact et atteindre les objectifs de nos clients.
                            </p>
                            <span data-aos="fade-left"
                            data-aos-duration="1800" 
                            data-aos-delay="500" 
                            className="block w-[176px] h-[1px] bg-[#CBCBCB] my-5"></span>

                            {/* expertise */}
                            <h2 data-aos="fade-left"
                            data-aos-duration="1800" 
                            data-aos-delay="300" 
                            className="text-lg uppercase text-white font-bold sm:text-xl">
                                expertise complète et personalisée
                            </h2>
                            <p data-aos="fade-left"
                            data-aos-duration="1800" 
                            data-aos-delay="700"
                            className="mt-2 mb-7 text-[#0044A0] font-semibold bg-white rounded-[15px] p-2 leading-none">
                                L'expertise couvre tous les aspects de la communication, de la stratégie à la production et à 
                                la promotion. Une équipe multidisciplinaire conçoit des solutions sur mesure adaptées aux besoins 
                                spécifiques de chaque client pour assurer des résultats optimaux
                            </p>

                            {/* solution */}
                            <h2 data-aos="fade-left"
                            data-aos-duration="1800" 
                            data-aos-delay="300" 
                            className="text-lg uppercase text-white font-bold sm:text-xl">
                                solutions innovantes et intégrées
                            </h2>
                            <p data-aos="fade-left"
                            data-aos-duration="1800" 
                            data-aos-delay="500" 
                            className="mt-2 text-[#0044A0] font-semibold bg-white rounded-[15px] p-2 leading-none">
                                Elle allie créativité et technologies avancées pour développer des stratégies de communication innovantes 
                                et intégrées, maximisant ainsi la visibilité et captivant l’attention de l'audience sur tous les canaux
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Expertise