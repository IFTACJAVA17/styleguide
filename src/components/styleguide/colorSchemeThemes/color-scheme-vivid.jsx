import React from 'react';

const primaryStyle = {
    backgroundColor: '#6ED3CF',
    color: '#1D1E1E'
};

const secondaryStyle = {
    backgroundColor: '#9068BE',
    color: '#1D1E1E'
}

const accentStyle = {
    backgroundColor: '#E62739',
    color: '#E1E8F0'
}

const accentLightStyle = {
    backgroundColor: '#EF7581',
    color: '#1D1E1E'
}

const accentDarkStyle = {
    backgroundColor: '#931925',
    color: '#E1E8F0'
}


class ColorSchemeVivid extends React.Component {

    render () {
        return (
                <div className="colorSwatchContainer">
                <div className="row">
                    <div className="colorSwatch" style={primaryStyle}>
                        <div className="info">
                            <h5 style={primaryStyle}>Middle Teal</h5>
                            <p>Primärfärg <br />
                            #6ED3CF <br />
                            <code>$primary-color</code></p>
                        </div>
                    </div>
                    <div className="colorSwatch" style={secondaryStyle}>
                        <div className="info">
                            <h5 style={secondaryStyle}>Middle Purp</h5>
                            <p>Sekundärfärg <br />
                            #9068BE<br />
                            <code>$secondary-color</code></p>
                        </div>
                    </div>
                    <div className="colorSwatch" style={accentStyle}>
                        <div className="info">
                            <h5>Rose Madder</h5>
                            <p>Accentfärg <br />
                            #E62739 <br />
                            <code>$accent-color</code></p>
                        </div>
                    </div>
                    <div className="colorSwatch" style={accentLightStyle}>
                        <div className="info">
                            <h5 style={accentLightStyle}>Light Coral</h5>
                            <p>Accentfärg - ljus <br />
                            #EF7581 <br />
                            <code>$accent-light-color</code></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="colorSwatch" style={accentDarkStyle}>
                        <div className="info">
                            <h5>Vivid Auburn</h5>
                            <p>Accentfärg - mörk <br />
                            #931925 <br />
                            <code>$accent-dark-color</code></p>
                        </div>
                    </div>
                    <div className="colorSwatch white">
                        <div className="info">
                            <h5>Azureish white</h5>
                            <p>Vitt <br />
                            #E1E8F0 <br />
                            <code>$white-color</code></p>
                        </div>
                    </div>
                    <div className="colorSwatch black">
                        <div className="info">
                            <h5>Eerie black</h5>
                            <p>Svart <br />
                            #1D1E1E <br />
                            <code>$black-color</code></p>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}

export default ColorSchemeVivid;