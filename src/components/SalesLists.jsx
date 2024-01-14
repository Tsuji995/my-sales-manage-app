import React, { useState } from 'react'
import  './style.css'
import DateBox from './DateBox'

import { Grid } from '@mui/material'


export const  SalesLists = ({salesList,
                            setSalesList,
                            dateList,
                            setDateList,
                             priceList,
                             setPriceList,
                             isIterable,
                             minDate,
                            maxDate}) => {

const [price, setPrice] = useState()
const [selectOption, setSelectOption] = useState()
const [selectShop, setSelectShop] = useState()



// 日付の重複を削除
// const set = new Set(dateList);
// const dateBox = [...set]
// console.log("dateBox:", dateBox, "datBoxTest:", dateBox[0])

const SortDatePrice = () => {if(salesList && isIterable(salesList)){
    const sortDatePrice = salesList.filter((date) => 
    new Date(minDate).getTime() <= new Date(date.date).getTime() && new Date(date.date).getTime() <= new Date(maxDate))
    .reduce((sum, i) => sum + i.price, 0)

    return sortDatePrice.toLocaleString()
  }
  }



if(dateList) {
    dateList.sort((a, b) => a.date > b.date ? 1 : -1)
    console.log("sort:", dateList)

    if(minDate && maxDate) {
        
        return (
                <div className='dateBox'>
                   <div className="sortDateSum">
                     <p>範囲指定合計:<SortDatePrice /></p>
                    </div>
                    {dateList.filter((date) => 
                    new Date(minDate).getTime() <= new Date(date.date).getTime() && new Date(date.date).getTime() <= new Date(maxDate)
                    .getTime()).map((date) => {
                        return (
                            
                            <div className='dateBoxFlex'>   
                                <DateBox date={date.date}
                                        dateId={date.id}
                                        dateList={dateList}
                                        setDateList={setDateList}
                                        price={price}
                                        setPrice={setPrice}
                                        selectOption={selectOption}
                                        setSelectOption={setSelectOption}
                                        selectShop={selectShop}
                                        setSelectShop={setSelectShop}
                                        salesList={salesList}
                                        setSalesList={setSalesList}
                                        isIterable={isIterable}
                                />
                            </div>
                        )
                    })}
                </div>
        )
    } else {
        return (
            <Grid container spacing={2}>
                    {
                        dateList.map((date) => {
                            
                            return (
                                    <Grid xs={12} sm={4} md={3}>
                                        <DateBox date={date.date}
                                                dateId={date.id}
                                                dateList={dateList}
                                                setDateList={setDateList}
                                                price={price}
                                                setPrice={setPrice}
                                                selectOption={selectOption}
                                                setSelectOption={setSelectOption}
                                                selectShop={selectShop}
                                                setSelectShop={setSelectShop}
                                                salesList={salesList}
                                                setSalesList={setSalesList}
                                                isIterable={isIterable}
                                                />
                                    </Grid>
                            )
                        })
                    }


            </Grid>
        )

        

    }
    return (
        <div className="dateBox">
            {
                dateList.map((date) => {
    
                    return (
                        <div className='dateBoxFlex'>   
                            <DateBox date={date.date}
                                     dateId={date.id}
                                     dateList={dateList}
                                     setDateList={setDateList}
                                     price={price}
                                     setPrice={setPrice}
                                     selectOption={selectOption}
                                     setSelectOption={setSelectOption}
                                     selectShop={selectShop}
                                     setSelectShop={setSelectShop}
                                     salesList={salesList}
                                     setSalesList={setSalesList}
                                     isIterable={isIterable}
                            />
                        </div>
                    )
                })
            }
        
        
        </div>
        
    )
} else {
    return (
        <div>売上無し</div>
    )
}
        
                     
                                                    

}

