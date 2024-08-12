import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const MobileDropdown = () => {
  return (
    <Menu as="div" className="relative max-w-24">
      <div>
        <MenuButton className="inline-flex w-full justify-center text-lg uppercase text-[#000B43] font-bold leading-9 shadow-sm">
          services
          <ChevronDownIcon aria-hidden="true" className="-mr-1 mt-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gradient-to-r from-[#000B43] to-[#0044A0] shadow-lg ring-1 ring-[#000B43] ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link to={'/services/evenementiel'}
              className="block font-semibold px-4 py-2 text-sm text-white data-[focus]:bg-white data-[focus]:text-[#000B43] uppercase"
            >
              évènementiel
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={'/services/formation-coaching'}
              className="block font-semibold px-4 py-2 text-sm text-white data-[focus]:bg-white data-[focus]:text-[#000B43] uppercase"
            >
              formation & coaching
            </Link>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <Link to={'/services/production-audiovisuelle'}
              className="block font-semibold px-4 py-2 text-sm text-white data-[focus]:bg-white data-[focus]:text-[#000B43] uppercase"
            >
              production audiovisuelle
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={'/services/conseil-en-communication'}
              className="block font-semibold px-4 py-2 text-sm text-white data-[focus]:bg-white data-[focus]:text-[#000B43] uppercase"
            >
              conseil en communication
            </Link>
          </MenuItem>
        </div>
        
      </MenuItems>
    </Menu>
  )
}

export default MobileDropdown