import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../static/img/1.jpeg'
import img2 from '../../static/img/3.jpeg'
import img3 from '../../static/img/4.jpeg'
import img4 from '../../static/img/5.jpeg'
import img5 from '../../static/img/6.jpeg'
import img6 from '../../static/img/7.jpeg'
import img7 from '../../static/img/8.jpeg'
import img8 from '../../static/img/9.jpeg'
import img9 from '../../static/img/10.jpeg'
import img10 from '../../static/img/11.jpeg'
import img11 from '../../static/img/12.jpg'
import img12 from '../../static/img/13.jpg'
import img13 from '../../static/img/14.jpg'
import img14 from '../../static/img/15.jpg'
import img15 from '../../static/img/16.jpg'
import img16 from '../../static/img/17.jpg'
import img17 from '../../static/img/18.jpg'
import img18 from '../../static/img/19.jpg'
import img19 from '../../static/img/20.jpg'
import img20 from '../../static/img/21.jpg'
import img21 from '../../static/img/22.jpg'


export const Mycarousel:React.FC<{}>=()=>{
    return <>
       <Carousel>
      <Carousel.Item>
        <img width="100%" height="500px" src={img1}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" height="400px"  src={img2}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" height="400px"  src={img3}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
}