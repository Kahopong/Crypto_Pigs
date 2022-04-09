import React from 'react'
import CollectionCard from './CollectionCard'
import './PigList.css'

export default function PigList({ pigListData, setSelectedPig, search }) {
  return (
    <div className='pigList d-flex'>
      {pigListData.some((pig)=> pig.name.toLowerCase().includes(search.toLowerCase())) ? (
          pigListData.filter((pig) => pig.name.toLowerCase().includes(search.toLowerCase())).sort((a,b)=> parseInt(a.token_id) - parseInt(b.token_id)).map(pig => (
            <div key={pig.token_id} onClick={()=>setSelectedPig(pig.token_id)}>
            <CollectionCard
              id={pig.token_id}
              name={pig.name}
              traits={pig.traits}
              image={pig.image_url}
            />
            </div>
          ))
      ) : (
        <>
          <div className='noMore'> We have no more Crypto Pigs ... </div>
        </>
      )
      
      }
    </div>
  )
}
