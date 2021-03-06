import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Row, Col } from "react-bootstrap";
import ChartistGraph from "react-chartist";
import { Card } from "components/Card/Card.jsx";
import  MyUploader  from "./Image.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

const URL = 'http://localhost:4000/mentors';
const EventList = (props) =>
  { console.log(props);
    const list = ({event}) =>{
       if(event)
      {return event.map(function(item){

        return(
        <Col md={4}>

          <Card

            title={item.event_name}
            category={item.prize}
            stats={item.points}
            content={
              <div>
              <div>
              {item.description}<br/>
              </div>
              <br/>
              <div>
                <MyUploader id={item.id}/>
                </div>
                <div className="text-center">
                  <a href={item.facebook}><Button simple>
                    <i style={{color:'blue'}} className="fa fa-facebook-square fa-2x" />
                  </Button></a>
                  <a href={item.twitter}><Button simple>
                    <i style={{color:'blue'}} className="fa fa-twitter fa-2x" />
                  </Button></a>

                  <a href={item.instagram}><Button simple>
                    <i style={{color:'blue'}} className="fa fa-instagram fa-2x" />
                  </Button></a>
                </div>
                </div>
            }

          />

        </Col>


        )
      })
    }
  }

  return(<div>
  <h4>Check out the events!</h4>

  {list(props)}
</div>
)
}



export default EventList;
