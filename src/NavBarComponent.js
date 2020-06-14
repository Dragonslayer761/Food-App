import React, { Component } from 'react';
import LogoComponent from './LogoComponent';
import CreateAccountComponent from './CreateAccountComponent';
import AboutUsComponent from './AboutUsComponent';

class NavBarComponent extends Component {
    render() {
        return (
            <nav class="dt w-100 mw8 center">
                <LogoComponent />
                <div class="dtc v-mid tr pa3">
                    <CreateAccountComponent />
                    <AboutUsComponent/>
                </div>
            </nav>        
        )
    }
}

export default NavBarComponent;