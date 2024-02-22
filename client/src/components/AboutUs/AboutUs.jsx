import "./about.css";
// import ".aboutUs.css"
import photo from '../../Resources/Aboutus.jpg'
import aboutphoto from '../../Resources/Aboutus.jpg';
import mountain from '../../Resources/mountain.jpg'
import { Carousel } from 'react-responsive-carousel';
import HeaderTitle from "../HeaderTitle";
import 'react-responsive-carousel/lib/styles/carousel.min.css';



    function AboutUs() {
      return (
        <div>
        <HeaderTitle title={"About Us"} subtitle={"who we are"}/>
        <div className="outerbox" style={{width:'80vw',backgroundColor:'slate',margin:'0 10vw'}}>

{/* 
          <div className='box1' style={{marginTop:'80px',width:'100%',height:'500px',backgroundColor:''}} >
            <div style={{width:'100%',height:'400px'}}>
              <img src={aboutphoto} style={{width:'100%',height:'100%'}} alt=""   />
            </div>
          </div> */}
    
    
          <div className='box2' style={{display:'flex', marginTop:'30px',paddingRight:'10px',gap:'20px'}}>
            <div style={{flex:1}}>
              <h1 className="font-semibold">Our Vision</h1>
              <p>vision is to be the Earth's most customer-centric company, where customers can find and discover anything they might want to buy online. They aim to offer a wide range of products and services while providing a seamless and convenient shopping experience.</p>
            </div>
            <div style={{flex:1}}>
              <h1 className="font-semibold">Our Mission</h1>
              <p>They aim to build a place where people can come to find and discover anything they might want to buy online, while also empowering businesses, sellers, and content creators to thrive within their ecosystem.</p>
            </div>
          </div>
    
    
    
          <div className='box3' style={{display:'flex',marginTop:'80px', marginBottom:'80px',paddingRight:'15px',gap:'20px'}}>
            <div style={{flex:1,padding:'14px'}}>
              <h1 className="font-semibold">Who We Are</h1>
              <p><em>We Are" could be focused on their commitment to innovation and technological</em></p>
          <p>Rugged is a global technology company that focuses on e-commerce,providing trekking tools and hiking tools. We ahve multiple services like selling and renting the products</p>
        </div>
            <div style={{flex:1}}>
              <img src={mountain} style={{width:'100%',height:'100%'}} alt=""   />
    
            </div>
          </div>
    
          <div style={{width:'600px', margin:'0 auto',backgroundColor:'white'}}>
          <Carousel>
              <div style={{display:'flex',flexDirection:'column',height:'500px',justifyContent:'center',alignItems:'center',backgroundColor:'#333'}}>
                <div style={{width:'100px', height:'100px',borderRadius:'50px',overflow:'hidden'}}>
                <img src="https://picsum.photos/100/100" />
                </div>
                <p>Rugged is a  marketplace that offers an incredible array of products and services. It's known for its convenience, extensive selection, and speedy delivery options. The company has revolutionized online shopping, making it incredibly easy for customers to find virtually anything they need from the comfort of their homes</p>
            <h2>jon</h2>
            <p>customer</p>
                <p className="legend">1</p>
              </div>
    
    
              <div style={{display:'flex',flexDirection:'column',height:'500px',justifyContent:'center',alignItems:'center',backgroundColor:'burlywood'}}>
                <div style={{width:'100px', height:'100px',borderRadius:'50px',overflow:'hidden'}}>
                <img src="https://picsum.photos/100/100" />
                </div>
                <p> Overall, opinions about Rugged vary widely, reflecting both admiration for its convenience and criticism of its influence on various aspects of society and commerce.</p>
            <h2>Roman</h2>
            <p>customer</p>
                <p className="legend">3</p>
              </div>
    
              <div style={{display:'flex',flexDirection:'column',height:'500px',justifyContent:'center',alignItems:'center',backgroundColor:'lightpink'}}>
                <div style={{width:'100px', height:'100px',borderRadius:'50px',overflow:'hidden'}}>
                <img src="https://picsum.photos/100/100" />
                </div>
                <p>Rugged's commitment to technological advancement has had a profound impact on the digital landscape, shaping how we store, access, and utilize data and services.</p>
            <h2>Jack</h2>
            <p>customer</p>
                <p className="legend">3</p>
              </div>
              
          </Carousel>
          </div>
          </div>
          </div>
        

  );
}

export default AboutUs;








