import React from 'react'
import  {sidebarIcons}  from './sidebardata'
import { Nav, Stack } from 'react-bootstrap'
export default function sideBar() {
  return (
    <div classname>
        {sidebarIcons.map((icons , index) => {
            return(

                <Stack className='' direction='horizontal' >
                    <div id={index} >

                    <Nav varient='pills'>
                        <Nav.Item>
                            <Nav.Link > {icons.icon} {icons.title} </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </div>
                </Stack>
            )
           
        })}
    </div>
  )
}
