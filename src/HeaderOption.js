import React from 'react'

function HeaderOption( {Icon, title} ) {
  return (
    <div className='headerOption'>
        {Icon && <Icon className='headerOption__icon'/>}
        <h3 className='hearOption__title'>{title}</h3>
      
    </div>
  );
}

export default HeaderOption;
