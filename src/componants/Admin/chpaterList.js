import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'
export const ChapterList = ({ _setOpenCallback,edit }) => {
    return (
        <Card>
            <Card.Body>
                <div className='text-end m-3'>
                    <Button
                        onClick={() => _setOpenCallback("add")}
                    >
                        Add
                    </Button>
                </div>
                <Table striped bordered className='text-center'>
                    <thead>
                        <tr>
                            <th></th>                            
                            <th>Subject</th>
                            <th>Topic</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Maths</td>
                            <td>Addition</td>
                            <td>
                                <Button className='me-sm-1'
                                onClick={()=>{_setOpenCallback("edit")}}
                                >
                                    <i className='fa fa-edit'></i>
                                </Button>                                
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}
