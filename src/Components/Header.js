import React from 'react'
import pigLogo from '../assets/header/cp_logo.jpg'
import searchIcon from '../assets/header/search.png'
// import themeSwitchIcon from '../assets/header/theme-switch.png'
import './Header.css'

export default function Header({setSearch}) {
  return (
    <div className='header'>
        <div className='logoContainer'>
            <img src={pigLogo} className='pigLogo' alt='' />
        </div>

        <div className='loginButton'>
            <a href='https://testnets.opensea.io/collection/crypto-pigs-v3' target='_blank' rel="noreferrer">Explore on OpenSea</a>
        </div>

        <div className='searchBar d-flex align-items-center'>
            <div className='searchIconContainer'><img src={searchIcon} alt=''/></div>
            <input 
                className='searchInput'
                placeholder='Search my crypto pig ...'
                onChange={(e)=>setSearch(e.target.value)}
            />
        </div> 

        {/* <div className='headerItems d-flex '>
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div> */}

        {/* <div className='headerActions d-flex align-items-center'>
            <div className='themeSwitchContainer d-flex justify-content-center align-items-center'>
                <img src={themeSwitchIcon} alt=''/>
            </div>
        </div> */}

        

    </div>
  )
}
