import React from 'react';
import icon1 from "../../assets/Icon (1).png"
import icon2 from "../../assets/Icon (2).png"
import icon3 from "../../assets/Icon (3).png"
import table from "../../assets/table.png";
import credit from "../../assets/credit-card-02.png";


const Sidebar = () => {
  return (
    <>
    <div className='p-1 flex flex-col items-center justify-between h-full border-r border-#E5E5E5'>
        <div>
          <div><button className="border border-none flex px-3 py-1 text-sm items-center"><img src={table} className='m-1'></img></button></div>
          <div><button className="border border-none flex px-3 py-1 text-sm items-center"><img src={icon1} className='m-1'></img></button></div>
          <div><button className="border border-none flex px-3 py-1 text-sm items-center"><img src={icon2} className='m-1'></img></button></div>
          
        </div>
        <div>
          <div><button className="border border-none flex px-3 py-1 text-sm items-center"><img src={credit} className='m-1'></img></button></div>
          <div><button className="border border-none flex px-3 py-1 text-sm items-center"><img src={icon3} className='m-1'></img></button></div>
        </div>
    </div>
    </>
  )
}

export default Sidebar