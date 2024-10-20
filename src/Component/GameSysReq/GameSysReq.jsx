import React, { useContext } from "react";
import './GameSysReq.css';
import {  CiShare1 } from "react-icons/ci";
import { GameContext } from "../../Context/GameContext";

const minimum_requirement = [
  {
    type: "OS",
    req: "Window 7 SP1 64-bit, Window 8.1 64-bit, or Windows 10 64-bit (Windows 10 dev builds are not currently supported)",
  },
  {
    type: "Processor",
    req: "Intel Core i5 or equivalent",
  },
  {
    type: "Memory",
    req: "8 GB",
  },
  {
    type: "Storage",
    req: "100 GB",
  },
  {
    type: "Direct X",
    req: "11",
  },
  {
    type: "Graphics",
    req: "NVIDIA® GeForce® GT 1030 or better",
  },
]

const recommended_requirement = [
  {
    type: "OS",
    req: "Window 7 SP1 64-bit, Window 8.1 64-bit, or Windows 10 64-bit (Windows 10 dev builds are not currently supported)",
  },
  {
    type: "Processor",
    req: "Intel Core i7 or equivalent",
  },
  {
    type: "Memory",
    req: "16 GB",
  },
  {
    type: "Storage",
    req: "150 GB",
  },
  {
    type: "Direct X",
    req: "11",
  },
  {
    type: "Graphics",
    req: "NVIDIA® GeForce® GT 1060 6GB or better",
  },
]


const GameSysReq = (props) => {
  const {data} = props;
  return (
    <div className="game-sys-req">
      <div className="game-title-sys">
        <h5>
          {data.name} System Requirement
        </h5>
      </div>

      <div className="os-system">

        <div className="sys-title">
          <h5>Window</h5>
          <hr className="sys-line" />
        </div>


        <div className="mini-recomm">
          <div className="minimum">
            <div className="mini-title">
              <h5>Minimum</h5>
            </div>

            <div className="recom-title">
              <h5>Recommended</h5>
            </div>
          </div>

          <div className="requirement">
            <div className="minimum-requirement">
              { minimum_requirement.map((item, index) => {
                return (
              <div className="min-option" key={index}>
                <h5>{item.type}</h5>
                <p>{item.req}</p>
              </div>
                )
              })}
            </div>
            <div className="recommended-requirement">
              {recommended_requirement.map((item, index) => {
                return (
              <div className="reco-option" key={index}>
                  <h5>{item.type}</h5>
                  <p>{item.req}</p>
                </div>

                )
              })}
            </div>
          </div>
          
          <div className="support-lang">
            <h5>Languages Supported</h5>
            <p>Audio: Chinese - Simplified, English, Korean, Japanese</p>
            <p>Text: Chinese - Simplified, Chinese - Traditional, English, French, German, Itlalian, Japanese, Korean, Portuguese, Portuguese - Brazil, Russian, Spanish - Spain, Spanish, Latin America, Thai, Turkish, Vietnamese</p>
          </div>

          <div className="copyright">
            <h5>Copyright &copy; COGNOSPHERE. All Rights Reserved.</h5>
            <div className="policy">
              <p>Privacy Policy</p>
              <CiShare1 className="share-icon" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default GameSysReq;