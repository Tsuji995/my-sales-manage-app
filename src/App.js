/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React, { createContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import MaterialDrawer from './components/MaterialDrawer';
import { Home } from './components/Home'



  const App = () => {
    const [dateList, setDateList] = useState()
    const [salesList, setSalesList] = useState(JSON.parse(localStorage.getItem("salesLists")))

    // useEffect(async() => {
    //   const response = await fetch("http://localhost:5000")
    //   const _dateList = await response.json()

    //   setDateList(_dateList)

    //   console.log("dateList", dateList)
    // }, [setDateList])


  




  
  


  
 

  const isIterable = obj => 
  typeof obj !== "object" || obj === null
  ? false
  : typeof obj[Symbol.iterator] === "function"

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [minDate, setMinDate] = useState();
  const [maxDate, setMaxDate] = useState();

  

  const handleSubmitSort = (e) => {
    e.preventDefault();
    setMinDate(startDate)
    console.log(startDate)
    setMaxDate(endDate)
    console.log(endDate)

   }


  //  給与計算

  const [salary, setSalary] = useState()


   const homeSalary = css`
    width: 100%;
    background-color: orange;
    color: white;
    text-align: center;
    p {
      font-size: 4.3em;
    }
   `
   
   return (
     <div>
       <MaterialDrawer />
      <Outlet context={{salesList: salesList,
                         isIterable: isIterable, 
                        dateList: dateList, 
                        setDateList: setDateList,
                        setSalesList: setSalesList, 
                        startDate: startDate,
                        setStartDate: setStartDate, 
                        endDate: endDate,
                        setEndDate: setEndDate,
                        handleSubmitSort: handleSubmitSort,
                        minDate: minDate, 
                        maxDate: maxDate,
                        salary: salary, 
                        setSalary: setSalary}}/>

    </div>
  )
}

export default App 





// dateList={dateList}
//         setDateList={setDateList}
//         salesList={salesList}
//         setSalesList={setSalesList}
//         isIterable={isIterable}
//         startDate={startDate}
//         setStartDate={setStartDate}
//         endDate={endDate}
//         setEndDate={setEndDate}
//         handleSubmitSort={handleSubmitSort}
//         minDate={minDate}
//         maxDate={maxDate}

// const getDate = async() => {
//   const response = await fetch("http://localhost:5000")
//   const jsonResponse = await response.json()
//   console.log("jsonResponse", jsonResponse.dateList, jsonResponse.dateList.map((list) => list.date))
//   const jsonGetDateFromDB = await getDateFromDB.json()
//   console.log("jsonGetDateFromDB:", jsonGetDateFromDB)
// }

