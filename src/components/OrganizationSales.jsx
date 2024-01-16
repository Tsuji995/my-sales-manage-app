/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from 'react'
import { Title } from './Title'
import { InputForm } from './InputForm'
import { SalesLists } from './SalesLists'
import SortMonth from './SortMonth'
import Invoice from './Invoice'
import { useLocation } from 'react-router-dom'
import {Outlet, useOutletContext } from 'react-router-dom'

function OrganizationSales() {



    const {isIterable,
           dateList,
            salesList,
            setDateList,
            setSalesList, 
            startDate, 
            setStartDate, 
            endDate, 
            setEndDate, 
            handleSubmitSort,
            minDate,
            maxDate} = useOutletContext();

        // const dateList = state.dateList
        // const setDateList = state.setDateList
        // const salesList = state.salesList
        // const setSalesList = state.setSalesList
        // const isIterable = state.isIterable
    //     const startDate = state.startDate
    //     const setStartDate = state.setStartDate
    //     const endDate = state.endDate
    //     const setEndDate = state.setEndDate
    //     const handleSubmitSort = state.handleSubmitSort
    //     const minDate = state.minDate
    //     const maxDate = state.maxDate


    const organizationSales = css`
      text-align: center;
      `
  return (


    
    <div css={organizationSales}>
        <Title />
        <InputForm
        dateList={dateList}
        setDateList={setDateList}
        salesList={salesList}
        setSalesList={setSalesList}
        isIterable={isIterable}
        />
        {/* <SortMonth 
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        handleSubmitSort={handleSubmitSort}/> */}

        <SalesLists
        dateList={dateList}
        setDateList={setDateList}
        salesList={salesList}
        setSalesList={setSalesList}
        isIterable={isIterable}
        minDate={minDate}
        maxDate={maxDate}

        />

    </div>
  )
}

export default OrganizationSales
