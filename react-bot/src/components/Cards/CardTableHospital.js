import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import Popup from "components/Popup";
// components


export default function CardTableHospital({ color }) {
  
  const [HospitalList, setHospitalList] = useState([]);


  useEffect(() => {
    Axios.get("http://localhost:3001/hospital").then((response) => {
      setHospitalList(response.data);
      console.log(response.data);
    });
  }, []);
  const deleteHospital = (id)=> {
    Axios.delete(`http://localhost:3001/hospital/${id}`);
    window.location.reload();
  };


  
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Hospital list
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">

<thead>
  <tr>
    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
      name
    </th>
    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
    address
    </th>
    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
    status
    </th>
    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
Actions
    </th>
    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">

    </th>
  </tr>
</thead>

<tbody>



  {HospitalList.map((val, index) => {
    return (
      <tr>

        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
          <img
            src={require("assets/img/user.png").default}
            className="h-12 w-12 bg-white rounded-full border"
            alt="..."
          ></img>{" "}
          <span
            className={
              "ml-3 font-bold " +
              +(color === "light" ? "text-blueGray-600" : "text-white")
            }
          >

            <div key={index}>

              <h3>{val.name}</h3>
            </div>
          </span>

        </th>


        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <div key={index}>

            <h3>{val.address}</h3>
          </div>
        </td>

        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <div key={index}>

            <h3>{val.status}</h3>
          </div>
        </td>
     
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
          <button
          onClick={()=>deleteHospital(val._id)}
            className="bg-lightGrey-500 active:bg-lightBlue-600 uppercase 
            text-white font-bold hover:shadow-md shadow text-xs px-3 py-1 
            rounded outline-none focus:outline-none sm:mr-1 mb-1  transition-all duration-150"
            type="button"
            class="fas fa-trash"
          >
            
          </button>
        </td>
      </tr>
    );
  })}
</tbody>
</table>
        </div>
      </div>
    </>
  );
}

CardTableHospital.defaultProps = {
  color: "light",
};

CardTableHospital.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
