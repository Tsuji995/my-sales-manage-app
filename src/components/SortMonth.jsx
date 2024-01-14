/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import React from 'react'
import { SalesLists } from './SalesLists'

import Button from '@mui/material/Button';

const SortMonth = ({startDate, setStartDate, endDate, setEndDate, handleSubmitSort}) => {


    // 日付範囲設定

   const handleSortStart = (e) => {
     setStartDate(e.target.value)
     console.log("start:", startDate)
   }

   const handleSortEnd = (e) => {
     setEndDate(e.target.value)
     console.log("end:", endDate)
   }

   const clearSortDate = () => {
    setStartDate("")
    setEndDate("")
   }


 
   const dateSortBox = css`
    margin-top: 10px;
   `

   const startDateStyle = css`
    margin-right: 10px;
   `
   const endDateStyle = css`
    margin-right: 10px;
   `
   const searchStyle = css`
    margin-right: 10px;
   `

  return (
    <div css={dateSortBox}>
        <h3>日付範囲指定</h3>
          <form onSubmit={handleSubmitSort}>
            <input css={startDateStyle} value={startDate} type="date" onChange={handleSortStart}/>
            <input css={endDateStyle} value={endDate} type="date" onChange={handleSortEnd}/>
            <Button css={searchStyle} variant="contained" onClick={(e) => {handleSubmitSort(e);}}>検索</Button>
            <button onClick={clearSortDate}>クリア</button>
         </form>
         <p>from:<b>{startDate}</b> to:<b>{endDate}</b></p>
    </div>
  )
}

export default SortMonth