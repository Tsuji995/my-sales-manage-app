/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import React from 'react'

function ShopResult({salesList, date}) {
    


    const _shopPrice = salesList.filter((list) => list.date === date)
  
    // const kizokuPrice = _shopPrice.filter((list) =>list.shop === "貴")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const rakuRakuPrice = _shopPrice.filter((list) =>list.shop === "楽")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const honTenPrice = _shopPrice.filter((list) =>list.shop === "本")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const tFPrice = _shopPrice.filter((list) =>list.shop === "TF")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const koriDouPrice = _shopPrice.filter((list) =>list.shop === "道")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const koriJyuPrice = _shopPrice.filter((list) =>list.shop === "重")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const niYonPrice = _shopPrice.filter((list) =>list.shop === "24")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const rakusuPrice = _shopPrice.filter((list) =>list.shop === "ラ")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const zuboPrice = _shopPrice.filter((list) =>list.shop === "ず")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const plusPrice = _shopPrice.filter((list) =>list.shop === "プ")
    //                            .reduce((sum, i) => sum + i.price, 0)

    // const kizokuCPrice = _shopPrice.filter((list) =>list.shop === "貴C")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const rakuRakuCPrice = _shopPrice.filter((list) =>list.shop === "楽C")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const honTenCPrice = _shopPrice.filter((list) =>list.shop === "本C")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const tFCPrice = _shopPrice.filter((list) =>list.shop === "TFC")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const koriDouCPrice = _shopPrice.filter((list) =>list.shop === "道C")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const koriJyuCPrice = _shopPrice.filter((list) =>list.shop === "重C")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const niYonCPrice = _shopPrice.filter((list) =>list.shop === "24C")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const rakusuCPrice = _shopPrice.filter((list) =>list.shop === "ラC")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const zuboCPrice = _shopPrice.filter((list) =>list.shop === "ずC")
    //                            .reduce((sum, i) => sum + i.price, 0)
  
    // const plusCPrice = _shopPrice.filter((list) =>list.shop === "プC")
    //                            .reduce((sum, i) => sum + i.price, 0)
                              
    const salesListByDate = salesList.filter((list) => list.date === date)
  
    const _uniqueShop = salesListByDate.map((list) => {
      return list.shop
    })
  
    const setUniqueShop = new Set(_uniqueShop);
    const uniqueShop = [...setUniqueShop]

    const shopResult = css`
      display: flex;
      justify-content: center;
    `

  return (
    <div css={shopResult}>

              {uniqueShop.map((shop) => {
                return (
                    <div className="shopNameList">
                        <p>{shop}:{_shopPrice.filter((list) =>list.shop === shop)
                                            .reduce((sum, i) => sum + i.price, 0)
                                            .toLocaleString()}</p>
                    </div>

                )
            })}

    </div>  
  )
}

export default ShopResult