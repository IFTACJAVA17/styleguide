import React from 'react';

const primaryStyle = {
    backgroundColor: '#E8C7DE',
    color: '#1E1E1E'
};

const secondaryStyle = {
    backgroundColor: '#69626D',
    color: '#F4F4F4'
}

const accentStyle = {
    backgroundColor: '#9CA7BC',
    color: '#1E1E1E'
}

const accentLightStyle = {
    backgroundColor: '#DFC9CF',
    color: '#1E1E1E'
}

const accentDarkStyle = {
    backgroundColor: '#94AA9C',
    color: '#1E1E1E'
}


class ColorSchemeMuted extends React.Component {

    render () {
        return (
                <div className="colorSwatchContainer">
                <div className="row">
                    <div className="colorSwatch" style={primaryStyle}>
                        <div className="info">
                            <h5 style={primaryStyle}>Queen Pink</h5>
                            <p>Primärfärg <br />
                            #E8C7DE <br />
                            <code>$primary-color</code></p>
                        </div>
                    </div>
                    <div className="colorSwatch" style={secondaryStyle}>
                        <div className="info">
                            <h5 style={secondaryStyle}>Dim gray</h5>
                            <p>Sekundärfärg <br />
                            #69626D<br />
                            <code>$secondary-color</code></p>
                        </div>
                    </div>
                    <div className="colorSwatch" style={accentStyle}>
                        <div className="info">
                            <h5 style={accentStyle}>Pewter Blue</h5>
                            <p>Accentfärg <br />
                            #9CA7BC <br />
                            <code>$accent-color</code></p>
                        </div>
                    </div>
                    <div className="colorSwatch" style={accentLightStyle}>
                        <div className="info">
                            <h5 style={accentLightStyle}>Dust Storm</h5>
                            <p>Accentfärg - ljus <br />
                            #DFC9CF <br />
                            <code>$accent-light-color</code></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="colorSwatch" style={accentDarkStyle}>
                        <div className="info">
                            <h5 style={accentDarkStyle}>Spanish Gray</h5>
                            <p>Accentfärg - mörk <br />
                            #94AA9C <br />
                            <code>$accent-dark-color</code></p>
                        </div>
                    </div>
                    <div className="colorSwatch white">
                        <div className="info">
                            <h5>White Smoke</h5>
                            <p>Vitt <br />
                            #F4F4F4 <br />
                            <code>$white-color</code></p>
                        </div>
                    </div>
                    <div className="colorSwatch black">
                        <div className="info">
                            <h5>Eerie black</h5>
                            <p>Svart <br />
                            #1E1E1E <br />
                            <code>$black-color</code></p>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}

export default ColorSchemeMuted;