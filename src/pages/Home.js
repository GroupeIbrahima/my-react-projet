import React from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import image1 from './image/Cover Image.png';
import icon3 from './image/asus-logo.png';
import icon4 from './image/allianz-1.png';
import Img3 from './image/Image (2).png';
import Img2 from './image/Image (1).png';
import Img1 from './image/Image.png';
import iba from './image/iba.png';
import pattern1 from './image/Pattern1.png';
import pattern2 from './image/Ellipse 406.png';
import pattern3 from './image/pattern3.png';
import pattern4 from './image/Ellipse 407.png';
import section1 from './image/section1.png';
import section2 from './image/section2.png';
import section3 from './image/section3.png';
import FooterImage from './image/footer Image.png';
import chase from './image/chase.png';
import link from './image/linkedin.png';
import tim from './image/new-york-times.png';
import iconn1 from './image/Icon 2.png';
import design from './image/Icon (1).png';
import design1 from './image/Icon 4.png';
import design2 from './image/Icon 3.png';
import design3 from './image/Icon 5.png';
import design4 from './image/Icon 6.png';










function Home() {

  return (
    
      <div className="container ">

        {/* Premier conteneur */}
        <div className="row">
          <div className="col-6">
            <h2 className="Ozone"> Ozone</h2>
          </div>
          <div className="col-6">
            <i class="fa-solid fa-phone ml-2  mbaye"></i>
            <h1 className="mbaye2">
              +0 123 456-789
            </h1>
          </div>
        </div>
        <b></b>
        <div className="row">
          <div className="col-md-6 ">

            <h2 className="Digital">Creative Digital <br></br>Marketing Agency</h2>
            <br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>
              sed do eiusmod tempor incididunt ut labore et dolore magna<br></br>
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>

            <br>
            </br>

            <button className="btn btn-success mt-2">Contact us</button>
          </div>
          <div className="col-6 image12">
            <div className="mbaye3">
            <img src={image1} alt="Image" />
            </div> 
          </div>

        </div>


        <br>

        </br>


        <div className='row '>

          <strong className="Feareted"><p >Feareted in |<span className='text-muted'> aur Certification</span></p></strong>
          <div className='grids '>


            <div className='grid '>
              <img src={icon3} alt="Image" />
            </div>
            <div className='grid'>
              <img src={icon4} alt="Image" />
            </div>
            <div className='grid'>
              <img src={chase} alt="Image" />
            </div>
            <div className='grid'>
              <img src={tim} alt="Image" />
            </div>
            <div className='grid'>
              <img src={link} alt="Image" />
            </div>
          </div>
        </div>

        {/* Troisième conteneur */}
        < div className="row ">

          <div className="col-md-3 content mt-4">
            <div className="SOKHNA">
              <img src={iconn1} className='Icon' />
              <div class="text-center">

                <h4> scherche engine optimization</h4>

              </div>
            </div>
          </div>

          <div class="col-md-3 content mt-4">
            <div class="SOKHNA">
              <img src={design} className='Icon' />
              <div class="text-center">

                <h4>website Dignid et Developpement</h4>

              </div>
            </div>
          </div>

          <div class="col-sm-6 ">

            <div class="sokhna">
              <h2 className="Digital2">Aur Digital Marketing Spertise</h2>
              <br></br>
              <br></br>
              <p className="Digital3">website Dignid et Developpement
                website Dignid et Developpement
                website Dignid et Developpement

              </p>

            </div>

          </div>

          < div class="col-md-3 content mt-4">

            <div class="SOKHNA">
              <img src={design1} className='Icon' />
              <h4>video editing et production</h4>
            </div>
          </div>

          < div class="col-md-3 content mt-4">

            <div class="SOKHNA">
              <img src={design2} className='Icon' />
              <h4>video editing et production</h4>
            </div>
          </div>

          < div class="col-md-3 content mt-4">

            <div class="SOKHNA">
              <img src={design3} className='Icon' />
              <h4>video editing et production</h4>
            </div>
          </div>

          < div class="col-md-3 content mt-4">

            <div class="SOKHNA">
              <img src={design4} className='Icon' />
              <h4>video editing et production</h4>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* 5 conteneur */}
        <div className="row ">
          <div className="col-6 md  back">
            <div className="iba mr-5">
              <img src={iba} alt="Image" />
            </div>
            <div className="back2">
              <p className="p1">Revenue 83% <br></br> o $462.221<br></br> o $251.77  </p>
            </div>

            <div className="back3">
              <p>Our Customers</p>
              <div className="pattern1">
                <img src={pattern1} alt="Image" />
              </div>

              <div className="pattern2">
                <img src={pattern2} alt="Image" />
              </div>

              <div className="pattern3">
                <img src={pattern3} alt="Image" />
              </div>

              <div className="pattern4">
                <img src={pattern4} alt="Image" />
              </div>

            </div>



          </div>
          <div className='col-md-6  '>

            <div div className='text1'>
              <h2 className="texte2">Why should you <br></br>choose Ozone</h2>
              <br></br>
              <br></br>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              </h4>

            </div>
            <div className="button3">
              <div className='btn btn-success '>Contact us</div>
            </div>
          </div>
        </div>




        {/* 4 conteneur */}
        <div className='row '>
          <p className="Our">Our last work</p>

          <div className='col-md-4 ibrahima '>

            <img src={Img1} alt=""className="retouche" />
            <h2>Our Digital<br></br>Marketing Expertise</h2>
            <p className="retouche1">Lorem Ipsum dolor sit amet,consetetur sadipscingelitr,<br></br>
              sed diam nonumy eirmod tempor lorem ipsum dolor sit<br></br>
              amet consetetur sadipscing elit
            </p>
          </div>
          <div className='col-md-4 ibrahima'>

            <img src={Img2} alt=""className="retouche" />
            <h2>Our Digital<br></br>Marketing Expertise</h2>
            <p className="retouche1" >Lorem Ipsum dolor sit amet,consetetur sadipscingelitr,<br></br>
              sed diam nonumy eirmod tempor lorem ipsum dolor sit<br></br>
              amet consetetur sadipscing elit
            </p>
          </div>
          <div className='col-md-4 ibrahima  '>

            <img src={Img3} alt="" className="retouche"/>
            <h2>Our Digital<br></br>Marketing Expertise</h2>
            <p className="retouche1">Lorem Ipsum dolor sit amet,consetetur sadipscingelitr,<br></br>
              sed diam nonumy eirmod tempor lorem ipsum dolor sit<br></br>
              amet consetetur sadipscing elit
            </p>
          </div>

        </div>


        {/* 4 conteneur */}


        < div className='row cardees'>



          <div className='cardes '>
            <h5>Testimonials</h5>
            <div className="cards">
              <div className="card1 col-md-4">

                <h3><img src={section1} className='image1' /> Zeo mantis <span className='text-muted'>Faoulder, Apha Group</span>ssssssssss</h3>



              </div>
              <div className="card1 col-md-4 ">

                <h3><img src={section2} className='image1' /> Doe zeo <span className='text-muted'>Faoulder,Beta Group</span>
                </h3>



              </div>
              <div className="card1 col-md-4">

                <h3><img src={section3} className='image1' />Natali colin<span className='text-muted'>Faoulder Apha Group</span></h3>


              </div>

            </div>

          </div>
        </div>



        <div className=" containe">
          <div className="section4">
            <div className='row'>
              <div className='col-md-8 text-items-align-left'>
                <div div className='sect4' >
                  <h2 className="Digital2">Creative Digital <br></br>Marketing Agency</h2>
                  <br></br>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>
                    sed do eiusmod tempor incididunt ut labore et dolore magna<br></br>
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  </p>

                </div>
                <div className="section6">
                  <div className='btn btn-success'>Contact us<span></span></div>
                  +123 644 123
                </div>
              </div>
              <div className='col-md-4'>
                <div className="sect5">
                  <div className="background3">
                    <img src={FooterImage} alt="" />
                  </div>
                </div>
              </div>
              <div className="section7">
                <p>Disign by
                  <u>Oceted Disign studio</u>
                </p>
              </div>

            </div>

          </div>

        </div>




      </div>
    

  );

}
export default Home;