import React from 'react'
import {
    Card,Button,Label

} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import moment from 'moment'

import './css/app.css'
const HomePage = (datas) =>{
 
    return(
    <>      
             <Card>
                <Card.Content>
                    <Card.Header textAlign='center'>
                        <p> 
                           <span>  {moment().format("LT")},   </span> 
                           <span>  {moment().format("Do MMMM YYYY")}</span> 
                    </p><p>
                            {datas.sys.country}, {datas.name} 
                            
                        </p>
                    </Card.Header>
                </Card.Content>
            </Card>  
            <Card>
                <Card.Content textAlign='center'>
                    <img width="50%" src={`http://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`} />
                    <h3>{datas.weather[0].main}   </h3>
                    <p>{datas.weather[0].description}</p>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content textAlign='center'>
                    <p>
                        <i width='25px' class="fas fa-temperature-low"></i>
                        { ((datas.main.temp_min ) - 273.15) + "C" } 
                        <i class="fas fa-temperature-high"></i>
                        {((datas.main.temp_max  ) - 273.15) + "C" }
                    </p> 
                </Card.Content>
            </Card> 

            <Button className="sourceCode" >  
                    <a   href= "https://github.com/jyotip101/Weather-app-in-js/blob/main/src/script.js">
                        <i className='fab fa-github' /> source code
                    </a> 
            </Button> 
            
</>
    )
}

export default HomePage