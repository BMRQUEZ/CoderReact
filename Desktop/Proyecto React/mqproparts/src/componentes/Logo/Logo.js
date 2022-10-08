import logo from './assets/LogoMQredondo.png'
import React from 'react'
const Logo =( width, height, padding ) => {
    return ( 
        <div >
            <img src={logo} alt='logo'style={{width:'70px', 
                                              height: '70 px',
                                              padding:'12px' }  } />
            
            
        </div>
    )
}
export default Logo