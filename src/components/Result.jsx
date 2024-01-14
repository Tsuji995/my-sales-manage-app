/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from 'react'
import ShopResult from './ShopResult'
import Button from '@mui/material/Button';




export default function Result({salesList, date, isIterable, setSalesList}) {

  if(isIterable(salesList)){

    const resultFlexBox = css`
    display: flex;
    justify-content: center;
    height: 20px;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 10px;
    
      p {
        margin-right: 20px;
        margin: 15px
      }
  `


  


    // 売上削除
  
  const onDelete = (id) => {
    console.log(id)
    const filterSalesList = salesList.filter((list) => list.id !== id);
    setSalesList(filterSalesList)

    localStorage.setItem("salesLists", JSON.stringify(salesList))
  }

    return (
        <div>
                   {salesList.filter((list) => list.date === date).map((list) => {
                return (
                  <div css={resultFlexBox}>
                    <p css>{list.course}</p>
                    <p>{list.price.toLocaleString()}</p>
                    <p>{list.shop}</p>
                    <Button variant="outlined" color="error" size="small" onClick={() => {onDelete(list.id)}}>削除</Button>
                  </div>
                )
              })}
  
             <ShopResult salesList={salesList} date={date}/>    
        </div>
    )

  
  }  
  return (
    <div>売上がありません</div>
  )
}
