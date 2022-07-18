import React from "react";
import Project from "../../public/img/project1.png";
import Crud from "../../public/img/crud.png";
import Login from "../../public/img/login.png";
import Email from "../../public/img/email.png";
export const Projects = () => {
  return (
    <>
      <div className="min-h-screen">
        <p class="text-5xl font-bold italic text-white mb-10 text-center" id="projects">Projects</p>
        <div className=" flex min-h-screen justify-center">
          <div className=" gap-4 grid-cols-1  ">
            <div class="card card-project m-5  xl:w-96 bg-base-100 shadow-xl">
              <a href="https://frontendbank.herokuapp.com/" target="_blank">
                <figure>
                  <img src={Project} alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    sudBank-<div class="badge badge-secondary">API REST</div>
                  </h2>
                  <p></p>
                  <div class="card-actions justify-end">
                    <div class="badge badge-outline">MySQL</div>
                    <div class="badge badge-outline">NodeJS</div>
                    <div class="badge badge-outline">ExpressJS</div>
                    <div class="badge badge-outline">JWT</div>
                    <div class="badge badge-outline">React</div>
                    <div class="badge badge-outline">Bootstrap</div>
                  </div>
                </div>
              </a>
            </div>

            <div class="card card-project m-5  xl:w-96 bg-base-100 shadow-xl">
              <a href="https://crud-asenjo.herokuapp.com/" target="_blank">
                <figure>
                  <img src={Crud} alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    CoffeeShop-<div class="badge badge-secondary">CRUD</div>
                  </h2>
                  <p></p>
                  <div class="card-actions justify-end">
                    <div class="badge badge-outline">MySQL</div>
                    <div class="badge badge-outline">NodeJS</div>
                    <div class="badge badge-outline">ExpressJS</div>
                    <div class="badge badge-outline">HBS</div>
                    <div class="badge badge-outline">Cloudinary</div>
                    <div class="badge badge-outline">Bootstrap</div>
                  </div>
                </div>
              </a>
            </div>

            <div class="card card-project m-5  xl:w-96 bg-base-100 shadow-xl">
              <a href="https://login-asenjo.herokuapp.com/" target="_blank">
                <figure>
                  <img src={Login} alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    Login-
                    <div class="badge badge-secondary">ENCRYPTED PASS</div>
                  </h2>
                  <p></p>
                  <div class="card-actions justify-end">
                    <div class="badge badge-outline">MySQL</div>
                    <div class="badge badge-outline">NodeJS</div>
                    <div class="badge badge-outline">ExpressJS</div>
                    <div class="badge badge-outline">HBS</div>
                    <div class="badge badge-outline">MD5</div>
                  </div>
                </div>
              </a>
            </div>

            <div class="card card-project m-5  xl:w-96 bg-base-100 shadow-xl">
              <a href="https://envio-de-mail.herokuapp.com/" target="_blank">
                <figure>
                  <img src={Email} alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    Email Form-<div class="badge badge-secondary">FORM</div>
                  </h2>
                  <p></p>
                  <div class="card-actions justify-end">
                    <div class="badge badge-outline">NodeJS</div>
                    <div class="badge badge-outline">ExpressJS</div>
                    <div class="badge badge-outline">HBS</div>
                    <div class="badge badge-outline">NodeMailer</div>
                    <div class="badge badge-outline">Bootstrap</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
