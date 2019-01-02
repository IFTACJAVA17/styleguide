import React from 'react';

import './admin-color-scheme.scss';

class AdminColorScheme extends React.Component {

    render() {
        return (
            <div id="colors">
                <h2 className='admin-h2'>Färger</h2>
                <p>Färgerna bör användas med dom specificerade variablerna.
                    Detta för att enkelt kunna applicera nya teman.
                    Det finns klasser för att applicera färgen som
                    bakgrund <code>.bg-admin-primary</code> och
                    text <code>.text-admin-primary</code> för varje färg.
                </p>
                <div className="colorSwatchContainer">
                    <div className="row">
                        <div className="colorSwatch admin-primary">
                            <div className="info">
                                <h5>Silver Foil</h5>
                                <p>Primärfärg <br />
                                    #AFAFAF <br />
                                    <code>$primary-admin-color</code></p>
                            </div>
                        </div>
                        <div className="colorSwatch admin-secondary">
                            <div className="info">
                                <h5>Granite Gray</h5>
                                <p>Sekundärfärg <br />
                                    #676767 <br />
                                    <code>$secondary-admin-color</code></p>
                            </div>
                        </div>
                        <div className="colorSwatch admin-accent">
                            <div className="info">
                                <h5>Crimson</h5>
                                <p>Accentfärg <br />
                                    #D61A3C <br />
                                    <code>$accent-admin-color</code></p>
                            </div>
                        </div>
                        <div className="colorSwatch admin-accent-light">
                            <div className="info">
                                <h5>Very light red</h5>
                                <p>Accentfärg - Ljus<br />
                                    #ff9994 <br />
                                    <code>$accent-light-admin-color</code></p>
                            </div>
                        </div>
                        <div className="colorSwatch admin-accent-dark">
                            <div className="info">
                                <h5>Blood Red</h5>
                                <p>Accentfärg - Mörk<br />
                                    #ff9994 <br />
                                    <code>$accent-dark-admin-color</code></p>
                            </div>
                        </div>
                        <div className="colorSwatch admin-white">
                            <div className="info">
                                <h5>White</h5>
                                <p>Vit färg<br />
                                    #FFFFFF <br />
                                    <code>$white-admin-color</code></p>
                            </div>
                        </div>
                        <div className="colorSwatch admin-black">
                            <div className="info">
                                <h5>Black</h5>
                                <p>Svart färg<br />
                                    #000000 <br />
                                    <code>$black-admin-color</code></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminColorScheme;