import React from 'react';
import dataBanner from '../assets/fake-data/data-banner';
import dataCategory from '../assets/fake-data/data-category';

import dataCreate from '../assets/fake-data/data-create';
import dataExplore from '../assets/fake-data/data-explore';

import Banner01 from '../components/banner/Banner01';
import Category from '../components/category/Category';

import Create from '../components/create/Create';
import Explore from '../components/explore/Explore';



function Home01(props) {

    return (
        <div className="home-1">
            <div id='page'>
                <Banner01 data={dataBanner} />

                <Category data={dataCategory} />

              

                <Create data={dataCreate} />

            


            

                <Explore data={dataExplore} />
            </div>
        </div>

    );
}

export default Home01;