import React from 'react';

import './color-scheme-basic.scss';

class ColorSchemeBasic extends React.Component {

    render () {
        return (
                <div className="colorSwatchContainer">
                <div className="row">
                    <div className="colorSwatch primary">
                        <div className="info">
                            <h5>Malachite</h5>
                            <p>Primärfärg <br />
                            #68CB85 <br />
                            <code>$primary-color</code></p>
                        </div>
                    </div>
                    <div className="colorSwatch secondary">
                        <div className="info">
                            <h5>Imperial</h5>
                            <p>Sekundärfärg <br />
                            #193F72<br />
                            <code>$secondary-color</code></p>
                        </div>
                    </div>
                    <div className="colorSwatch accent">
                        <div className="info">
                            <h5>New York</h5>
                            <p>Accentfärg <br />
                            #D77F7E <br />
                            <code>$accent-color</code></p>
                        </div>
                    </div>
                    <div className="colorSwatch accent-light">
                        <div className="info">
                            <h5>Vanilla</h5>
                            <p>Accentfärg - ljus <br />
                            #F6EAAC <br />
                            <code>$accent-light-color</code></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="colorSwatch accent-dark">
                        <div className="info">
                            <h5>Lavender</h5>
                            <p>Accentfärg - mörk <br />
                            #82529A <br />
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

export default ColorSchemeBasic;