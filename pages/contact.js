import Nav from './Nav'
import Footer from './footer'
export default function contact() {
    return(
  
    <>
<Nav/>

<div className="container">
       <h2>Contact</h2>
        <hr size="4"/>
        <hr size="5"/>
        <div clasName="row">
            <div className="col col-sm-4">
            <form>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
          
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message" ></textarea>
            </div>
            <button type="button" className="btn btn-primary">Submit</button>
          </form>
    
          </div>
        
        </div>
        
</div>

<Footer/>

</>
    )
}