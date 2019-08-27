import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../../global/css/general.css';
import '../../../global/css/images.css';
import '../../../global/css/modal.css';
import '../../../global/css/animation.css';

import '../../../global/js/pop-up';

import Header from '../header';
import Offer from '../../offer/first';
import Way from '../../basis/way';
import Program from '../../basis/program';
import Practice from '../../basis/practice';
import Creators from '../../basis/creators';
import Mentors from '../../basis/mentors';
import Result from '../../basis/result';
import Reality from '../../basis/reality';
import Shlikov from '../../basis/references/shlikov';
import Trofimova from '../../basis/references/trofimova';
import Trifonova from '../../basis/references/trifonova';
import Facts from '../../basis/facts';
import Final from '../../offer/final';
import Footer from '../footer';

const App = () => {
    return (
        <div className="app">
            <Header/>
            <main>
                <Offer/>
                <Way/>
                <Program/>
                <Practice/>
                <Creators/>
                <Mentors/>
                <Result/>
                <Reality/>
                <section className="references clearfix">
                    <div className="layout-positioner">
                        <Shlikov/>
                        <Trofimova/>
                        <Trifonova/>
                    </div>
                </section>
                <Facts/>
                <Final/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;