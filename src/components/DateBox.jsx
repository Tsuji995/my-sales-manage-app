/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import React, { useState } from 'react'
import "./style.css"
import { v4 as uuidv4 } from "uuid"
import Result from './Result'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const selectCourse = ["","B15", "B30", "B60", "B90", "B120",
                      "F15", "F30", "F60", "O30", "O60",
                      "O90", "O120",  "T30", "T60", "T90", "T120","眼精", "K20", "K30",
                      "H15", "H30", "角", "首15", "首30", "ZB", "ZH", "ZK", 
                      "ZF", "ZO", "ZS", "MT", "美足", "SO", "CB", "U24", "べっぴん",
                      "つるぴか", "D4", "サイ", "ZC", "T3", "指名", "延Body", "延Oil" ]


const selectShopList = ["","貴", "楽", "本", "TF", "道",
"重", "24", "ラ", "ず", "プ", "貴C", "楽C", "本C", "TFC", "道C",
"重C", "24C", "ラC", "ずC", "プC"]

export default function DateBox({date,
                                  dateId,
                                  dateList,
                                  setDateList,
                                  price,
                                  setPrice,
                                  selectOption, 
                                  setSelectOption, 
                                  selectShop, 
                                  setSelectShop, 
                                  salesList, 
                                  setSalesList,
                                  isIterable}) {


  const chooseCourse = (e) => {

            const newValue = e.target.value
            setSelectOption(newValue)
            const newPrice = newValue
            setPrice(newPrice === "B15" ? 1100
            :newPrice === "B30" ? 1980
            :newPrice === "B60" ? 3278
            :newPrice === "B90" ? 4950
            :newPrice === "B120" ? 6490
            :newPrice === "F15" ? 1260
            :newPrice === "F15" ? 1260
            :newPrice === "F30" ? 2310
            :newPrice === "F60" ? 3960
            :newPrice === "O30" ? 2420
            :newPrice === "O60" ? 4400
            :newPrice === "O90" ? 6490
            :newPrice === "O120" ? 8470
            :newPrice === "T30" ? 2310
            :newPrice === "T60" ? 3960
            :newPrice === "T90" ? 5830
            :newPrice === "T120" ? 7480
            :newPrice === "眼精" ? 3960
            :newPrice === "K20" ? 1540
            :newPrice === "K30" ? 2310
            :newPrice === "H15" ? 1210
            :newPrice === "H30" ? 2310
            :newPrice === "角" ? 2860
            :newPrice === "首15" ? 1210
            :newPrice === "首30" ? 2310
            :newPrice === "ZB" ? 6140
            :newPrice === "ZH" ? 6140
            :newPrice === "ZK" ? 6140
            :newPrice === "ZF" ? 6490
            :newPrice === "ZO" ? 7480
            :newPrice === "KZ" ? 8580
            :newPrice === "ZS" ? 11800
            :newPrice === "MT" ? 6820
            :newPrice === "美足" ? 4950
            :newPrice === "SO" ? 7480
            :newPrice === "CB" ? 7150
            :newPrice === "U24" ? 4290
            :newPrice === "べっぴん" ? 7370
            :newPrice === "つるぴか" ? 7700
            :newPrice === "D4" ? 5500
            :newPrice === "サイ" ? 6800
            :newPrice === "ZC" ? 5700
            :newPrice === "T3" ? 6050
            :newPrice === "指名" ? 500
            :newPrice === "指名" ? 500
            :newPrice === "延Body" ? 770
            :newPrice === "延Oil" ? 880
            : 0)
        } 



  const chooseShop = (e) => {
            const newShop = e.target.value
            setSelectShop(newShop)
        } 


  // 売上登録

  const handleRegister = () => {

    if(isIterable(salesList)) {

      setSalesList([
        ...salesList,
        
        {
          id: uuidv4(),
          date: date,
          course: selectOption,
          price: price,
          shop: selectShop
        }
        
      
      ])

      
    
      console.log("salesList:",salesList);
    
      localStorage.setItem("salesLists", JSON.stringify(salesList))

      setSelectOption("")
      setSelectShop("")


    } else {
      setSalesList([
        // ...salesList,
        
        {
          id: uuidv4(),
          date: date,
          course: selectOption,
          price: price,
          shop: selectShop
        }
        
      
      ])
    
      localStorage.setItem("salesLists", JSON.stringify(salesList))

      setSelectOption("")
      setSelectShop("")

    }

}


// 日付削除

  const deleteDate = (id) => {

    if(salesList && isIterable(salesList)){
      const _deleteAllSales = dateList.filter((list) => list.id === id);
      const filterDateList = dateList.filter((list) => list.id !== id);
  
  
      console.log("test:", _deleteAllSales[0].date)
  
      const delereAllSales = salesList.filter((list) => list.date !== _deleteAllSales[0].date)
      setDateList(filterDateList)
      setSalesList(delereAllSales)
      console.log(salesList)
  
  
  
      localStorage.setItem("salesLists", JSON.stringify(salesList))
      localStorage.setItem("dateList", JSON.stringify(dateList))
    } else {
      const filterDateList = dateList.filter((list) => list.id !== id);
      setDateList(filterDateList)
    }
  }



// 日付別売上合計
  const DatePrice = () => {if(salesList && isIterable(salesList)){
    const datePrice = salesList.filter((list) => list.date === date)
    .reduce((sum, i) => sum + i.price, 0)

    return datePrice.toLocaleString()
  
  }
  }

  const [open, setOpen] = useState(false)

  const openHandler = () => {
    setOpen(!open)
  }



//  スタイル

  const dateBox = css`
    border: solid 1px;
    width: 80%;
    margin: 8px auto;
  `


  const dateBoxTitle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
  `

  const dateBoxTitleDate = css`
    margin-right: 10px;
  `

  const dateBoxOption = css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
  `


  return (
    <div css={dateBox}>
      <div css={dateBoxTitle}> 
        <h3 css={dateBoxTitleDate}>{date}</h3>
        <Button variant="outlined" color="error" size="small" onClick={() => {deleteDate(dateId);}}>削除</Button>
      </div>
      <div>
        <h3>売上:<DatePrice /></h3>
        {
          open ? (
            <Button color="secondary" onClick={() => {openHandler();}}>非表示</Button>
          ) :(
            <Button color="secondary" onClick={() => {openHandler();}}>表示</Button>
          )
        }
      </div>
        {open ? (
          <>
          <div css={dateBoxOption}>
            
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">コース</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={selectOption}
                  label="Course"
                  onChange={chooseCourse}
                >
                  {selectCourse.map((course) => {
                      return (
                        <MenuItem value={course}>{course}</MenuItem>
                      )
                    })}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">店舗</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={selectShop}
                  label="Course"
                  onChange={chooseShop}
                >
                      {selectShopList.map((shop) => {
                        return (
                          <MenuItem value={shop}>{shop}</MenuItem>
                        )
                    })}
                </Select>
              </FormControl>
              <Button variant="contained" color="success" size="small" onClick={() => {handleRegister()}}>登録</Button>

          </div>
          <Result salesList={salesList} date={date} isIterable={isIterable} setSalesList={setSalesList}/>
          </>
        ) : (
          <>
          </>
        )}
      </div>
  )
}
  