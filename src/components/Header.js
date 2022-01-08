import React from 'react'
import {Navbar, Nav, Dropdown} from 'react-bootstrap'
import logo from './tu.png';

const Header = () => {
  return (
    <header>
      <style type="text/css">
                            {`
                                .btn-flat {
                                            background-color:#0066ff;
                                            color: white;
                                            border-radius:20px;
                                            font-size: 12px;
      
                                            }

                                            .btn-flat:hover {
                                                background-color:#0066ff;
                                                color: white;
                                                border-radius:20px;
                                                font-size: 12px;
          
                                                }

                                                .btn-flat1 {
                                                  background-color:#0066ff;
                                                  color: white;
                                                  border-radius:6px;
                                                  font-size: 12px;
                                                  
            
                                                  }
      
                                                  .btn-flat1:hover {
                                                      background-color:#0066ff;
                                                      color: white;
                                                      border-radius:6px;
                                                      font-size: 12px;
                
                                                      }

                                .btn-ol {
                                            padding: 4px 10px;
                                            
                                            }
                                `}
                        </style>

                      {/* -------------BIG SCREENS----------- */}

                        <span className='nav1con'>
                        <Navbar className= "navbaar"  variant="dark" >
            
                        <div className="tulogo"> <a href="/"><img src={logo} alt="tulogo" width="60" height="60" /></a></div>
                        <Navbar.Brand  href="/" ><span className="logo" >Training and Placement Cell</span> <br/> <span className="logo2" >School of Engineering, Tezpur University</span> </Navbar.Brand>
                        
                        <Nav className='mx-auto naav'>
                        <Nav.Link href="/events" ><span className="navlnk">Events</span></Nav.Link>
                        <Nav.Link href="/placements" ><span className="navlnk">Placements</span></Nav.Link>
                        <Nav.Link href="/jobs" ><span className="navlnk">Latest Job Postings</span></Nav.Link>
                        <Nav.Link href="/news" ><span className="navlnk">News &amp; Notifications </span></Nav.Link>
                        <Nav.Link href="/about" ><span className="navlnk">About Us </span></Nav.Link>
                        <Dropdown>
                        <Dropdown.Toggle variant='flat' size="l">
                          More
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href="http://www.tezu.ernet.in/" target="_blank"> TU Home</Dropdown.Item>
                        <Dropdown.Item href="/stories">Stories</Dropdown.Item>
                        <Dropdown.Item href="/visitors">Visitors</Dropdown.Item>
                        <Dropdown.Item href="/people">People</Dropdown.Item>
                        <Dropdown.Item href="/admin">Admin Console</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        </Nav> 
                        
                        </Navbar>

                        </span>
            

                      {/* ----------SMALL SCREENS------------ */}
                      <span className="nav2con">
                      <Navbar className= "navbaar2"  variant="dark" >
                      <span className='sidetoside'>

                      
                      <div className="tulogo"> <a href="/"><img src={logo} alt="tulogo" width="60" height="60" /></a></div>
                      <Navbar.Brand  href="/" ><span className="logo" >T&amp;P Cell</span> <br/> <span className="logo2" >SoE, Tezpur University</span> </Navbar.Brand>
                      <Nav className='mx-auto naav'>
                      <Dropdown>
                        <span className="hb" >
                        <Dropdown.Toggle variant='flat1' size="ol" >
                      <div className="hbmenu"></div>
                      <div className="hbmenu"></div>
                      <div className="hbmenu"></div>
                      </Dropdown.Toggle>
                        </span>
                      

                      <Dropdown.Menu align="end">
                      <Dropdown.Item href="/events" >Events</Dropdown.Item>
                      <Dropdown.Item href="/placements" >Placements</Dropdown.Item>
                      <Dropdown.Item href="/jobs" >Latest Job Postings</Dropdown.Item>
                      <Dropdown.Item href="/news" >News &amp; Notifications </Dropdown.Item>
                      <Dropdown.Item href="/about" >About Us </Dropdown.Item>
                      <Dropdown.Item href="http://www.tezu.ernet.in/" target="_blank"> TU Home</Dropdown.Item>
                      <Dropdown.Item href="/stories">Stories</Dropdown.Item>
                      <Dropdown.Item href="/visitors">Visitors</Dropdown.Item>
                      <Dropdown.Item href="/people">People</Dropdown.Item>
                      <Dropdown.Item href="/admin">Admin Console</Dropdown.Item>
                      </Dropdown.Menu>
                      </Dropdown>
                      </Nav> 
                      </span>
                      </Navbar>

                      </span>
           
            
          </header>
  )
}

export default Header

