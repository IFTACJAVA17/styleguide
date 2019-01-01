import React from 'react';
import ColorSchemeBasic from './colorSchemeThemes/color-scheme-basic';
import ColorSchemeVivid from './colorSchemeThemes/color-scheme-vivid';
import ColorSchemeMuted from './colorSchemeThemes/color-scheme-muted';
import  {Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './color-scheme.scss';

class ColorScheme extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.pickBasic = this.pickBasic.bind(this);
        this.pickVivid = this.pickVivid.bind(this);
        this.pickMuted = this.pickMuted.bind(this);
        this.state = {
            dropdownOpen: false,
            theme: 'basic'
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen : !prevState.dropdownOpen
        }));
    }

    pickBasic() {
        this.setState({
            theme: 'basic'
        })
    }

    pickVivid() {
        this.setState({
            theme: 'vivid'
        })
    }

    pickMuted() {
        this.setState({
            theme: 'muted'
        })
    }

    renderTheme() {
        if(this.state.theme === 'basic') {
            return (
                <ColorSchemeBasic />
            );
        } if(this.state.theme === 'vivid') {
            return (
                <ColorSchemeVivid />
            )
        } if(this.state.theme === 'muted') {
            return (
                <ColorSchemeMuted />
            )
        }
        else {
            return null;
        }
    }

    render () {
        return (
            <div id="colors">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle className="text-black themePicker" caret>
                        Välj tema
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={this.pickBasic}>Theme 'Basic'</DropdownItem>
                        <DropdownItem onClick={this.pickVivid}>Theme 'Vivid'</DropdownItem>
                        <DropdownItem onClick={this.pickMuted}>Theme 'Muted'</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <h2>Färger</h2>
                <p>Färgerna bör användas med dom specificerade variablerna.
                    Detta för att enkelt kunna applicera nya teman.
                    Det finns klasser för att applicera färgen som 
                    bakgrund <code>.bg-primary</code> och 
                    text <code>.text-primary</code> för varje färg.
                </p>
                {this.renderTheme()}
            </div>
        )
    }
}

export default ColorScheme;