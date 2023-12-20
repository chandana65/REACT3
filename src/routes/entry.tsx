import { Login } from "../pages/Login.page"
import { Link, Outlet } from "react-router-dom"
import { AllLEssons } from "../pages/ALLlessons"
import { MyHook } from "../components/MYHook"
import { Button, Paper } from "@mui/material"
import { Home } from "../pages/Home.page"
import { Layout } from "../layout/layout"
import { Register} from "../pages/register.page"



export const EntryRoads={
    path:'/',
    element:<>
        <Paper>  
        <h1>where do u want to go</h1>
        <Link to="/all-lessons"> <Button variant="contained" color="success">
  lessons
</Button>
</Link>
<Link to={"/project/login"}>
<Button variant="outlined" color="error">
    
project
</Button></Link>
      
        </Paper>
    </>
}


export const AllLessons={
    path:'/all-lessons',
    element:<AllLEssons/>
}

export const AllProject={
    path:'/project',
    element:<><Layout><Outlet/></Layout></>,
    children:[
{
    path:'login',
    element:< Login/>
},
{
    path:'register',
    element:<Register/>
},
{
    path:'home',
    element:<Home/>
}
    ]
}