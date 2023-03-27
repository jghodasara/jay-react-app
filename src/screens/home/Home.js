import React from "react";
import "./Home.css";
import Image5 from "../../assets/5.jpg";

function Home() {
  return (
    <div>
      <div class="w-80">
        <div class="section-img">
          <div class="section-bg-box">
            <h1 class="animated slideInLeft">Health Care Services</h1>
            <h2 class="animated slideInRight">We Care About Your Health</h2>
          </div>
        </div>
        <br />
        <br />

        <h1 class="welcome-text">WELCOME TO HOSPITAL SERVICE</h1>
        <br />
        <br />
        <div class="details">
          <p>
            Welcome to HealthCare! Our site holds a wealth of information about
            the services and programs we offer for our regional community as
            well as general health news, a provider listing and career
            opportunities.
          </p>
          <br />
          <p>
            I believe we have an outstanding staff – physicians, clinical and
            support personnel – whose ultimate goal is to provide you with the
            best care possible in a respectful and compassionate manner. We are
            continually looking for new ways to be better at what we do. Please
            don't hesitate to let us know what we can do to make your visit to
            My Care Health Center more comfortable. As a fundamental component
            of our mission statement, we allow ourselves to be guided by the
            needs of those we serve. As needs change, we will change.
          </p>
          <br />
          <p>
            A 84-bed acute care hospital providing emergency care, diagnostic
            services including lab, imaging and cardio respiratory therapy, as
            well as two inpatient units (medicine and surgery). In addition,
            CGMH also provides care in specialty areas including obstetrics,
            orthopaedics, intensive care and surgery. The Hospital also provides
            outpatient care including dialysis and a wide range of clinics
            including mental health and rehabilitation services.
          </p>
          <br />
          <p>
            A facility which maintains the same core services it does today,
            while providing equitable access to the entire South Georgian Bay
            region. It aspires to provide 100% private rooms and to uphold
            design principles that focus on health and wellness elements,
            inclusive of air, water, nourishment, light, fitness, comfort and
            mindfulness at the forefront. It will meet the most current
            accessibility design standards and include multi-faith spiritual
            options.
          </p>
          <br />
          <p>
            Again, thank you for allowing us to serve you during what is most
            likely a very vulnerable time in your life. I appreciate the
            significant trust you place in us!
          </p>
        </div>
        <br />
        <h1 class="welcome-text">OUR OUTSTANDING SERVICES</h1>
        <br />
        <div class="row">
          <div class="col-sm-4">
            <h2>What We Offer!</h2>

            <ul>
              <li>DENTAL IMPLANTS</li>
              <li>WHITENING</li>
              <li>VACCINATIONS</li>
              <li>LABORATORY</li>
              <li>MEDICAL DRESSAGE</li>
              <li>EMERGENCY CONTRACEPTION</li>
            </ul>
          </div>
          <div class="col-sm-4">
            <h2>Our Department</h2>

            <ul>
              <li>DENTAL CARE</li>
              <li>OTOLOGY</li>
              <li>CARDIAC</li>
              <li>HEPATOLOGY</li>
              <li>ORTHOPEDICS</li>
              <li>MENTAL HEALTH</li>
            </ul>
          </div>
        </div>
        <br />
        <h1 class="welcome-text" style={{ width: "25%" }}>
          about us
        </h1>
        <br />
        <h2 style={{ marginLeft: 10 }}>
          Best Medical & Health care Needs to Our Patients
        </h2>
        <div class="about-box">
          <div class="bottomText">
            <p>
              Improving patient care has become a priority for all health care
              providers with the overall objective of achieving a high degree of
              patient satisfaction. Greater awareness among the public,
              increasing demand for better care, keener competition, more health
              care regulation, the rise in medical malpractice litigation, and
              concern about poor outcomes are factors that contribute to this
              change.
            </p>
            <br />
            <p>
              The quality of patient care is essentially determined by the
              quality of infrastructure, quality of training, competence of
              personnel and efficiency of operational systems. The fundamental
              requirement is the adoption of a system that is ‘patient
              orientated’. Existing problems in health care relate to both
              medical and non-medical factors and a comprehensive system that
              improves both aspects must be implemented. Health care systems in
              developing countries face an even greater challenge since quality
              and cost recovery must be ba lanced with equal opportunities in
              patient care.
            </p>
          </div>
          <div className="bottomImage">
            <img
              src={Image5}
              alt="Logo"
              style={{ width: '100%', height: 300 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
