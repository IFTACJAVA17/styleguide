import React, { Component } from 'react';

import'./admin-styles.scss';
import AdminColorScheme from './adminstyleguide/admin-color-scheme';
import AdminTypography from './adminstyleguide/admin-typography';
import AdminButtons from './adminstyleguide/admin-buttons';
import AdminForms from './adminstyleguide/admin-forms';


export default class AdminStyleGuide extends Component {

    render() {
        return (
            <div>
                <div id='page-wrap' className='admin-container'>
                <h1 className='admin-h1'>Admin style guide</h1>
                    <h4 className='admin-h4'>
                    Färgerna för adminsidorna går i ett mindre färgglatt tema än huvudsidan. Fokus på ljust, grått och rött som accent.
                    Typografin är i stort sett densamma, men andra färger.
                    </h4>
                    <p style={{fontStyle: 'italic'}}>It is a time of civil war and renegade paragraphs flying through space.
                    There's cool space battles, and the bad guy is the good guy's dad, but you don't find that out until the next episode.
                    And this hot chick is really the sister of the good guy, but they don't know it, and they kiss, which is kinda messed up. I mean, what if they had done it instead of just kissed?
                    Angelina Jolie kissed her brother. Yeah, she did. You know it, I know it, and her dad knows it. That's why they hardly ever talk anymore. You can run away to Africa, but you can't run away from the truth.
                    Oh, by the way, here's a tip for you: when this is over, go out and rent the movie Gia. She's way naked in it, and makes out with another chick and everything. It's awesome. I stumbled across it late at night on HBO after I had just got back from hockey, and I almost fainted. But I digest...
                    Princess Leia was coming back from buying space groceries when this happened...
                    </p>
                    <AdminColorScheme />
                    <AdminTypography />
                    <AdminButtons />
                    <AdminForms />
                </div>
            </div>
        )
    }

}
