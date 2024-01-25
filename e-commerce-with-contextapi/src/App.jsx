import React, { useState } from 'react'
import Routers from './config/router-condig/Routes'
import { Savepostprovider } from './context/Context'


const App = () => {
  const [save , setSave] = useState([])
  return (
    <Savepostprovider value={{save , setSave}}>

      <Routers/>
    </Savepostprovider>
  )
}

export default App