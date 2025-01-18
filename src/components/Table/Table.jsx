import React from "react";
import play from "../../assets/play_circle.png"
import plus from "../../assets/plus.png"
import yellow from "../../assets/image 54.png"
import chat from "../../assets/image 16.png"
import frame from "../../assets/Frame 16.png"
import link from "../../assets/link-external-02.png"
import icon from "../../assets/Icon.png"
import alert from "../../assets/alert-triangle.png"
import logo from "../../assets/Logomark.png"
import mark from "../../assets/mark.png"
import mark2 from "../../assets/mark2.png"
import mark3 from "../../assets/mark3.png"
import mark4 from "../../assets/mark4.png"


const Table = () => {
  const rows = [
    { no:"",no2:"",time: "", action: "", status: "" },
    { no:"",no2:"",time: "", action: "", status: "" },
    { no:"",no2:"",time: "", action: "", status: "" },
    { no:"",no2:"",time: "", action: "", status: "" },
    { no:"",no2:"",time: "", action: "", status: "" },
    { no:"",no2:"",time: "", action: "", status: "" },
    { no:"",no2:"",time: "", action: "", status: "" },
    

    
  ];

  return (
    <div className="flex flex-1">
      <div className="w-full">
        {/* Table container */}
        <div className="">
          {/* Table Header */}
          <div className="grid grid-cols-[3%_3%_22%_22%_22%_1fr] bg-gray-100 border-b border-gray-300 text-left">
            <div className="p-1 border-r border-#E5E5E5 font-semibold text-gray-700"></div>
            <div className=" p-1 border-r border-#E5E5E5 font-semibold text-gray-700"></div>
            <div className="p-1 border-r flex items-center  border-#E5E5E5 font-semibold text-gray-700"><img src={frame} className="m-1"></img>Input Column</div>
            <div className="p-1 border-r flex items-center  border-#E5E5E5 font-semibold text-gray-700"><img src={chat} className="m-1"></img>Action Column</div>
            <div className="p-1 border-r flex  items-center  border-#E5E5E5 font-semibold text-gray-700"><img src={yellow} className="m-1"></img>Enrich Company</div>
            <div className="p-1  border-r flex  items-center  border-#E5E5E5 font-semibold text-gray-700"><img src={plus}className="m-1"></img>Add Column</div>
          </div>

          {/* Table Rows */}
         
          
        {/* ------------------------------------------------------------ */}
        <div className={`grid grid-cols-[3%_3%_22%_22%_22%_1fr] border-b border-gray-200 `}>
            <div className="flex items-center border-r border-#E5E5E5 p-1 text-gray-600">1</div>
            <div className="flex items-center border-r border-#E5E5E5 p-1 text-gray-600"><img src={play}/></div>
            <div className="flex items-center border-r border-#E5E5E5 p-1 text-gray-600">Oct 12, 2024 at 14:08 PM</div>
            <div className="flex items-center border-r border-#E5E5E5 p-1 text-gray-600">Bitscale Evaluation-Account Evaluati...</div>
            <div className="flex items-center border-r border-#E5E5E5 p-1 text-gray-600 "><img src={logo} className="m-1"></img>Bitscale Evaluation-Account re..</div>
        </div>
        {/* ------------------------------------------------------------ */}
        <div className={`grid grid-cols-[3%_3%_22%_22%_22%_1fr] border-b border-gray-200 `}>
            <div className="flex items-center  border-r border-#E5E5E5 p-1 text-gray-600">2</div>
            <div className="flex items-center  border-r border-#E5E5E5 p-1 text-gray-600"><img src={play}/></div>
            <div className="flex items-center  border-r border-#E5E5E5 p-1 text-gray-600">Oct 12, 2024 at 14:08 PM</div>
            <div className="flex items-center  border-r border-#E5E5E5 p-1 text-gray-600 "><img src={alert} className="m-1"></img>cell data exceeds limit</div>
            <div className="flex items-center border-r border-#E5E5E5 p-1 text-gray-600 "><img src={mark} className="m-1"/>BMW Evaluation-Relevan..</div>
        </div>
        {/* ------------------------------------------------------------ */}
        <div className={`grid grid-cols-[3%_3%_22%_22%_22%_1fr] border-b border-gray-200 `}>
            <div className="flex items-center  border-r border-#E5E5E5 p-1 text-gray-600">3</div>
            <div className="flex items-center   border-r border-#E5E5E5 p-1 text-gray-600"><img src={play}/></div>
            <div className="flex items-center    border-r border-#E5E5E5 p-1 text-gray-600">Oct 12, 2024 at 14:08 PM</div>
            <div className=" flex items-center  border-r border-#E5E5E5 p-1 text-gray-600"><img src={link} className="m-1"></img><a className="text-blue-600 underline flex items-center w-auto"href='https://www.linkedin.com/bitScale.ai/sample?_l=en_US'>linkedin.com/</a></div>
            <div className=" flex items-center border-r border-#E5E5E5 p-1 text-gray-600 "><img src={mark4} className="m-1"/>Google Evaluation-Account re..</div>
        </div>
        {/* ------------------------------------------------------------ */}
        <div className={`grid grid-cols-[3%_3%_22%_22%_22%_1fr] border-b border-gray-200 `}>
            <div className="flex items-center  border-r border-#E5E5E5 p-1 text-gray-600">4</div>
            <div className="flex items-center  border-r border-#E5E5E5 p-1 text-gray-600"><img src={play}/></div>
            <div className="flex items-center  border-r border-#E5E5E5 p-1 text-gray-600">Oct 12, 2024 at 14:08 PM</div>
            <div className="flex items-center  border-r border-#E5E5E5 p-1 text-gray-600 "><img src={icon}className="m-1"></img><i>Loading Please wait..</i></div>
            <div className="flex items-center  border-r border-#E5E5E5 p-1 text-gray-600 "><img src={mark3} className="m-1"/>Apple Evaluation-Account re..</div>
        </div>
        {/* ------------------------------------------------------------ */}
        <div className={`grid grid-cols-[3%_3%_22%_22%_22%_1fr] border-b border-gray-200 `}>
            <div className="flex items-center  border-r border-#E5E5E5 p-1 text-gray-600">5</div>
            <div className="flex items-center  border-r border-#E5E5E5 p-1 text-gray-600"><img src={play}/></div>
            <div className="flex items-center  border-r border-#E5E5E5 p-1 text-gray-600 ">Oct 12, 2024 at 14:08 PM</div>
            <div className="flex items-center  border-r border-#E5E5E5 p-1 text-gray-600 "><img src={icon} className="m-1"></img><i>Loading Please wait..</i></div>
            <div className="flex items-center  border-r border-#E5E5E5 p-1 text-gray-600 "><img src={mark2} className="m-1"/>Figma Evaluation-Account re..</div>
        </div>

        {/* ----------------------------------------------------------- */}
        <div className={`grid grid-cols-[3%_3%_22%_22%_22%_1fr] border-b border-gray-200 `}>
            <div className="  border-r border-#E5E5E5 p-1 text-gray-600"></div>
            <div className="  border-r border-#E5E5E5 p-1 text-gray-600"></div>
            <div className="  border-r border-#E5E5E5 p-1 text-gray-600 flex"><img src={plus}className="m-1"/>Add Row</div>
            <div className="  border-r border-#E5E5E5 p-1 text-gray-600 flex "></div>
            <div className="  border-r border-#E5E5E5 p-1 text-gray-600 flex"></div>
        </div>
       
        {/* -------------------- */}
        {rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-[3%_3%_22%_22%_22%_1fr] border-b border-gray-200 `}
            >
            <div className="flex items-center h-8 border-r border-#E5E5E5 p-1 text-gray-600">{row.no}</div>
            <div className="flex items-center h-8 border-r border-#E5E5E5 p-1 text-gray-600"></div>
            <div className="flex items-center h-8 border-r border-#E5E5E5 p-1 text-gray-600">{row.time}</div>
            <div className="flex items-center h-8 border-r border-#E5E5E5 p-1 text-gray-600">{row.action}</div>
            <div className="flex items-center h-8 border-r border-#E5E5E5 p-1 text-gray-600">{row.status}</div>
            </div>
          ))} 

        </div>
      </div>
    </div>
  );
};

export default Table;
