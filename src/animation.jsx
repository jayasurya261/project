import './animation.css'
import food1 from './images/food_pics/food.png'
import food2 from './images/food_pics/food2.png'
import food3 from './images/food_pics/food3.png'
const Animation =()=>{
    return(
        <>
        <div className='foodAnimation'>
        <img src={food1} id='food1'/>
        <img src={food2} id='food2'/>
        <img src={food3} id='food3'/>
        </div>
        </>
    )
}
export default Animation;