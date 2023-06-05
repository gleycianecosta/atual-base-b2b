import React from 'react'
import { Helmet } from 'vtex.render-runtime'
import favicon from './images/favicon.svg'

function MyHeadTags() {
  return (
    <>
      <Helmet>
        <title>Bade de Appoio</title>
        <link rel="icon" href={favicon} />
      </Helmet>
    </>
  )
}

export default MyHeadTags