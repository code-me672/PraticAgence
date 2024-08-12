import React from 'react'
import Swal from 'sweetalert2'

const Devis = () => {
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
    <div className='bg-gradient-to-b from-[#000B43] to-[#2E75D4] opacity-100 p-7'>
        <div className='flex pb-11'>
            <div>
                <span className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1'></span>
                <span className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1'></span>
                <span className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1'></span>
                <span className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1'></span>
                <span className='w-2 h-2 rounded-full bg-[#2E75D4] inline-block mr-1'></span>
            </div>
            <h4 className='uppercase text-white font-bold xl:text-base text-sm xl:mt-0 mt-1'>formulaire de devis</h4>
        </div>
        <h1 className='uppercase text-white font-bold xl:text-2xl text-xl '>obtenir un devis</h1>
        <p className='text-white font-semibold xl:text-lg text-base mb-11'>
            Vous serez recontacté sous 48 heures ouvrées par l’un de nos experts. ​
        </p>

        {/* formulaire */}
        <form onSubmit={onSubmit} className='items-center justify-center text-center font-bold text-[#878688]'>
            <div className='md:flex lg:block block justify-around items-center'>
                <input type="text" placeholder='Votre Nom'  className='bg-white w-full max-w-96 p-4 rounded-md my-4' />
                <input type="text" placeholder='Votre Email'  className='bg-white w-full max-w-96 p-4 rounded-md my-4' />
            </div>
            <div className='md:flex lg:block block justify-around items-center lg:mb-8 md:mb-0 mb-8'>
                <input type="text" placeholder='Votre Entreprise'  className='bg-white w-full max-w-96 p-4 rounded-md my-4' />
                <select name="" id="" placeholder='Choisissez le service' className='bg-white w-full max-w-96 p-4 rounded-md my-4 capitalize'>
                    <option value="" selected disabled>Choisissez le service</option>
                    <option value="">conseil en communication</option>
                    <option value="">production audiovisuelle</option>
                    <option value="">formation & coaching</option>
                    <option value="">évènementiel</option>
                </select>
            </div>
            <div className='md:flex lg:block block justify-around items-center'>
            
                <input type="text" placeholder="Votre Secteur d'activité" className='bg-white w-full max-w-96 p-4 rounded-md my-4 -mt-32' />
                <textarea name="" rows={7} placeholder="Décrivez votre besoin brièvement"  className='bg-white w-full max-w-96 p-4 rounded-md my-4'></textarea>
                
            </div>
            <button type='submit' className="uppercase inline-block bg-gradient-to-r from-[#000B43] to-[#2E75D4] opacity-100 w-full max-w-72 py-3 text-sm font-bold text-white focus:outline-none focus:ring">
                envoyer
            </button>
        </form>
        <span>{result}</span>
    </div>
  )
}

export default Devis