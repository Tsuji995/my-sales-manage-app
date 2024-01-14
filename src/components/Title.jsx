/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react"


import React from 'react'

export const Title  = () => {

  const styles = css`
    color: green;
  `

  return (
    <div css={styles}>
        <header>
            <h1>売上管理</h1>
        </header>
    </div>
  )
}
