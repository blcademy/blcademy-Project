/* eslint-disable jsx-a11y/alt-text */
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
import imgT from '../assets/images/storyTitle.png'
import imgbf from '../assets/images/imgbf.png'
import imgbf1 from '../assets/images/hb1.png'
import imgbf2 from '../assets/images/hb2.png'
import imgbf3 from '../assets/images/hb3.png'
import imgbf4 from '../assets/images/hb4.png'
import imgbf5 from '../assets/images/hb5.png'
import imgbf6 from '../assets/images/hb6.png'
import imgR from '../assets/images/roadmap.png'
import imging from '../assets/images/ing.png'
import imgL from '../assets/images/line.png'

import { Link } from 'react-router-dom';

function Home01(props) {

    return (
        <div className="home-1">
            <div id='page'>
                <Banner01 data={dataBanner} />

                <div className="story">
                    <div className="storyTxt">
                        <img src={imgT} alt="King" />
                        <p>아름답고 비옥한 땅 , 미지의 낙원 CRYPTOPIA<br />
                            지혜롭고 인자한 CRYPTOPIA의 왕의 통치아래 , <br />평화로운 나날을 보내던 어느 날..<br />
                            악의 세력 센트럴 머스크에게 침략을 당하고 , <br />가까스로 위기를 넘기지만
                            CRYPTOPIA 왕은 혼수상태에 빠진다. <br />
                            CRYPTOPIA의 충신 , 비앤장군은 <br />CRYPTOPIA를 지키기 위해 용사들을 모으는데 ..</p>
                        <Link to="/create" className="tf-button style-2">Buy on OpenSea</Link>
                    </div>
                    <img src={img00} alt="King" className="storyImg" />
                </div>

                {/* 베네핏 */}
                <div className='hdBenefit'>
                    <img src={imgbf} alt="benefit" className='bfTitle' />
                    <div className='benefitC'>
                        <div className='bfContent'>
                            <img src={imgbf1} alt="benefit" className='' />
                            <ul>
                                <p>블카데미 토큰 에어드랍</p>
                                블카데미 교육 및 세미나 참여에 사용할 수 있는 <br />블카데미 토큰 에어드랍
                            </ul>
                        </div>
                        <div className='bfContent'>
                            <img src={imgbf2} alt="benefit" className='' />
                            <ul>
                                <p>프리미엄 블록체인 아티클 무료 구독 권한 부여</p>
                                블록체인 전문가들이 작성한 블록체인, Web 3, NFT 아티클 <br />무료 구독 가능
                            </ul>
                        </div>
                        <div className='bfContent'>
                            <img src={imgbf3} alt="benefit" className='' />
                            <ul>
                                <p>블록체인 관련 테스트 응시 권한</p>
                                블카데미가 제공하고 블록체인 기업이 인증하는 블록체인 테스트 <br />응시 가능, 테스트 통과자 SBT 증서 제공
                            </ul>
                        </div>
                        <div className='bfContent'>
                            <img src={imgbf4} alt="benefit" className='' />
                            <ul>
                                <p>기업매칭 프로그램 참여 권한</p>
                                블록체인 관련 직무 채용 매칭 프로그램 제공, <br />블록체인 관련 직무 프라이빗 채용 정보 제공
                            </ul>
                        </div>
                        <div className='bfContent'>
                            <img src={imgbf5} alt="benefit" className='' />
                            <ul>
                                <p>프라이빗 파티&밋업 초대</p>
                                블카데미 커뮤니티와 블록체인 현직자들과 함께하는 <br />파티 & 밋업 초대
                            </ul>
                        </div>
                        <div className='bfContent'>
                            <img src={imgbf6} alt="benefit" className='' />
                            <ul>
                                <p>블록체인 컨퍼런스 초대</p>
                                블카데미 주최의 글로벌 블록체인, Web 3 컨퍼런스 <br />무료 초대
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 로드맵 */}
                <div className='roadMap'>
                    <img src={imgR} alt="roadmap" className='roadmapT' />
                    <div className='roadmapC'>
                        <img src={imgL} className='Lineimg' />
                        <div className='rmContent' data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="500" >
                            <div className='rmCbox' >
                                <p>NFT 민팅 & 블카데미 커뮤니티 오픈</p>
                            </div>
                        </div>

                        <div className='rmContent' data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="500" >
                            <div className='rmCbox' >
                                <p>블카데미 자체 기획 <br />블록체인 세미나 오픈</p>
                            </div>

                        </div>
                        <div className='rmContent' data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="500" >
                            <div className='rmCbox' >
                                <p>자체 토큰 발행 및 세일 <br />(블카데미 NFT 홀더 에어드랍)</p>
                            </div>

                        </div>
                        <div className='rmContent' data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="500" >

                            <div className='rmCboxW' >
                                <p>블록체인 시험 서비스 오픈</p>
                            </div>
                        </div>
                        <div className='rmContent' data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="500" >

                            <div className='rmCboxW' >
                                <p>블록체인 아티클 페이지 오픈</p>
                            </div>
                        </div>
                        <div className='rmContent' data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="500" >

                            <div className='rmCboxW' >
                                <p>블록체인 세미나 메이킹 시스템 오픈 <br />(NFT 홀더가 세미나 제안 및 수강)</p>
                            </div>
                        </div>
                        <div className='rmContent' data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="500" >
                            <div className='rmCbox' >
                                <p>기업 매칭 프로그램 오픈</p>
                            </div>
                        </div>
                        <div className='rmContent' data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="500" >
                            <div className='rmCbox' >
                                <p>블록체인 현직자와 함께 하는 <br />프라이빗 파티 개최</p>
                            </div>
                        </div>
                        <div className='rmContent' data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="500" >
                            <div className='rmCbox' >
                                <p>블록체인 컨퍼런스 개최</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <Category data={dataCategory} /> */}

                <Create data={dataCreate} />


                <Explore data={dataExplore} />
            </div>
        </div>

    );
}

export default Home01;