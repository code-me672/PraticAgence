import React from 'react'

const Banner = () => {
  return (
    <div>
        <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat h-[401px] mb-4 lg:mt-32 mt-36">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B495F6] to-[#000B43] opacity-70"></div>

            <div data-aos='fade-down'
            data-aos-duration='1600' 
            className="relative mx-auto px-4 pt-14 pb-20 sm:h-full sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8 text-white">
                <div className="max-w-xl ml-10">
                    <p className='capitalize'>accueil</p>
                    <h1 className="text-2xl font-extrabold sm:text-4xl uppercase">
                        qui sommes-nous ?
                    </h1>

                    <hr data-aos='fade-right'
                    data-aos-duration='1800'
                    data-aos-delay='200'
                    class="my-3 border-[#D9D9D9] w-[176px]" />
                    <p className="mt-4 ml-7 max-w-lg text-sm sm:text-lg/none">
                        PRATIC AGENCE est spécialisée dans la communication 360.
                        Nous concevons des stratégies dynamiques et innovantes
                        sur mesure pour des entreprises et des particuliers. <br /> <br />

                        Nous vous offrons des solutions en Communication,
                        Production audiovisuelle, Stratégie digitale, Evénementiel.
                        Nous sommes une équipe de professionnels expérimentés.
                    </p>
                    <hr data-aos='fade-right'
                    data-aos-duration='1800'
                    data-aos-delay='200'
                    class="my-3 border-[#D9D9D9] w-[176px]" />

                </div>
            </div>
        </section>
    </div>
  )
}

export default Banner