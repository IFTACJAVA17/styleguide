import React from 'react';
import { Button, ButtonToolbar } from 'reactstrap';

import './typography.scss';
import './buttons.scss';

class Buttons extends React.Component {
    render () {
        return (
            <div id="buttons">
                <h2>Knappar</h2>
                <p>Knapparna är stora, tydliga och bör innehålla en kort text, sällan 
                mer än tre ord. Texten ska förklara vad knappen gör, och helst vara "aktiv" ("Läs mer" inte "Mer info").
                Använd grundklassen <code>.btn</code> och klassen för den specifika knappen, t.ex <code>.btn-default</code></p>
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

export default Buttons;