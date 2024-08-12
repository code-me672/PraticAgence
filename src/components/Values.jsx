import React from 'react'

const Values = () => {
  return (
    <div className='text-center'>
      <h2 data-aos="fade-down"
      data-aos-duration="1800"
      className='uppercase text-[#878688] text-[32px] font-bold my-10'>
        nos valeurs
        <span data-aos="zoom-in-up"
        data-aos-duration="1800"
        data-aos-delay="200" 
        className="block w-[176px] h-0.5 bg-[#878688] mt-1 mx-auto"></span>
      </h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 xl:mx-52 lg:mx-36">
        <div data-aos="fade-right"
        data-aos-duration="1800"
        data-aos-delay="200" 
        className="h-72 border-2 border-[#000B43] uppercase text-[#000B43] font-bold py-32 text-[26px] hover:bg-[#000B43] hover:text-white transition duration-500 ease-in">créer</div>
        <div data-aos="zoom-out-up"
        data-aos-duration="1800"
        data-aos-delay="200" 
        className="h-72 border-2 border-[#000B43] uppercase text-[#000B43] font-bold py-32 text-[26px] hover:bg-[#000B43] hover:text-white transition duration-500 ease-in">innover</div>
        <div data-aos="fade-left"
        data-aos-duration="1800"
        data-aos-delay="200" 
        className="h-72 border-2 border-[#000B43] uppercase text-[#000B43] font-bold py-32 text-[26px] hover:bg-[#000B43] hover:text-white transition duration-500 ease-in">réaliser</div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 xl:mx-52 lg:mx-36 my-5">
        <div data-aos="fade-right"
        data-aos-duration="1800"
        data-aos-delay="200" 
        className="h-72 bg-[#000B43] text-white text-[22px] py-20 px-2 font-medium hover:bg-white hover:text-[#000B43] hover:border-[#000B43] hover:border-2 transition duration-500 ease-in">
          De l'idée initiale à la stratégie finale, nous créons des expériences captivantes et sur mesure, façonnées pour atteindre et inspirer votre public.
        </div>
        <div data-aos="zoom-out-up"
        data-aos-duration="1800"
        data-aos-delay="200" 
        className="h-72 bg-[#000B43] text-white text-[22px] py-20 px-2 font-medium hover:bg-white hover:text-[#000B43] hover:border-[#000B43] hover:border-2 transition duration-500 ease-in">
          Nous repoussons les limites de la communication traditionnelle, en adoptant des approches avant-gardistes et en intégrant des outils technologiques de pointe.
        </div>
        <div data-aos="fade-left"
        data-aos-duration="1800"
        data-aos-delay="200" 
        className="h-72 bg-[#000B43] text-white text-[22px] py-20 px-2 font-medium hover:bg-white hover:text-[#000B43] hover:border-[#000B43] hover:border-2 transition duration-500 ease-in">
          Nous nous engageons à concrétiser vos projets avec précision et efficacité, en assurant une mise en œuvre qui traduit vos idées en succès visibles.
        </div>
      </div>
    </div>
  )
}

export default Values