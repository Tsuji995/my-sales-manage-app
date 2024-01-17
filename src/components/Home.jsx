import React from 'react'
/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { useEffect } from "react";

import { useOutletContext } from "react-router-dom";
import { useState } from "react";



export const Home = () => {

  useEffect(() => {
    const getSalesList = async() => {

       const response = await fetch("http://localhost:5000/salesList")
        const jsonResponse = await response.json()
        const JSONsalesList = jsonResponse
        console.log("Result:", JSONsalesList.salesList)

        const _salesList = JSONsalesList
        
        setSalesList(_salesList)
      }
      getSalesList()
    }, [])


  const { salary, setSalary, salesList, setSalesList } = useOutletContext();

  const salaryDateList = ["", "2024-02", "2024-03", "2024-04", "2024-05", "2024-06", "2024-07",
  "2024-08", "2024-09", "2024-10", "2024-11", "2024-12"]

  const [salaryDate, setSalaryDate] = useState(JSON.parse(localStorage.getItem('salaryDate')))
  const [previousMonth, setPreviousMonth] = useState("")

  const handleSalaryDate = (e) => {
    const _chooseSalaryDate = e.target.value
    setSalaryDate(_chooseSalaryDate)
    console.log("invoiceDate:", salaryDate)
    const _previousMonth = _chooseSalaryDate
    setPreviousMonth(_previousMonth === "2024-02" ? "2024-01"
    :_previousMonth === "2024-03" ? "2024-02"
    :_previousMonth === "2024-04" ? "2024-03"
    :_previousMonth === "2024-05" ? "2024-04"
    :_previousMonth === "2024-06" ? "2024-05"
    :_previousMonth === "2024-07" ? "2024-06"
    :_previousMonth === "2024-08" ? "2024-07"
    :_previousMonth === "2024-09" ? "2024-08"
    :_previousMonth === "2024-10" ? "2024-09"
    :_previousMonth === "2024-11" ? "2024-10"
    :_previousMonth === "2024-12" ? "2024-11"
    :_previousMonth === "2025-01" ? "2023-12"
    : "2024-02")
    console.log("prevousMonth:", previousMonth)

    localStorage.setItem("salaryDate", JSON.stringify(salaryDate))
  }


  const homeSalary = css`
    color: white;
    background-color: #F58220;
    text-align: center;
    p {
      font-size: 3.0em;
      margin: 0;
    }
  `

  const homeSalaryNumber = css`
    font-size: 1.4em;

  `



  if(salesList) {


    
    const ASum = salesList.salesList.filter((list) =>new Date(previousMonth + "-26").getTime() <= new Date(list.date).getTime() 
    && new Date(list.date).getTime() <= new Date(salaryDate + "-25").getTime()).reduce((sum, i) => sum + i.price, 0)
  
    const CSum = salesList.salesList.filter((list) =>new Date(previousMonth + "-26").getTime() <= new Date(list.date).getTime() 
    && new Date(list.date).getTime() <= new Date(salaryDate + "-25" && list.shop === "貴C" || list.shop === "楽C"
                                                                      || list.shop === "本C"
                                                                      || list.shop === "TFC"
                                                                      || list.shop === "道C"
                                                                      || list.shop === "重C"
                                                                      || list.shop === "24C"
                                                                      || list.shop === "ラC"
                                                                      || list.shop === "ずC"
                                                                      || list.shop === "プC" ).getTime()).reduce((sum, i) => sum + i.price, 0)
                                                                      
    const _salary = ASum * 0.6 + CSum * 0.62 
    const manthFloorSalary = Math.floor(_salary)

    setSalary(manthFloorSalary)

    return (
      <div css={homeSalary}>
              <selection>
                <select value={salaryDate} onChange={handleSalaryDate}> 
                    {salaryDateList.map((date) => {
                        return (
                            <option key={date} value={date}>{date}</option>
                        )
                    })}
                </select>
            </selection> 
        <p>今月</p>
        <div css={homeSalaryNumber}>
          {
            salary && salary !== 0 ? <p>¥{salary.toLocaleString()}</p>
                          :<p>¥{salary}</p>
          }
  
        </div>

      </div>
    )

   } else {
    console.log("err")
  }


}

export default Home