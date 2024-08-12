import React,{useState, useEffect} from 'react';
import data from '../data/portfolioData';
import Modal from '../data/Modal';

// import components
import Header from '../components/Header'
import Footer from '../components/Footer';

const Porfolio = () => {
    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);
    const [selectTab, setSelectTab] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);

    const loadMoreHandler = () => {
        setNextItems(prev => prev + 3);
    };

    const showModalHandler = id => {
        setShowModal(true);
        setActiveID(id)
    }

    useEffect(() => {
        if(selectTab === 'all'){
            setPortfolios(data);
        }

        if(selectTab === 'web-design'){
            const filteredData = data.filter(item => item.category === 'Web Design');
            setPortfolios(filteredData);
        }

        if(selectTab === 'ux-design'){
            const filteredData = data.filter(item => item.category === 'Ux');
            setPortfolios(filteredData);
        }
    },[selectTab]);
  return (
    <div>
        <Header />
        
        {/* Banner */}
        <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat h-[401px] lg:mt-32 mt-36">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B495F6] to-[#000B43] opacity-70"></div>

            <div data-aos='fade-down'
            data-aos-duration='1600' 
            className="relative mx-auto px-4 pt-14 pb-20 sm:h-full sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8 text-white">
                <div className="max-w-xl ml-10">
                    <p className='capitalize'>accueil</p>
                    <h1 className="text-3xl font-extrabold sm:text-4xl uppercase">
                        portfolio
                    </h1>

                    <hr data-aos='fade-right'
                    data-aos-duration='1800'
                    data-aos-delay='200'
                    class="my-3 border-[#D9D9D9] w-[176px]" />
                    <p className="my-4 ml-7 max-w-lg sm:text-lg/none">
                        Plongez dans nos réalisations et explorez comment nous avons concrétisé 
                        les ambitions de nos clients en succès tangibles
                    </p>
                    <hr data-aos='fade-right'
                    data-aos-duration='1800'
                    data-aos-delay='200'
                    class="my-3 border-[#D9D9D9] w-[176px]" />
                </div>
            </div>
        </section>

        {/* projets */}
        <section className='text-center mt-20'>
            <h1 data-aos="fade-down"
            data-aos-duration="1800" 
            className='uppercase text-4xl text-[#000B43] font-extrabold'>
                découvrez nos réalisations
                <span data-aos="zoom-in-up"
                data-aos-duration="1800"
                data-aos-delay="200"
                className="block w-[176px] h-0.5 bg-[#878688] my-8 mx-auto"></span>
            </h1>
            
            <div className=''>
                <div className='md:flex items-center justify-between flex-wrap mb-5'>
                    <div className='md:flex md:gap-3 text-[#0044A0] text-lg font-medium'>
                        <button data-aos="fade-right"
                        data-aos-duration="1500" 
                        data-aos-delay="200"
                        onClick={() => setSelectTab('all')} className='border border-solid border-[#000B43] py-2 px-4 rounded-[8px]'>
                            All
                        </button>
                        <button data-aos="fade-right"
                        data-aos-duration="1500" 
                        data-aos-delay="300"
                        onClick={() => setSelectTab('web-design')}  className='border border-solid border-[#000B43] py-2 px-4 rounded-[8px]'>
                            Communication
                        </button>
                        <button data-aos="fade-right"
                        data-aos-duration="1500" 
                        data-aos-delay="400"
                        onClick={() => setSelectTab('ux-design')}  className='border border-solid border-[#000B43] py-2 px-4 rounded-[8px]'>
                            Evènementiel
                        </button>
                        <button data-aos="fade-right"
                        data-aos-duration="1500" 
                        data-aos-delay="500"
                        onClick={() => setSelectTab('ux-design')}  className='border border-solid border-[#000B43] py-2 px-4 rounded-[8px]'>
                            AudioVisuelle
                        </button>
                        <button data-aos="fade-right"
                        data-aos-duration="1500" 
                        data-aos-delay="600"
                        onClick={() => setSelectTab('ux-design')}  className='border border-solid border-[#000B43] py-2 px-4 rounded-[8px]'>
                            Formation
                        </button>
                    </div>
                </div>

                <div data-aos="fade-down"
                data-aos-duration="1500" 
                className='flex items-center gap-4 flex-wrap'>
                    {
                        portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
                            <div key={index} 
                            data-aos='fade-zoom-in'
                            data-aos-delay='50'
                            data-aos-duration='1000' 
                            className='group max-w-full sm:w-[40.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                                <figure>
                                    <img className='rounded-[8px]' src={portfolio.imgUrl} alt="" />
                                </figure>

                                <div className='w-full h-full bg-gradient-to-br from-[#B495F6] to-[#000B43] opacity-70 bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                                    <div className='w-full h-full flex items-center justify-center'>
                                        <button onClick={() => showModalHandler(portfolio.id)} 
                                        className='text-white bg-[#000B43] hover:bg-[#0044A0] opacity-100 py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
                                            See Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    };
                </div>

                <div className='text-center my-16'>

                    {
                        nextItems < portfolios.length && data.length > 6 && (
                            <button data-aos="zoom-in-up"
                            data-aos-duration="1800"
                            data-aos-delay="200"
                            onClick={loadMoreHandler} 
                            className='text-white bg-gradient-to-r from-[#000B43] to-[#2E75D4] py-3 px-10 font-bold text-lg ease-in duration-200 uppercase'>
                                plus encore
                            </button>
                        )
                    }

                </div>
            </div>

        {
            showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
        }
        </section>

        {/* footer */}
        <Footer />
    </div>
  )
}

export default Porfolio