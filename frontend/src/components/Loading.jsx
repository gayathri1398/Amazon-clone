import React from "react";
import {ImSpinner3} from 'react-icons/im'

const Loading=()=>{
    return<>
    <div >
      <span className="text-xl flex flex-row gap-2 justify-center items-center">Loading<ImSpinner3/></span>
    </div>
    </>
}

export default Loading;