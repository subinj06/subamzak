import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
export default function ProjectIndex({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <div>
          <div className="project">
                      <div className="col-5 col-12-medium">
                        <h2 className="Title">Grade</h2>
                        <ul style={{marginBottom:'0px', listStyle:'none', margin:0, padding:0}}>
                          <li style={{marginRight:'19%', padding:0, float:'left'}}><Link to="/First"><h4>1st</h4></Link></li>
                          <li  style={{marginRight:'19%', padding:0, float:'left'}}><Link to="/Second"><h4>2nd</h4> </Link></li>
                          <li style={{marginRight:'19%', padding:0, float:'left'}}><Link to="/Third"><h4>3rd</h4> </Link></li>
                          <li style={{marginRight:'19%', padding:0, float:'left'}}><Link to="/Fourth"><h4>4th</h4> </Link></li>
                          <li style={{marginRight:'0%', padding:0, float:'left'}}><Link to="/Project"><h4>ALL  </h4></Link></li>
                        </ul>

                      </div>

          </div>

              <br></br><br></br>
              <hr style={{marginTop:'0px', width:'100%'}}/>
      </div>
  );
}
