import React, { useState } from 'react'
import { useEffect } from 'react'
import  './style.css'
import DateBox from './DateBox'

import { Grid } from '@mui/material'
import { Satellite } from '@mui/icons-material'

import { useOutletContext } from 'react-router-dom'


export const  SalesLists = ({salesList,
                            setSalesList,
                            dateList,
                            setDateList,
                             priceList,
                             setPriceList,
                             isIterable,
                             minDate,
                            maxDate}) => {

useEffect(() => {
    (async () => {const response = await fetch("http://localhost:5000")
        const jsonResponse = await response.json()
        const _dateList = jsonResponse.dateList
        console.log("jsonResponse", _dateList, jsonResponse.dateList.map((list) => list.date)) /*Some async tasks*/

        setDateList(_dateList)
    })();
    }, []);


const [price, setPrice] = useState()
const [selectOption, setSelectOption] = useState()
const [selectShop, setSelectShop] = useState()



// 日付の重複を削除
const set = new Set(dateList);
const _dateBox = [...set]
console.log("dateBox:", _dateBox)

const SortDatePrice = () => {if(salesList && isIterable(salesList)){
    const sortDatePrice = salesList.filter((date) => 
    new Date(minDate).getTime() <= new Date(date.date).getTime() && new Date(date.date).getTime() <= new Date(maxDate))
    .reduce((sum, i) => sum + i.price, 0)

    return sortDatePrice.toLocaleString()
  }
}



if(dateList) {

    const dateBox = _dateBox.sort((a, b) => a.date > b.date ? 1 : -1)
    console.log("sort:", dateBox.map((date) => {
        return date._id
    }))

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
            <div>
                {
                    dateBox.map((date) => {
                        return (
                            <div className='dateBoxFlex'>   
                                           <DateBox date={date.date}
                                                        dateId={date._id}
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
            
            
            
            

    }


} else {
    return (

        <div>
            売上無し
        </div>
    )
}
                            }
