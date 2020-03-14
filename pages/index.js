import Nav from './Nav'
import Footer from './footer'
import MyImage from '../components/MyImage'
export default function Index() {
    return(
  
    <>
    
<Nav/>

    <body>
    <div className="container">
    <div className="row">
                                
 <div className="col-6">
 <h2> About Me</h2>  
<a href="https://www.linkedin.com/in/mazin-abed-90485826/">linkedin</a>
<a href="https://github.com/mazinabed">GitHub</a>
</div>
</div>
<div className="row">
<div className="col-4 col-sm-8">
    
<hr size="5"/>
</div>
<div className="col-4 col-sm-8">
<MyImage/>
      <p> Hello Everyone!</p>
      <p>My name Mazin Abed "I know it is on the top of the page", and was born and raised in Iraq. I worked with US army and Multi National forces in Iraqi freedom Operations back in 2003 as atranslator and cultural adviser. In 2009 I moved to Austin TX  "I did not choose Austin, Austin chose me!!" and start warking in Logistics with the same company for 10 years. </p>
 
 <p>The fun part start in 2019 when I joined the Bootcopm at the UT in Austin TX where I learned how to code and create web pages. This was huge transition and I was able to combine my knowlegde in translation, Logistics and coding to make new path for sucsess and new furture for my career.</p>
 </div>
 </div>

 </div>
 </body>
 <Footer/>
  
  </>

    )}