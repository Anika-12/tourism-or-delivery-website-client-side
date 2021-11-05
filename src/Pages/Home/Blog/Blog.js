import React ,{ useEffect, useState }from 'react';
import "./Blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
    const [teams, setTeams] = useState("");
    const [allTeams, setAllTeams] = useState([]);
    const handleChange = (e) => {
      const searchText = e.target.value;
      setTeams(searchText);
      console.log(e.target.value);
    };
  
    useEffect(() => {
      fetch('./blog.JSON')
        .then((res) => res.json())
        .then((data) => setAllTeams(data));
    },);
    return (
      <div id="blog" className="container all-teams">
        <div className="all-blog">
          
          <h1>Food Articles</h1>
          <h1>---------</h1>
         
        </div>
      
       
          <div>
          <div class="row">
            {allTeams?.map((pd) => (
               
                <div class=" row">
              < div className="card  w-18rem " >
              <img className="w-100" src={pd.img}  alt=""/>
              <div className="card-body">
                 
                <button className="btn-dark">Read Article</button>
              </div>
            </div>
            </div>
           
            ))}
             </div>
          </div>
          <br></br>
          <div className="all-blog">
          <h1>SATISFIED CLIENTS</h1>
          <h1>---------</h1>
          <h2>What Our Clients Say------</h2><br></br>
          <p className="card-body">1. This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.</p>

<p className="card-body">2. First time in (RN) and YOU have to go! It’s the cutest little spot with amazing food. The (FN) is to die for. IT WAS FIRE!! The service we received was so amazing and we will definitely be back again. They made us feel welcomed and gave us an amazing experience.</p>

<p className="card-body">3. It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.</p>
       </div>
        </div>
        
              
          
      );
};

export default Blog;