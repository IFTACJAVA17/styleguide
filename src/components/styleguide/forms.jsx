import React from 'react';
import { Form, FormGroup } from 'reactstrap';

import './typography.scss';
import './forms.scss';

class Forms extends React.Component {
    render () {
        return (
            <div id="forms">
            <h2>Formulär</h2>
                <Form>
                    <FormGroup>
                    <label htmlFor="input">Input</label>
                    <input type="text" className="form-control"
                    name="input" placeholder="input" />
                    <br/>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" 
                    name="password" placeholder="password"/>
                    <br />
                    <label htmlFor="select">Select</label>
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

export default Forms;