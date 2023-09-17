import shoes from './image/shoe_image.png'
import flipkart from './image/flipkart.png'
import amazon from './image/amazon.png'

export default function Hero(){
    return (
        <div className="hero">
            <div className="text-container">
                <h1 className="heading">
                    YOUR FEET
                    DESERVE
                    THE BEST
                </h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div>
                    <button className="btn-1">Shop Now</button>
                    <button className="btn-2">Category</button>
                </div>
                <div>
                    <p>Also Available On</p>
                    <img src={flipkart} alt=""/>
                    <img src={amazon} alt=""/>
                </div>
            </div>
            <div className="shoe-img">
                <img src={shoes} alt="" />
            </div>
        </div>
    )
}