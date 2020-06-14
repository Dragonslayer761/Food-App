import React, { Component } from 'react';
import NavBarComponent from './NavBarComponent';

class Header extends Component {
    render() {
        return (
            <header class="sans-serif">
                <div class="cover bg-left bg-center-l" >
                    <div class="bg-black-80 pb5 pb6-m pb7-l">
                        <NavBarComponent/>
                        <div class="tc-l mt4 mt5-m mt6-l ph3">
                            <h1 class="f2 f1-l fw2 white-90 mb0 lh-title">This is your super impressive headline</h1>
                            <h2 class="fw1 f3 white-80 mt3 mb4">Now a subheadline where explain your wonderful new startup even more</h2>
                            <a class="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Call to Action</a>
                            <span class="dib v-mid ph3 white-70 mb3">or</span>
                            <a class="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="www.google.com">Secondary call to action</a>
                        </div>
                    </div>
                    
                </div>
                
            </header>

        )
    }
}

export default Header;
