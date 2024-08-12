import React from 'react'
import Swal from 'sweetalert2'

// import components
import Header from '../components/Header'
import Footer from '../components/Footer';

// import icons
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";


const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f9d3103d-971f-4cd0-af18-c03444f78057");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    
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
                        contactez-nous
                    </h1>

                    <hr class="my-3 border-[#D9D9D9] w-[176px]" />
                    <p className="my-4 ml-7 max-w-lg sm:text-lg/none">
                        Pour parler de votre projet et découvrir comment nos experts peuvent vous guider 
                        vers une communication optimale, contactez-nous dès aujourd’hui !
                    </p>
                    <hr class="my-3 border-[#D9D9D9] w-[176px]" />
                </div>
            </div>
        </section>

        {/* main page */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-20">
            {/* left page */}
            <div data-aos='fade-down'
            data-aos-duration='1500'
            className="lg:ml-10 mx-10">
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
                    className='uppercase text-[#878688] font-medium text-sm mt-1'>contactez-nous</h4>
                </div>
                <h2 className='uppercase text-3xl mt-5 text-[#000B43] font-extrabold mb-2'>
                    parlons de votre projet
                    <span data-aos='fade-right'
                    data-aos-duration='1800'
                    data-aos-delay='200'
                    className="block w-[176px] h-[1px] bg-[#878688] my-4"></span>
                </h2>
                <p className='leading-none text-[#878688] text-xl ml-7'>
                    Nous sommes impatients de vous écouter et de créer des solutions de communication taillées 
                    sur mesure pour répondre à vos exigences uniques
                </p>
                <span data-aos='fade-right'
                data-aos-duration='1800'
                data-aos-delay='200'
                className="block w-[176px] h-[1px] bg-[#878688] my-4 font-bold"></span>

                <div>
                    <div className='flex mb-10'>
                        <span className='text-[#2E75D4]'>
                            <IoLocationSharp className='h-[61.37px] w-16' />
                        </span>
                        <div className='font-extrabold ml-7'>
                            <h3 className='uppercase text-[#000B43]'>nos bureaux</h3>
                            <p className='text-[#878688] leading-none mt-2'>
                                Abidjan Cocody Abatta, Carrefour AB <br /> Center près de la pharmacie Eau-Vive
                            </p>
                        </div>
                    </div>

                    <div className='flex mb-10'>
                        <span className='text-[#2E75D4]'>
                            <IoIosMail className='h-[61.37px] w-16' />
                        </span>
                        <div className='font-extrabold ml-7'>
                            <h3 className='uppercase text-[#000B43]'>notre e-mail</h3>
                            <p className='text-[#878688] leading-none mt-2'>
                                direction@praticagence.com
                            </p>
                        </div>
                    </div>

                    <div className='flex mb-10'>
                        <span className='text-[#2E75D4]'>
                            <FaPhoneSquareAlt className='h-[61.37px] w-16' />
                        </span>
                        <div className='font-extrabold ml-7'>
                            <h3 className='uppercase text-[#000B43]'>téléphone</h3>
                            <p className='text-[#878688] leading-none mt-2'>
                                +225 07 14 19 19 14
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* right page */}
            <div className='relative lg:mr-10'>
                <div className='bg-gradient-to-b from-[#000B43] to-[#2E75D4] p-14'>
                    <h2 className='uppercase text-white text-3xl font-extrabold mb-11 -ml-5'>laissez-nous un message</h2>

                    {/* formulaire */}
                    <form onSubmit={onSubmit} className='h-full'>
                        <div className='sm:flex mx-auto'>
                            <input type="text" placeholder='Prénom' name='prenom'  className='bg-white w-full p-5 my-5 mr-8' />
                            <input type="text" placeholder='Nom' name='nom'  className='bg-white w-full p-5 my-5' />
                        </div>
                        <div className='sm:flex mx-auto'>
                            <input type="text" placeholder='Adresse mail' name='email'  className='bg-white w-full p-5 my-5 mr-8' />
                            <input type="text" placeholder='Sujet' name='sujet' className='bg-white w-full p-5 my-5' />
                        </div>
                        <textarea name="message" rows={10} placeholder='Message' className='relative bg-white w-full p-4 my-5 mx-auto'></textarea>
                        <button type='submit' className=" uppercase inline-block bg-gradient-to-r from-[#000B43] to-[#2E75D4] opacity-100 w-full max-w-72 py-3 text-sm font-bold text-white focus:outline-none focus:ring">
                            envoyer
                        </button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
        </div>

        {/* map */}
        <div className='w-full h-[580px] -mt-32'>
            <iframe
            title='google-maps' 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.386794354541!2d-3.9277851386547593!3d5.357806444598542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ed665e7f8841%3A0xa91c51b32f80ec17!2sPharmacie%20Eaux%20Vives!5e0!3m2!1sfr!2sci!4v1721221778035!5m2!1sfr!2sci" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            className='border-0 w-full h-full'
            ></iframe>
        </div>

        {/* footer */}
        <Footer />
    </div>
  )
}

export default Contact
