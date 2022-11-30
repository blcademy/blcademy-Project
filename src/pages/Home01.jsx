import React from 'react';
import dataBanner from '../assets/fake-data/data-banner';
import dataCategory from '../assets/fake-data/data-category';

import dataCreate from '../assets/fake-data/data-create';
import dataExplore from '../assets/fake-data/data-explore';

import Banner01 from '../components/banner/Banner01';
import Category from '../components/category/Category';

import Create from '../components/create/Create';
import Explore from '../components/explore/Explore';
import img00 from '../assets/images/img00.png'


function Home01(props) {

    return (
        <div className="home-1">
            <div id='page'>
                <Banner01 data={dataBanner} />

                <div className="story">
                    <p>아름답고 비옥한 땅 , 미지의 낙원 CRYPTOPIA<br />
                        지혜롭고 인자한 CRYPTOPIA의 왕의 통치아래 , <br />평화로운 나날을 보내던 어느 날..<br />
                        악의 세력 센트럴 머스크에게 침략을 당하고 , <br />가까스로 위기를 넘기지만
                        CRYPTOPIA 왕은 혼수상태에 빠진다. <br /><br />
                        CRYPTOPIA의 충신 , 비앤장군은 <br />CRYPTOPIA를 지키기 위해 용사들을 모으는데 ..</p>

                    <div className="storyImg">
                        <img src={img00} alt="King" />
                    </div>

                </div>
                {/* 
                <Category data={dataCategory} /> */}

                <Create data={dataCreate} />


                <Explore data={dataExplore} />
            </div>
        </div>

    );
}

export default Home01;