import React from 'react'

export const BasketQuery: React.FC<{bold:boolean, title: string, value: string}> = ({bold, title, value}) => {
  return (
    <div>
      { bold ?  
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <b>{title}</b>
          <b>{value}</b>
        </div>
        :
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
         <span>{title}</span>
         <span>{value}</span>
       </div>
      }
    </div>
  )
}
