import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import buildAndDesign from "../../public/images/build-and-design.png" 
import laminatingFloor from "../../public/images/laminating-floor.png" 
import houseRenovation from "../../public/images/house-renovation.png" 
import buildingConstruction from "../../public/images/building-construction.png" 
import management from "../../public/images/management.png" 
import planing from "../../public/images/planing.png" 
import green from "../../public/images/green.png" 
import architecture from "../../public/images/architecture.png" 
import interior from "../../public/images/interior.png" 

const Index = () => (
  <Layout>

    <section id="about" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">About Us</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8" padding="12">
              <h1 className="font-semibold text-xl">Who We Are</h1>
              <p className="mt-4">
                Our extensive knowledge and comprehensive approach
                can help guide you through a wide range of options
                such as concrete pavers, retaining walls
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section id="services" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">What we provide</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <p className="font-semibold text-xl">Design and Build</p>
            <Card className="mb-8" padding="0">


              <img className="card-img-top" 
              src={buildAndDesign} alt="Card image cap" />

            </Card>
          </div>
          <div className="flex-1 px-3">
            <p className="font-semibold text-xl">Laminate Flooring</p>
            <Card className="mb-8" padding="0">


              <img className="card-img-top" 
              src={laminatingFloor} alt="Card image cap" />

            </Card>
          </div>
          <div className="flex-1 px-3">
            <p className="font-semibold text-xl">House Renovation</p>
            <Card className="mb-8" padding="0">


              <img className="card-img-top"
               src={houseRenovation} alt="Card image cap" />

            </Card>
          </div>


        </div>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <p className="font-semibold text-xl">Building construction</p>
            <Card className="mb-8" padding="0">


              <img className="card-img-top" 
              src={buildingConstruction} alt="Card image cap" />

            </Card>
          </div>
          <div className="flex-1 px-3">
            <p className="font-semibold text-xl">Management Work</p>
            <Card className="mb-8" padding="0">


              <img className="card-img-top" 
              src={management} alt="Card image cap" />

            </Card>
          </div>
          <div className="flex-1 px-3">
            <p className="font-semibold text-xl">Construction Planning</p>
            <Card className="mb-8" padding="0">


              <img className="card-img-top" 
              src={planing} alt="Card image cap" />

            </Card>
          </div>


        </div>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <p className="font-semibold text-xl">Green Building</p>
            <Card className="mb-8" padding="0">


              <img className="card-img-top"
               src={green} alt="Card image cap" />

            </Card>
          </div>
          <div className="flex-1 px-3">
            <p className="font-semibold text-xl">Architecture Design</p>
            <Card className="mb-8" padding="0">



              <img className="card-img-top" 
              src={architecture} alt="Card image cap" />

            </Card>
          </div>
          <div className="flex-1 px-3">
            <p className="font-semibold text-xl">Interior Design</p>
            <Card className="mb-8" padding="0">


              <img className="card-img-top" 
             src={interior} alt="Card image cap" />

            </Card>
          </div>


        </div>
      </div>
    </section>
    <section id="contact-us" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Contact With Us</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8" padding="12">
             
              
              <h1 className="font-semibold text-xl">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</h1>
        <p className="mt-4">
              Mobile No.1: <a href='tel'>0321-2000191</a>
              </p>
              <p className="mt-4">
              Mobile No.2: <a href='tel'>0336-8283405</a>
              </p>
              <p className="mt-4">
              PTCL No: <a href='tel'>021-35653005-6</a>
              </p>
              <address>
                Visit us at:<br/>
                Office No. 603, 6th Floor,<br/>
                Trade Tower, Abdullah Haroon Road,<br/>
                Saddar, Karachi
                </address>
            </Card>
          </div>
        </div>
      </div>
    </section>
    


    
    <section id="career" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Careers</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8" padding="12">
              <h1 className="font-semibold text-xl">Email Us</h1>
              <p className="mt-4">
                your resume at <a href="mailto:name@email.com">example@ma.com</a> 
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>

    
  </Layout>
);

export default Index;
