import React, { useState, useEffect } from 'react'
import './Main.css'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
// import moreIcon from '../assets/owner/more.png'

export default function Main({ selectedPig, pigListData }) {
    const [activePig, setActivePig] = useState(pigListData.filter((pig)=>pig.token_id === '0')[0]);
    const [isShowingSocialMedia, setIsShowingSocialMedia] = useState(true);

    useEffect(()=>{
        setActivePig(pigListData.filter((pig)=>pig.token_id === selectedPig.toString())[0])
    }, [pigListData, selectedPig])

  return (
    <div className='main'>
        <div className='mainContent d-flex'>
            <div className='pigHighlight d-flex justify-content-center align-items-center'>
                <div className='pigContainer d-flex'>
                    <img
                        className='selectedPig'
                        src={activePig?.image_url}
                        alt=''
                    />
                </div>
            </div>

            <div className='pigDetails d-flex flex-column justify-content-between'>
                <div className='title'>
                    {activePig?.name}
                <span className='itemNumber'>.#{activePig?.token_id}</span>
                </div>
        
                <div className='owner d-flex'>
                    <div className='ownerImageContainer'>
                        <img
                            src={activePig?.owner?.profile_img_url} alt=''
                        />
                    </div>
                    <div className='ownerDetails d-flex align-items-center'>
                        <div className='ownerNameAndHandle'>
                            <div className='ownerTitle'>Owner:</div>
                            <div className='ownerAddress'>{activePig?.owner?.address}</div>
                            <div className='ownerHandle'>@cryptopigs</div>
                        </div>
                        <div 
                        className='socialMedia d-flex align-items-center'
                        onMouseEnter={()=>setIsShowingSocialMedia(false)}
                        onMouseLeave={()=>setIsShowingSocialMedia(true)}
                        >
                            {isShowingSocialMedia ? (
                                <>
                                    <div className='ownerLink'>
                                        <img src={instagramLogo} alt=''/>
                                    </div>
                                    <div className='ownerLink'>
                                        <img src={twitterLogo} alt=''/>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='comingSoon text-center'>
                                        Coming Soon
                                    </div>
                                </>
                            )}                        
                        </div>
                        <div className='moreIcon'>
                            <a href={`https://testnets.opensea.io/assets/0x8661889aa1d54504c3239744b800e79a7894a923/${activePig?.token_id}`} target='_blank' rel="noreferrer">View More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
