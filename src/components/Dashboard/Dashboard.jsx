
import React from 'react';
import left from "../../assets/arrow-left.png"
import toggle from "../../assets/Toggle.png"
import frame from "../../assets/Frame 1.png"
import Sidebar from "../Sidebar/Sidebar"
import Header from '../Header/Header';
import Table from '../Table/Table';
function Dashboard() {
  return (
    <>
    <div className="flex flex-col h-screen">
        <div className="p-2 flex justify-between items-center border-b border-#E5E5E5">
            <div className="flex">
                <img src={left} className="m-1"></img>
                <p className='text-sm'>Name of the file</p>
            </div>
            <div className="flex">
                <img src={toggle} className="m-2"></img>
                <img src={frame} className="m-1"></img>
            </div>
        </div>
        <div className="flex p-2 justify-between">
          <div>
            <Sidebar/>
          </div>
          <div className="flex flex-col flex-1">
            <div className='border-b border-#E5E5E5 p-2'>
              <Header/>

            </div>
            <div className="flex flex-1">
              <Table></Table>
              
            </div>

          </div>

        </div>


    </div>
    </>
  )
}

export default Dashboard
