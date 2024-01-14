    /**@jsxImportSource @emotion/react */
    import { css } from "@emotion/react"
    
    import React, { useState } from 'react'
    import { v4 as uuidv4 } from "uuid"
    import Button from '@mui/material/Button';
    import "./style.css";


    
    export const InputForm = ({dateList,
                                setDateList,
                                price,
                                setPrice, 
                                salesList, 
                                setSalesList,
                                priceList,
                                setPriceList,
                                isIterable
                            }) => {
        const [date, setDate] = useState()


        console.log(isIterable(dateList))

        const handleSubmit = (e) => {

            
            if(isIterable(dateList) ) {

                const duplicateTest = dateList.filter((list) => 
                list.date === date)

                if(duplicateTest.length === 0 && dateList !== null) {

                    e.preventDefault();
                    setDateList(
                        [
                            ...dateList,
                            {
                                id: uuidv4(),
                                date 
                            }
        
                        ]
                        )
                        console.log("dateList spread:", dateList)
            
                        localStorage.setItem("dateList", JSON.stringify(dateList))
                } else {


                    return (
                        console.log("1111")
                    )
                }




            } else {

                e.preventDefault();
                setDateList(
                    [
                        // ...dateList,
                        {
                            id: uuidv4(),
                            date 
                        }
    
                    ]
                    )
                    console.log("dateList no spread:", dateList)
        
                    localStorage.setItem("dateList", JSON.stringify(dateList))

                
            }

        }
        
        const handleChangeDate = (e) => {
            setDate(e.target.value)
        }

        // const SortMonth = () => {
        //     return (
        //         <div>
        //             <form onSubmit={handleSubmitSort}>
        //             <input value={startDate} type="date" onChange={handleSortStart}/>
        //             <input value={endDate} type="date" onChange={handleSortEnd}/>
        //             <button onClick={handleSubmitSort}>登録</button>
        //         </form>
        //         </div>
        //     )
        // }

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