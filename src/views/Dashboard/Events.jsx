import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Row, Col } from "react-bootstrap";
import ChartistGraph from "react-chartist";
import { Card } from "components/Card/Card.jsx";
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
            statsIcon="fa fa-history"
            id="chartHours"
            title="Users Behavior"
            category="24 Hours performance"
            stats="Updated 3 minutes ago"
            content={
              <div className="ct-chart">
                <ChartistGraph
                  data={dataSales}
                  type="Line"
                  options={optionsSales}
                  responsiveOptions={responsiveSales}
                />
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
