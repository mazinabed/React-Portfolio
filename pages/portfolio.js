import Nav from './Nav';
import Footer from './footer';
import ScientificSearch from '../components/ScientificSearch';
import FoodandDrink from '../components/FoodandDrink'
export default function portfolio() {
    return(
<>

<Nav/>
<div class="container">
           
            <h2>Portfolio</h2>
            <hr size="5"/>
            <div class="row">
            <div class="col-4 col-sm-4">

        <ul>  
         <li><a href="https://mazinabed.github.io/projectOne/">Food and Drink</a>
        <FoodandDrink/>
         </li>
         </ul>
         </div>
         <div class="col-6 col-sm-4">
             <br/>
         <p>In this project user can search for food or drink by name and a list of options will pops up. The list will incloud Picture of the meal, recipes, ingredient and a video. Also, there is a Random Button that will generate a random meal with drink.</p>
       </div>
       </div>
       <hr size="5"/>
       <div class="row">
            <div class="col-4 col-sm-4">
        <ul>
         <li><a href="https://infinite-stream-60071.herokuapp.com/login">Search th Scientific</a>
         <ScientificSearch/>
         </li>
       </ul>
       </div>
       <div class="col-6 col-sm-4">
       <p>This app offers the user a method of searching for scientific and mathematical information using the Wolfram Alpha API.</p>
       <br/>
       <p>To use the app, sign up with your e-mail address and a password so you can log in. Put your question in the search fields and click on "Ask the Scientific !" If you are using Chrome, you can ask the Scientific a question with your voice!</p>
                                                               
     </div>                 
</div>
</div>


<Footer/>
</>
)
}