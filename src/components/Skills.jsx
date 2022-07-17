import React from 'react'
import NodeIcon from '../../public/img/icons/nodejs.png'
import ReactIcon from '../../public/img/icons/react.svg'
import HtmlIcon from '../../public/img/icons/html.png'
import CssIcon from '../../public/img/icons/css.png'
import JavaScriptIcon from '../../public/img/icons/javascript.png'
import ViteIcon from '../../public/img/icons/vite.svg'
import SqlIcon from '../../public/img/icons/mysql.svg'
import MongoIcon from '../../public/img/icons/mongo.png'
const NavBar = () => {
  return (
    <>
    <div class="m-10 not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 my-10 gap-6">
      {/*Card Start */}

      {/*Html*/}
      <div
        class="card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1 h-48 w-48">
        <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
          <img class="w-full h-auto" src={HtmlIcon} alt="Vite" />
        </figure>{" "}
        <div class="card-body text-center">
          <span class="text-xs">Html</span>
        </div>{" "}
      </div>

      {/*CSS*/}
      <div

        class="card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1 h-48 w-48">
        <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
          <img class="w-full h-auto" src={CssIcon} alt="Vite" />
        </figure>{" "}
        <div class="card-body text-center">
          <span class="text-xs">Css</span>
        </div>{" "}
      </div>

      {/*JavaScript*/}
      <div
        class="card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1 h-48 w-48">
        <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
          <img class="w-full h-auto" src={JavaScriptIcon} alt="Vite" />
        </figure>{" "}
        <div class="card-body text-center">
          <span class="text-xs">JavaScript</span>
        </div>{" "}
      </div>

      {/*NodeJS*/}
      <div
        class="card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1 h-48 w-48">
        <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
          <img class="w-full h-auto" src={NodeIcon} alt="Vite" />
        </figure>{" "}
        <div class="card-body text-center">
          <span class="text-xs">NodeJS</span>
        </div>{" "}
      </div>

      {/*React*/}
      <div
        class="card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1 h-48 w-48">
        <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
          <img class="w-full h-auto" src={ReactIcon} alt="Vite" />
        </figure>{" "}
        <div class="card-body text-center">
          <span class="text-xs">React</span>
        </div>{" "}
      </div>

      {/*Vite*/}
      <div
        class="card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1 h-48 w-48">
        <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
          <img class="w-full h-auto" src={ViteIcon} alt="Vite" />
        </figure>{" "}
        <div class="card-body text-center">
          <span class="text-xs">Vite</span>
        </div>{" "}
      </div>
      
      {/*MySQL*/}
      <div
        class="card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1 h-48 w-48">
        <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
          <img class="w-full h-auto" src={SqlIcon} alt="Vite" />
        </figure>{" "}
        <div class="card-body text-center">
          <span class="text-xs">MySQL</span>
        </div>{" "}
      </div>
      {/*MongoDB*/}
      <div
        class="card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1 h-48 w-48">
        <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
          <img class="w-full h-auto" src={MongoIcon} alt="Vite" />
        </figure>{" "}
        <div class="card-body text-center">
          <span class="text-xs">MongoDB</span>
        </div>{" "}
      </div>
      </div>
      
    </>
  )
}

export default NavBar