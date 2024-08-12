import React, {useState} from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

import Devis from './Devis'

import logo from '../Assets/LOGO1.png'
import logoBleu from '../Assets/LOGO.png'
import Dropdown from './Dropdown'
import MobileDropdown from './MobileDropdown'
  
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [devisMenuOpen, setDevisMenuOpen] = useState(false);
  return (
    <div>
        <header className="fixed inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 h-[174.51px] bg-[#000B43]">
            <div className="flex lg:flex-1">
              <Link to={'/'} className="-m-1.5 p-1.5">
                <span className="sr-only">PraticAgence</span>
                <img
                  alt=""
                  src={logo}
                  className="h-[126px] w-auto"
                />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              >
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-4">
                <Link  to={'/'} className="text-lg font-semibold leading-6 text-white uppercase">
                  accueil
                </Link>

                {/* dropdown services */}
                <Dropdown />
                

                {/*<Link  to={'/evenements'} className="text-lg font-semibold leading-6 text-white uppercase">
                  evenements
                </Link>*/}
                <Link  to={'/portfolio'} className="text-lg font-semibold leading-6 text-white uppercase">
                  portfolio
                </Link>
                <Link  to={'/about'} className="text-lg font-semibold leading-6 text-white uppercase">
                  à propos
                </Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link to={'/contact-us'} className="text-sm font-semibold leading-6 text-white mx-3 mt-7 w-[129px]">
                Contactez-Nous
              </Link>
              <button type="button"
                onClick={() => setDevisMenuOpen(true)} className="text-base font-bold leading-6 btn bg-white text-[#000B43] uppercase px-3 py-1 w-[192px] h-[78.67px] rounded-[15px] duration-500 md:static">
                obtenir un devis
              </button>
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link to={'/'} className="-m-1.5 p-1.5">
                  <span className="sr-only">PraticAgence</span>
                  <img
                    alt=""
                    src={logoBleu}
                    className="h-8 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                        <Link  to={'/'} className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold uppercase leading-9 text-[#000B43] hover:bg-gray-50">
                          accueil
                        </Link>

                        {/* mobile dropdown services */}
                        <MobileDropdown className='-mx-3 block rounded-lg px-3 py-2 text-lg font-bold uppercase leading-9 text-[#000B43] hover:bg-gray-50' />
                        
                        {/*<Link  to={'/evenements'} className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold uppercase leading-9 text-[#000B43] hover:bg-gray-50">
                          evenements
                        </Link>*/}
                        <Link  to={'/portfolio'} className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold uppercase leading-9 text-[#000B43] hover:bg-gray-50">
                          portfolio
                        </Link>
                        <Link  to={'/about'} className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold uppercase leading-9 text-[#000B43] hover:bg-gray-50">
                          à propos
                        </Link>
                        <Link  to={'/contact-us'} className="-mx-3 block rounded-lg px-3 py-2 text-xl font-bold capitalize leading-9 text-[#000B43] hover:bg-gray-50">
                          contactez-nous
                        </Link>

                  </div>
                  <div className="py-6">
                    <button
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50 uppercase
                      "
                    >
                      Obtenir un devis
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>

          {/* obtenis un devis */}
          <Dialog open={devisMenuOpen} onClose={setDevisMenuOpen} className="">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-1 py-6 sm:max-w-lg sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              
              <div className='mt-6 flow-root'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                    <div className='space-y-2 py-6'>
                      <Devis />
                    </div>
                </div>
              </div>
              
            </DialogPanel>
          </Dialog>
        </header>
    </div>
  )
}

export default Header