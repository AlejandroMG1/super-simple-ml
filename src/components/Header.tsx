import * as React from 'react';

export interface IHeaderProps {
    setInput:any
    value:string
}

function Header ({setInput,value}: IHeaderProps) {
  return (
    <div className='w-full flex'>
      <div className=' m-auto'>
        <span>Alejandro Montoya garcia</span>
      <input className='mx-2 border-2 border-black' type="text" value={value} onChange={setInput}/>
      </div>
      
    </div>
  );
}

export default Header