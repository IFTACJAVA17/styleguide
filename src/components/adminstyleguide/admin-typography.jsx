import React from 'react';

import './admin-typography.scss';

class AdminTypography extends React.Component {
    render () {
        return (
            <div id="typography">
                <h2 className='admin-h2'>Typografi</h2>
                <p>All typografi baseras på en line-height på 1.8rem. 
                    Line-height finns i variabeln <code>$bl</code>.
                </p>
                <div>
                    <h3 className='admin-h3'>Rubriker</h3>
                    <p>Rubriker sätts i Catamaran, vikt 800, uppercase. Rubrikernas storlek
                        baseras på <code>$bl</code>, alla har en <code>line-height</code> och <code>margin-top</code> satta
                        till <code>$bl * 2</code> och en <code>margin-bottom</code> satt till <code>$bl</code>
                    </p>
                    <div className="heading">
                        <div className="headingText">
                            <h1 className='admin-h1'>Sidrubrik</h1>
                        </div>
                        <div className="headingInfo">
                            <h1>3,6rem/3,6rem</h1>
                        </div>
                    </div>
                    <div className="heading">
                        <div className="headingText">
                            <h2 className='admin-h2'>Rubrik</h2>
                        </div>
                        <div className="headingInfo">
                            <h2>2,7rem/3,6rem</h2>
                        </div> 
                    </div>
                    <div className="heading">
                        <div className="headingText">
                            <h3 className='admin-h3'>Underrubrik</h3>
                        </div>
                        <div className="headingInfo">
                            <h3>2,34rem/3,6rem</h3>
                        </div>
                    </div>
                    <div className="heading">
                        <div className="headingText">
                            <h4 className='admin-h4'>Liten rubrik</h4>
                        </div>
                        <div className="headingInfo">
                            <h4>1,8rem/3,6rem</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='admin-h3'>Brödtext</h3>
                    <p>Typsnitt för brödtext är Sintoy, satt i 16px med en <code>line-height</code> satt till 1.8 rem.</p>
                    <div className="paragraph">
                        <div className="paragraphText">
                            <p>Yxmördaren Julia Blomqvist på fäktning i Schweiz.</p>
                        </div>
                        <div className="paragraphInfo">
                            <p>Sintoy - 16px / 1,8rem</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminTypography;