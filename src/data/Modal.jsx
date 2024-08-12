import React from 'react'
import portfolios from './portfolioData';

const Modal = ({activeID, setShowModal}) => {

    const portfolio = portfolios.find(portfolio => portfolio.id === activeID)

  return (
    <div className='w-full h-full fixed top-0 left-0 z-10 bg-[#000B43] bg-opacity-40'>
        <div className='w-11/12 md:max-w-[600px] md:w-full absolute top-[60%] left-1/2 z-20 bg-gradient-to-br from-[#000B43] to-[#2E75D4] opacity-100 rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5'>
            <div>
                <figure>
                    <img className='rounded-[8px]' src={portfolio.imgUrl} alt="" />
                </figure>
            </div>

            <div>
                <h2 className='text-2xl text-white font-[700] my-5'>
                    {portfolio.title}
                </h2>

                <p className='text-[15px] leading-7 text-white'>
                    {portfolio.description}
                </p>
            </div>

            <button onClick={() => setShowModal(false)} 
            className='w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer'>&times;</button>
        </div>  
    </div>  
  )
}

export default Modal
