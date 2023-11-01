import React from "react";
import Footer from "./footer";
const Home = () => {
  return (
    <div className="osahan-verification padding-bt">
      <div className="p-3 shadow bg-danger danger-nav osahan-home-header">
        <div className="font-weight-normal mb-0 d-flex align-items-center">
          <img
            src="img/logo.png"
            className="img-fluid osahan-nav-logo"
            alt="Logo"
          />
        </div>
      </div>
      <div className="bg-danger px-3 pb-3">
        <div className="bg-white rounded-1 p-3">
          <form action="#">
            <div className="form-group border-bottom pb-2">
              <label htmlFor="exampleFormControlSelect1" className="mb-2">
                <span className="icofont-search-map text-danger"></span> From
              </label>
              <br />
              <select
                className="js-example-basic-single form-control"
                name="state"
              >
                <option value="Amritsar">Amritsar</option>
                <option value="Agra">Agra</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Bareilly">Bareilly</option>
                <option value="Bathinda">Bathinda</option>
                <option value="Bhiwani">Bhiwani</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Delhi">Delhi</option>
                <option value="Fatehabad">Fatehabad</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Hissar">Hissar</option>
                <option value="Jajpur">Jajpur</option>
                <option value="Jodhpur">Jodhpur</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Nanded">Nanded</option>
              </select>
            </div>
            <div className="form-group border-bottom pb-2">
              <label htmlFor="exampleFormControlSelect1" className="mb-2">
                <span className="icofont-google-map text-danger"></span> To
              </label>
              <br />
              <select
                className="js-example-basic-single form-control"
                name="state"
              >
                <option value="Amritsar">Amritsar</option>
                <option value="Agra">Agra</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Bareilly">Bareilly</option>
                <option value="Bathinda">Bathinda</option>
                <option value="Bhiwani">Bhiwani</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Delhi">Delhi</option>
                <option value="Fatehabad">Fatehabad</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Hissar">Hissar</option>
                <option value="Jajpur">Jajpur</option>
                <option value="Jodhpur">Jodhpur</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Nanded">Nanded</option>
              </select>
            </div>
            <div className="form-group border-bottom pb-1">
              <label htmlFor="exampleFormControlSelect1" className="mb-2">
                <span className="icofont-ui-calendar text-danger"></span> Date
              </label>
              <br />
              <input
                name="date"
                className="form-control border-0 p-0"
                type="date"
              />
            </div>
            <button
              type="submit"
              className="btn btn-danger btn-block osahanbus-btn rounded-1"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="p-3 bg-warning">
        <div className="row m-0">
          <div className="col-6 py-1 pr-1 pl-0">
            <div className="p-3 bg-white shadow-sm rounded-1">
              <img
                className="img-fluid"
                src="img/safe-vehicles.svg"
                alt="Safe Vehicles"
              />
              <p className="mb-0 mt-4 font-weight-bold">
                Safe and Hygenic
                <br />
                Vehicles
              </p>
            </div>
          </div>
          <div className="col-6 py-1 pl-1 pr-0">
            <div className="p-3 bg-white shadow-sm rounded-1">
              <img
                className="img-fluid"
                src="img/customer-support.svg"
                alt="Customer Support"
              />
              <p className="mb-0 mt-4 font-weight-bold">
                Best Customer
                <br />
                Support
              </p>
            </div>
          </div>
          <div className="col-6 py-1 pr-1 pl-0">
            <div className="p-3 bg-white shadow-sm rounded-1">
              <img
                className="img-fluid"
                src="img/live-tracking.svg"
                alt="Live Tracking"
              />
              <p className="mb-0 mt-4 font-weight-bold">
                Live Track your
                <br />
                Journey
              </p>
            </div>
          </div>
          <div className="col-6 py-1 pl-1 pr-0">
            <div className="p-3 bg-white shadow-sm rounded-1">
              <img
                className="img-fluid"
                src="img/verified-drivers.svg"
                alt="Verified Drivers"
              />
              <p className="mb-0 mt-4 font-weight-bold">
                Verified Drivers
                <br />
                and Vehicles
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
