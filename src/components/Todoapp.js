import { AppBar, Button, TextField, Toolbar, Typography } from '@material-ui/core'
import React, { useDebugValue, useState } from 'react'

const Todoapp = () => {

    var [userTask,setuserTask]=useState("")
    var[myTask,setmyTask]=useState([])

    const addToTask=()=>{
        setmyTask(

        myTask=>[...myTask,userTask]

        )


    }
    const myTaskHandle=(event)=>{

        setuserTask(
            userTask=event.target.value
        )

    }
    return (
        <div>
           
           <TextField
           value={userTask}
           onChange={myTaskHandle}
           fullWidth
           label="Enter a task"
           variant="outlined"
           margin="normal" ></TextField>

           <Button
           onClick={addToTask}
           fullWidth
           color="primary"
           variant="contained"
           >Submit</Button>

         <ul>
             {myTask.map((value,index)=>{
               return <div>
                   <li> {value}</li>

               </div>
             }
             )}
         </ul>

         </div>
    )
}

export default Todoapp
