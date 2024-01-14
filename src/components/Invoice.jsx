/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';


export default function Invoice() {

  const {salesList, salary, setSalary} = useOutletContext();
  
  // const location = useLocation()

  // const state = location.state

  // const salesList = state.salesList



  const selectShopList = ["","貴", "楽", "本", "TF", "道",
                          "重", "24", "ラ", "ず", "プ"]

  const [invoiceShop, setInvoiceShop] = useState("")

  
  
  
  const handleInvoiceShop = (e) => {
    const _selectInvoiceShop = e.target.value
    setInvoiceShop(_selectInvoiceShop)
    e.preventDefault()
  }
  
  const invoiceDateList = ["", "2024-02", "2024-03", "2024-04", "2024-05", "2024-06", "2024-07",
                      "2024-08", "2024-09", "2024-10", "2024-11", "2024-12"]
  
  const [invoiceDate, setInvoiceDate] = useState("")
  const [previousMonth, setPreviousMonth] = useState("")

  const handleInvoiceDate = (e) => {
    const _chooseInvoiceDate = e.target.value
    setInvoiceDate(_chooseInvoiceDate)
    const _previousMonth = _chooseInvoiceDate
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
                    :_previousMonth === "2025-01" ? "2024-12"
                    : "2024-02")
  }

  

    // A勤売上
    const A26 = salesList.filter((list) => list.date === previousMonth + "-26" && list.shop === invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A27 = salesList.filter((list) => list.date === previousMonth + "-27" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A28 = salesList.filter((list) => list.date === previousMonth + "-28" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A29 = salesList.filter((list) => list.date === previousMonth + "-29" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A30 = salesList.filter((list) => list.date === previousMonth + "-30" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A31 = salesList.filter((list) => list.date === previousMonth + "-31" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A1 = salesList.filter((list) => list.date === invoiceDate + "-01" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A2 = salesList.filter((list) => list.date === invoiceDate + "-02" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A3 = salesList.filter((list) => list.date === invoiceDate + "-03" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A4 = salesList.filter((list) => list.date === invoiceDate + "-04" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A5 = salesList.filter((list) => list.date === invoiceDate + "-05" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A6 = salesList.filter((list) => list.date === invoiceDate + "-06" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A7 = salesList.filter((list) => list.date === invoiceDate + "-07" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A8 = salesList.filter((list) => list.date === invoiceDate + "-08" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A9 = salesList.filter((list) => list.date === invoiceDate + "-09" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A10 = salesList.filter((list) => list.date === invoiceDate + "-10" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A11 = salesList.filter((list) => list.date === invoiceDate + "-11" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A12 = salesList.filter((list) => list.date === invoiceDate + "-12" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A13 = salesList.filter((list) => list.date === invoiceDate + "-13" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A14 = salesList.filter((list) => list.date === invoiceDate + "-14" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A15 = salesList.filter((list) => list.date === invoiceDate + "-15" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A16 = salesList.filter((list) => list.date === invoiceDate + "-16" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A17 = salesList.filter((list) => list.date === invoiceDate + "-17" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A18 = salesList.filter((list) => list.date === invoiceDate + "-18" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A19 = salesList.filter((list) => list.date === invoiceDate + "-19" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A20 = salesList.filter((list) => list.date === invoiceDate + "-20" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A21 = salesList.filter((list) => list.date === invoiceDate + "-21" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A22 = salesList.filter((list) => list.date === invoiceDate + "-22" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A23 = salesList.filter((list) => list.date === invoiceDate + "-23" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A24 = salesList.filter((list) => list.date === invoiceDate + "-24" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const A25 = salesList.filter((list) => list.date === invoiceDate + "-25" && list.shop ===invoiceShop).reduce((sum, i) => sum + i.price, 0).toLocaleString()

    // A勤合計
    const ASum = salesList.filter((list) =>new Date(previousMonth + "-26").getTime() <= new Date(list.date).getTime() 
                                        && new Date(list.date).getTime() <= new Date(invoiceDate + "-25").getTime()
                                        && list.shop === invoiceShop).reduce((sum, i) => sum + i.price, 0)


    // const sortDatePrice = salesList.filter((date) => 
    // new Date(minDate).getTime() <= new Date(date.date).getTime() && new Date(date.date).getTime() <= new Date(maxDate))
    // .reduce((sum, i) => sum + i.price, 0)

    // C勤売上
    const C26 = salesList.filter((list) => list.date === previousMonth + "-26" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C27 = salesList.filter((list) => list.date === previousMonth + "-27" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C28 = salesList.filter((list) => list.date === previousMonth + "-28" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C29 = salesList.filter((list) => list.date === previousMonth + "-29" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C30 = salesList.filter((list) => list.date === previousMonth + "-30" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C31 = salesList.filter((list) => list.date === previousMonth + "-31" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C1 = salesList.filter((list) => list.date === invoiceDate + "-01" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C2 = salesList.filter((list) => list.date === invoiceDate + "-02" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C3 = salesList.filter((list) => list.date === invoiceDate + "-03" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C4 = salesList.filter((list) => list.date === invoiceDate + "-04" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C5 = salesList.filter((list) => list.date === invoiceDate + "-05" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C6 = salesList.filter((list) => list.date === invoiceDate + "-06" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C7 = salesList.filter((list) => list.date === invoiceDate + "-07" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C8 = salesList.filter((list) => list.date === invoiceDate + "-08" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C9 = salesList.filter((list) => list.date === invoiceDate + "-09" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C10 = salesList.filter((list) => list.date === invoiceDate + "-10" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C11 = salesList.filter((list) => list.date === invoiceDate + "-11" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C12 = salesList.filter((list) => list.date === invoiceDate + "-12" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C13 = salesList.filter((list) => list.date === invoiceDate + "-13" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C14 = salesList.filter((list) => list.date === invoiceDate + "-14" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C15 = salesList.filter((list) => list.date === invoiceDate + "-15" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C16 = salesList.filter((list) => list.date === invoiceDate + "-16" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C17 = salesList.filter((list) => list.date === invoiceDate + "-17" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C18 = salesList.filter((list) => list.date === invoiceDate + "-18" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C19 = salesList.filter((list) => list.date === invoiceDate + "-19" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C20 = salesList.filter((list) => list.date === invoiceDate + "-20" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C21 = salesList.filter((list) => list.date === invoiceDate + "-21" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C22 = salesList.filter((list) => list.date === invoiceDate + "-22" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C23 = salesList.filter((list) => list.date === invoiceDate + "-23" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C24 = salesList.filter((list) => list.date === invoiceDate + "-24" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()
    const C25 = salesList.filter((list) => list.date === invoiceDate + "-25" && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0).toLocaleString()

     // C勤合計
     const CSum = salesList.filter((list) =>new Date(previousMonth + "-26").getTime() <= new Date(list.date).getTime() 
     && new Date(list.date).getTime() <= new Date(invoiceDate + "-25").getTime()
     && list.shop === invoiceShop + "C").reduce((sum, i) => sum + i.price, 0)

    //  給与計算

    const monthSalary = ASum * 0.6 + CSum * 0.62

    setSalary(monthSalary)

    console.log("monthSalary:", monthSalary)



    // スタイル

     const invoice = css`
      text-align: center;
     `

     const invoiceTable = css`
      margin: 0 auto;
      border: solid 1px;
      font-size: 1.3em;
      tr th {
        border: solid 1px;
      }
      tr td {
        border: solid 1px;
      }
    `

     

    
  return (
    <div css={invoice}>
        <h1>請求書</h1>
          <selection>
            <select value={invoiceShop} onChange={handleInvoiceShop}> 
                {selectShopList.map((Shop) => {
                    return (
                        <option key={Shop} value={Shop}>{Shop}</option>
                    )
                })}
            </select>
          </selection> 
          <selection>
            <select value={invoiceDate} onChange={handleInvoiceDate}> 
                {invoiceDateList.map((date) => {
                    return (
                        <option key={date} value={date}>{date}</option>
                    )
                })}
            </select>
          </selection> 
        <h3>{invoiceShop}</h3>
        <div>
          <table css={invoiceTable}>
              <tr><th></th><td>AB勤</td><td>C勤</td></tr>
              <tr><th>26日</th><td>{A26}</td><td>{C26}</td></tr>
              <tr><th>27日</th><td>{A27}</td><td>{C27}</td></tr>
              <tr><th>28日</th><td>{A28}</td><td>{C28}</td></tr>
              <tr><th>29日</th><td>{A29}</td><td>{C29}</td></tr>
              <tr><th>30日</th><td>{A30}</td><td>{C30}</td></tr>
              <tr><th>31日</th><td>{A31}</td><td>{C31}</td></tr>
              <tr><th>1日</th><td>{A1}</td><td>{C1}</td></tr>
              <tr><th>2日</th><td>{A2}</td><td>{C2}</td></tr>
              <tr><th>3日</th><td>{A3}</td><td>{C3}</td></tr>
              <tr><th>4日</th><td>{A4}</td><td>{C4}</td></tr>
              <tr><th>5日</th><td>{A5}</td><td>{C5}</td></tr>
              <tr><th>6日</th><td>{A6}</td><td>{C6}</td></tr>
              <tr><th>7日</th><td>{A7}</td><td>{C7}</td></tr>
              <tr><th>8日</th><td>{A8}</td><td>{C8}</td></tr>
              <tr><th>9日</th><td>{A9}</td><td>{C9}</td></tr>
              <tr><th>10日</th><td>{A10}</td><td>{C10}</td></tr>
              <tr><th>11日</th><td>{A11}</td><td>{C11}</td></tr>
              <tr><th>12日</th><td>{A12}</td><td>{C12}</td></tr>
              <tr><th>13日</th><td>{A13}</td><td>{C13}</td></tr>
              <tr><th>14日</th><td>{A14}</td><td>{C14}</td></tr>
              <tr><th>15日</th><td>{A15}</td><td>{C15}</td></tr>
              <tr><th>16日</th><td>{A16}</td><td>{C16}</td></tr>
              <tr><th>17日</th><td>{A17}</td><td>{C17}</td></tr>
              <tr><th>18日</th><td>{A18}</td><td>{C18}</td></tr>
              <tr><th>19日</th><td>{A19}</td><td>{C19}</td></tr>
              <tr><th>20日</th><td>{A20}</td><td>{C20}</td></tr>
              <tr><th>21日</th><td>{A21}</td><td>{C21}</td></tr>
              <tr><th>22日</th><td>{A22}</td><td>{C22}</td></tr>
              <tr><th>23日</th><td>{A23}</td><td>{C23}</td></tr>
              <tr><th>24日</th><td>{A24}</td><td>{C24}</td></tr>
              <tr><th>25日</th><td>{A25}</td><td>{C25}</td></tr>
              <tr><th>合計</th><td>{ASum.toLocaleString()}</td><td>{CSum.toLocaleString()}</td></tr>
          </table>
        </div>
    </div>
  )
}
