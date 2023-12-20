import { Grid } from "@mui/material"
import { Mycarousel } from "../components/carousel/Mycarousel"
import { MyNavbar} from "../components/navbar/MYnavbar"
import { Mycard } from "../components/cards/Mycard"
import img1 from '../static/img/1.jpeg'
import img2 from '../static/img/11.jpeg'
import img3 from '../static/img/10.jpeg'
import img4 from '../static/img/3.jpeg'
import img5 from '../static/img/4.jpeg'
import img6 from '../static/img/5.jpeg'
import img7 from '../static/img/6.jpeg'
import img8 from '../static/img/7.jpeg'
import img9 from '../static/img/8.jpeg'
import img10 from '../static/img/9.jpeg'
import img11 from '../static/img/12.jpg'
import img12 from '../static/img/13.jpg'
import img13 from '../static/img/14.jpg'
import img14 from '../static/img/15.jpg'
import img15 from '../static/img/16.jpg'
import img16 from '../static/img/17.jpg'
import img17 from '../static/img/18.jpg'
import img18 from '../static/img/19.jpg'
import img19 from '../static/img/20.jpg'
import img20 from '../static/img/21.jpg'
import img21 from '../static/img/22.jpg'

import { useEffect, useState } from "react"
import { flipkartApi } from  "../api/flipcart"

export const Home:React.FC<{}>=()=>{
    let [data,setData]=useState<any>([]);
    useEffect(()=>{
(async()=>{
    setData(await flipkartApi()) 
})()
    },[])
    return <>
    <MyNavbar/>
    <br />
    <Grid

  direction="row"
  justifyContent="center"
  alignItems="center"
>
<Mycarousel/>
</Grid>
<br /><br/>
<Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="center"
  
>
<Mycard img={img1} title={'long kurthi'}/><div/>
<Mycard img={img2} title={'pink kurtha'}/><div/>
<Mycard img={img3} title={'gold'}/> <br />
<Mycard img={img4} title={'blue one'}/>
<Mycard img={img5} title={'green'}/>
<Mycard img={img6} title={'white'}/>
<Mycard img={img7} title={'sleev less one'}/>
<Mycard img={img8} title={'kurthi'}/>
<Mycard img={img9} title={'pink long'}/>
<Mycard img={img10} title={'blue one'}/>
<Mycard img={img11} title={'full sleev'}/>
<Mycard img={img12} title={'black one'}/>
<Mycard img={img13} title={'orange'}/>
<Mycard img={img14} title={'marron'}/>
<Mycard img={img15} title={'pink one'}/>
<Mycard img={img16} title={'for jeens'}/>
<Mycard img={img17} title={'white one'}/>
<Mycard img={img18} title={'ligth-blue one'}/>
<Mycard img={img19} title={'gold-kurtha'}/>
<Mycard img={img20} title={'ornge'}/>
<Mycard img={img21} title={'red one'}/>







</Grid>
 
</>
}