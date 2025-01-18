import React from 'react'
import share from "../../assets/share-07.png";
import download from "../../assets/download-01.png";
import trash from "../../assets/trash-03.png";
import columns from "../../assets/columns-03.png";
import vertical from "../../assets/switch-vertical-01.png";
import filter from "../../assets/filter-funnel-02.png";
import row from "../../assets/rows-03.png";
import search from "../../assets/search-sm.png";
function Header() {
  return (
    <>

        <div className='flex items-center justify-between'>
            {/* search */}
            <div className="flex items-center">
                <input
                type="text"
                placeholder='Search'
                className=" border border-gray-300 rounded-md p-1 text-sm focus:outline-none "
                />   
            </div>
            {/* center */}
            <div className='flex'>
                <div><button className="border border-none flex px-3 py-1 text-sm items-center"><img src={row} className='m-1'></img>1/1 Row</button></div>
                <div><button className="border border-none flex px-3 py-1 text-sm items-center"><img src={columns} className='m-1'></img>3/3 Column</button></div>
                <div><button className="border border-none flex  px-3 py-1 text-sm items-center"><img src={filter} className='m-1'></img>0 Filter</button></div>
                <div><button className="border border-none flex px-3 py-1 text-sm items-center"><img src={vertical} className='m-1'></img>Sort</button></div>
            </div>
            {/* end */}
            <div className="flex">
                
                <div><button className="border border-none bg-gray-800 rounded-md text-white px-3 py-1 text-sm ">Enrich</button></div>
                <div className='flex items-center'>
                    <div><button className="border border-none "><img src={share}className='m-1'></img></button></div>
                    <div><button className="border border-none  "><img src={download} className='m-1'></img></button></div>
                    <div><button className="border border-none "><img src={trash} className='m-1'></img></button></div>
                    
                </div>
            </div>
        </div>

    </>
  )
}

export default Header