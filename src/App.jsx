import { useState } from 'react'
import Image from './components/Image'
import Video from './components/Video'

import './App.css'

function App() {


  return (
    <div className="container">
      <h1 className="fs-1">
        🌲🏋️‍♂️ David's Tree Removal in Tacoma, Washington 🌲
      </h1>

      <p>
        David is able to cut down dead or dying trees by digging the area around the trunk and roots and cutting them (manworking the tree skillfully) using a plethora of tools (if there is a reasonable need to do so).
      </p>

      <div className="d-flex justify-content-around column-gap-1 flex-wrap row-gap-1 align-items-center">
        <div>
          <Image src="/david-removing-tree.jpg" text="David working on a tree" w="320px" /> 
        </div>
        <div>
          <Video src={"./strikes-against-root.mp4"} caption={"Chopping roots"} w={"320px"} />
        </div>
        <div className="d-flex column-gap-1 align-items-center flex-wrap row-gap-3 justify-content-around">
          <Video src={"./tree-falling.mp4"} caption={"Tree felled!"} w = "320px" />
          <Image src="./thumbs-up-sad.png" text={"David does not really like to cut down a tree, it is just work that has to be done"} w="340px" />
        </div>
      </div>

      

      <p>
        Please <a href="mailto:regoky@outlook.com">email IT department Kyle</a> for pricing and David's contact information if you have a need for a tree to be removed in Tacoma.
      </p>
    </div>
  )
}

export default App
