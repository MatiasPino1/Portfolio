import React from "react";
import NodeIcon from "../../public/img/icons/nodejs.png";
import ReactIcon from "../../public/img/icons/react.svg";
import HtmlIcon from "../../public/img/icons/html.png";
import CssIcon from "../../public/img/icons/css.png";
import JavaScriptIcon from "../../public/img/icons/javascript.png";
import ViteIcon from "../../public/img/icons/vite.svg";
import SqlIcon from "../../public/img/icons/mysql.svg";
import MongoIcon from "../../public/img/icons/mongo.png";
const Skills = () => {
  return (
    <>
      <div className="min-h-screen" id="skills">
        <p class="text-5xl font-bold italic text-center mb-10 text-white">Skills</p>
        {/*Html*/}
        <div class="not-prose skills-bg h-100  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4  gap-6 flex justify-items-center">
          {/*Card Start */}
          <div className="custom-card">
            <div className="custom-card2">
              <div class="  border-base-200 card-compact  transition-all duration-200 hover:shadow hover:-translate-y-1 h-48 w-48">
                <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
                  <img class="w-full h-auto" src={HtmlIcon} alt="Vite" />
                </figure>{" "}
                <div class="card-body text-center">
                  <span class="text-xs">Html</span>
                </div>{" "}
              </div>
            </div>
          </div>

          {/*CSS*/}
          <div className="custom-card">
            <div className="custom-card2">
              <div class="  border-base-200 card-compact  transition-all duration-200 hover:shadow hover:-translate-y-1 h-48 w-48">
                <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
                  <img class="w-full h-auto" src={CssIcon} alt="Vite" />
                </figure>{" "}
                <div class="card-body text-center">
                  <span class="text-xs">Css</span>
                </div>{" "}
              </div>
            </div>
          </div>

          {/*JavaScript*/}
          <div className="custom-card">
            <div className="custom-card2">
              <div class="  border-base-200 card-compact  transition-all duration-200 hover:shadow hover:-translate-y-1 h-48 w-48">
                <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
                  <img class="w-full h-auto" src={JavaScriptIcon} alt="Vite" />
                </figure>{" "}
                <div class="card-body text-center">
                  <span class="text-xs">JavaScript</span>
                </div>{" "}
              </div>
            </div>
          </div>

          {/*NodeJS*/}
          <div className="custom-card">
            <div className="custom-card2">
              <div class="  border-base-200 card-compact  transition-all duration-200 hover:shadow hover:-translate-y-1 h-48 w-48">
                <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
                  <img class="w-full h-auto" src={NodeIcon} alt="Vite" />
                </figure>{" "}
                <div class="card-body text-center">
                  <span class="text-xs">NodeJS</span>
                </div>
              </div>
            </div>
          </div>

          {/*React*/}
          <div className="custom-card">
            <div className="custom-card2">
              <div class="  border-base-200 card-compact  transition-all duration-200 hover:shadow hover:-translate-y-1 h-48 w-48">
                <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
                  <img class="w-full h-auto" src={ReactIcon} alt="Vite" />
                </figure>{" "}
                <div class="card-body text-center">
                  <span class="text-xs">React</span>
                </div>{" "}
              </div>
            </div>
          </div>

          {/*Vite*/}
          <div className="custom-card">
            <div className="custom-card2">
              <div class="  border-base-200 card-compact  transition-all duration-200 hover:shadow hover:-translate-y-1 h-48 w-48">
                <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
                  <img class="w-full h-auto" src={ViteIcon} alt="Vite" />
                </figure>{" "}
                <div class="card-body text-center">
                  <span class="text-xs">Vite</span>
                </div>{" "}
              </div>
            </div>
          </div>

          {/*MySQL*/}
          <div className="custom-card">
            <div className="custom-card2">
              <div class="  border-base-200 card-compact  transition-all duration-200 hover:shadow hover:-translate-y-1 h-48 w-48">
                <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
                  <img class="w-full h-auto" src={SqlIcon} alt="Vite" />
                </figure>{" "}
                <div class="card-body text-center">
                  <span class="text-xs">MySQL</span>
                </div>{" "}
              </div>
            </div>
          </div>
          {/*MongoDB*/}
          <div className="custom-card">
            <div className="custom-card2">
              <div class="  border-base-200 card-compact  transition-all duration-200 hover:shadow hover:-translate-y-1 h-48 w-48">
                <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
                  <img class="w-full h-auto" src={MongoIcon} alt="Vite" />
                </figure>{" "}
                <div class="card-body text-center">
                  <span class="text-xs">MongoDB</span>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
