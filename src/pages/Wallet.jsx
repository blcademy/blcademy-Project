import React, { useState } from "react";
import PropTypes from "prop-types";

import Web3 from "web3";
import { MINT_NFT_ABI, MINT_NFT_CONTRACT } from "../web3.config";

import icon1 from "../assets/images/svg/icon-wallet-1.svg";
import icon2 from "../assets/images/svg/icon-wallet-2.svg";
import icon3 from "../assets/images/svg/icon-wallet-3.svg";
import icon4 from "../assets/images/svg/icon-wallet-4.svg";
import icon5 from "../assets/images/svg/icon-wallet-5.svg";
import icon6 from "../assets/images/svg/icon-wallet-6.svg";
import icon7 from "../assets/images/svg/icon-wallet-7.svg";
import icon8 from "../assets/images/svg/icon-wallet-8.svg";
import { Link } from "react-router-dom";

Wallet.propTypes = {};

function Wallet(props) {
  const [account, setAccount] = useState();



 
  const getAccount = async () => {
    //계정 가져오기
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } else {
        alert("Install MetaMask!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [dataWallet] = useState([
    {
      id: 1,
      img: icon1,
      cate: "none",
      title: "Meta Mask",
      text: "MetaMask는 Ethereum 블록 체인과 상호 작용하는 데 사용되는 소프트웨어 암호 화폐 지갑입니다.",
    },
    {
      id: 2,
      img: icon2,
      cate: "",
      title: "Bitski",
      text: "Bitski는 고유한 하드웨어 암호화 키 저장 솔루션 및 주류 채택을 위해 설계된 통합인증 사용자 지갑입니다. ",
    },
    {
      id: 3,
      img: icon3,
      cate: "",
      title: "Wallet Connect",
      text: "월렛 커넥트는 여러 개의 분산 금융(DeFi) DApp 애플리케이션에 쉽게 연결할 수 있도록 하는 많은 암호화 지갑에서 사용하는 프로토콜입니다.",
    },
    {
      id: 4,
      img: icon4,
      cate: "",
      title: "Coin Base",
      text: "코인베이스 지갑은 암호화폐와 NFT, DeFi 활동, 디지털 자산을 직접 관리하도록 돕는 자가 수탁형 모바일 암호화폐 지갑입니다.",
    },

    {
      id: 6,
      img: icon6,
      cate: "",
      title: "Kaikas",
      text: "Kaikas(카이카스)는 PC 웹 브라우저 확장 프로그램 형태의 글로벌 디지털 자산 지갑입니다.",
    },
  
  ]);
  return (
    <div>
      <section className="tf-page-title">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumbs">
                <li>
                  <Link to="#">Pages</Link>
                </li>
                <li>Wallet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-connect-wallet">
        <div className="tf-container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="tf-heading style-5">
                <h4 className="heading">Connect Your Wallet</h4>
                <p className="sub-heading">
            
                  블카데미는 아래와 같은 툴의 지갑연동을 제공해요{" "}
                </p>
              </div>
            </div>
            {dataWallet.map((idx) => (
              <div key={idx.id} className="col-lg-4 col-md-6">
                <div className="tf-wallet" onClick={getAccount}>
                  <div className="icon">
                    <img src={idx.img} alt="Binasea" />
                    <span className={`label ${idx.cate}`}>BETA</span>
                  </div>
                  <h6 className="title">
                    <Link to="#">{idx.title}</Link>
                  </h6>
                  <p className="content">{idx.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Wallet;
