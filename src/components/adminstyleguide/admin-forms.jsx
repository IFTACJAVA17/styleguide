import React from 'react';
import { Form, FormGroup } from 'reactstrap';

import './admin-typography.scss';
import './admin-forms.scss';

class AdminForms extends React.Component {
    render () {
        return (
            <div id="forms">
            <h2 className='admin-h2'>Formulär</h2>
                <Form>
                    <FormGroup>
                    <label for="input">Input</label>
                    <input type="text" className="form-control"
                    name="input" placeholder="input" />
                    <br/>
                    <label for="password">Password</label>
                    <input type="password" className="form-control" 
                    name="password" placeholder="password"/>
                    <br />
                    <label for="select">Select</label>
                    <select className="form-control"
                    name="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default AdminForms;