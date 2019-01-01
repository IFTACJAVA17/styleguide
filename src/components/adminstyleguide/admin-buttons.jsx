import React from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { Link } from 'react-router-dom';

import './admin-typography.scss';
import './../styleguide/buttons';

class AdminButtons extends React.Component {
    render () {
        return (
            <div id="buttons">
                <h2 className='admin-h2'>Knappar</h2>
                Knappar för admin UI går i samma linje som den primära styleguiden. <Link to='/style/#buttons'>Klicka här för mer information</Link>.
                <ButtonToolbar >
                    <Button className="btn btn-default">.btn-default</Button>
                    <Button className="btn btn-success">.btn-succes</Button>
                    <Button className="btn btn-info">.btn-info</Button>
                    <Button className="btn btn-warning">.btn-warning</Button>
                </ButtonToolbar>
            </div>
        )
    }
}

export default AdminButtons;