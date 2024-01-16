    /**@jsxImportSource @emotion/react */
    import { css } from "@emotion/react"
    
    import React, { useState } from 'react'
    import { v4 as uuidv4 } from "uuid"
    import Button from '@mui/material/Button';
    import "./style.css";


    
    export const InputForm = ({
                                dateList,
                                setDateList,
                                price,
                                setPrice, 
                                salesList, 
                                setSalesList,
                                priceList,
                                setPriceList,
                                isIterable
                            }) => {


    
    // const response = await fetch("http://localhost:5000")
    // const _dateList = await response.json()

    // console.log("_dateList:",  _dateList)

    // setDateList(_dateList)
  

        const [date, setDate] = useState()

        // const handleSubmit = (e) => {

            
        //     if(isIterable(dateList) ) {

        //         const duplicateTest = dateList.filter((list) => 
        //         list.date === date)

        //         if(duplicateTest.length === 0 && dateList !== null) {

        //             e.preventDefault();
        //             setDateList(
        //                 [
        //                     ...dateList,
        //                     {
        //                         id: uuidv4(),
        //                         date 
        //                     }
        
        //                 ]
        //                 )
        //                 console.log("dateList spread:", dateList)
            
        //                 localStorage.setItem("dateList", JSON.stringify(dateList))
        //         } else {


        //             return (
        //                 console.log("1111")
        //             )
        //         }




        //     } else {

        //         e.preventDefault();
        //         setDateList(
        //             [
        //                 // ...dateList,
        //                 {
        //                     id: uuidv4(),
        //                     date 
        //                 }
    
        //             ]
        //             )
        //             console.log("dateList no spread:", dateList)
        
        //             localStorage.setItem("dateList", JSON.stringify(dateList))

                
        //     }

        // }

        
        const handleChangeDate = (e) => {
            setDate(e.target.value)
        }
        
        const handleSubmit = async(e) => {

            console.log(date)
            e.preventDefault()
            try {
                const response = await fetch("http://localhost:5000/dateList/create" ,{
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        date: date
                    })
                })

                const jsonDate = response.json()


                window.location.reload()
                
            } catch(err) {

                alert("投稿失敗")

            }
        }

        const inputFormInput = css`
            margin-right: 8px
        `

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input  css={inputFormInput} value={date} type="date" onChange={handleChangeDate}/>
                    <Button variant="contained" color="success" size="small" onClick={(e) => {handleSubmit(e)}}>登録</Button>
                </form>
            </div>
        )
                    
}