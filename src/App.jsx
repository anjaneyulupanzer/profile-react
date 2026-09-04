import { useEffect, useState } from 'react'

function App() 
{
    const [isSticky, setIsSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
  return (
    <>
      <section className="preloader">
        <div className="spinner">
            <span className="spinner-rotate"></span>    
        </div>
      </section>
      <div className={`sticky-wrapper ${isSticky ? 'is-sticky' : ''}`}>
        <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <a href="/" className="navbar-brand mx-auto mx-lg-0">Software Developer</a>
            <div className="d-flex align-items-center d-lg-none">
                <i className="navbar-icon bi-telephone-plus me-3"></i>
                <a className="custom-btn btn" href="#section_5">
                    801-970-4808
                </a>
            </div>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-lg-5">
                      <li className="nav-item">
                          <a className="nav-link click-scroll" href="#section_1">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link click-scroll" href="#section_2">About</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link click-scroll" href="#section_3">Services</a>
                      </li>
                      <li className="nav-item d-none">
                          <a className="nav-link click-scroll" href="#section_4">Projects</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link click-scroll" href="#section_5">Contact</a>
                      </li>
                  </ul>
                  <div className="d-lg-flex align-items-center d-none ms-auto">
                      <i className="navbar-icon bi-telephone-plus me-3"></i>
                      <a className="custom-btn btn" href="#section_5">
                          801-970-4808
                      </a>
                  </div>
              </div>
            </div>
        </nav>
      </div>
    <main>
        <section className="hero d-flex justify-content-center align-items-center" id="section_1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-12">
                        <div className="hero-text">
                            <div className="hero-title-wrap d-flex align-items-center mb-4">
                                <img src="/images/happy-bearded-young-man.jpg" className="avatar-image avatar-image-large img-fluid" alt=""/>
                                <h1 className="hero-title ms-3 mb-0">Hello Friends..!</h1>
                            </div>
                            <h2 className="mb-4">I’m available for part-full time work.</h2>
                            <p className="mb-4"><a className="custom-btn btn custom-link" href="#section_2">Let's begin</a></p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 position-relative">
                        <div className="hero-image-wrap"></div>
                        <img src="/images/portrait-happy-excited-man-holding-laptop-computer.png" className="hero-image img-fluid" alt=""/>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#535da1" fillOpacity="1" d="M0,160L24,160C48,160,96,160,144,138.7C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,208C624,235,672,245,720,240C768,235,816,213,864,186.7C912,160,960,128,1008,133.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
            </svg>
        </section>

        <section className="about section-padding" id="section_2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="/images/white-desk-work-study-aesthetics.jpg" className="about-image img-fluid" alt=""/>      
                            </div>
                            <div className="col-lg-6">
                                <img src="/images/skills/fullstacktech.png" className="fullstacktech"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                        <div className="about-thumb">
                            <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                                <h2 className="text-white me-4 mb-0">My Story</h2>
                                <img src="/images/happy-bearded-young-man.jpg" className="avatar-image img-fluid" alt=""/>
                            </div>
                            <h3 className="pt-2 mb-3">A Little Bit About Me</h3>
                        <p>
                            PHP Developer with professional experience in designing and implementing web applications using Laravel, CodeIgniter, Node.js, MySQL, and jQuery. Demonstrated ability to collaborate effectively with cross-functional teams to meet project goals.
                        </p>
                        <p>
                            8 years of experience PHP/Laravel Developer in designing and implementing web applications using  Laravel, CodeIgniter, Node.js, MySQL, and jQuery. Proven track record of collaborating with cross-functional teams to enhance project outcomes and streamline development processes. Dedicated to delivering high-quality solutions while maintaining a focus on continuous improvement.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

          <section className="featured section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="profile-thumb">
                            <div className="profile-title">
                                <h4 className="mb-0">Information</h4>
                            </div>
                            <div className="profile-body">
                                <p>
                                    <span className="profile-small-title">Name</span> 
                                    <span>Anjaneyulu</span>
                                </p>
                                <p>
                                    <span className="profile-small-title">Position</span> 
                                    <span>Fullstack Developer</span>
                                </p>
                                <p>
                                    <span className="profile-small-title">Phone</span> 
                                    <span>
                                        <a href="tel: 801-970-4808">801-970-4808</a>
                                    </span>
                                </p>
                                <p>
                                    <span className="profile-small-title">Email</span> 
                                    <span><a href="mailto:anjaneyulugulla33@gmail.com">anjaneyulugulla33@gmail.com</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                        <div className="about-thumb">
                            <div className="row">
                                <div className="col-lg-6 col-6 featured-border-bottom py-2">
                                    <strong className="featured-numbers">8+</strong>
                                    <p className="featured-text">Years of Experiences</p>
                                </div>
                                <div className="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">
                                    <strong className="featured-numbers">5+</strong>
                                    <p className="featured-text">Working Company</p>
                                </div>
                                <div className="col-lg-6 col-6 pt-4">
                                    <strong className="featured-numbers">60+</strong>
                                    <p className="featured-text">Project Finished</p>
                                </div>
                                <div className="col-lg-6 col-6 featured-border-start ps-5 pt-4">
                                    <strong className="featured-numbers">2+</strong>
                                    <p className="featured-text">Digital Awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="clients section-padding">
    <div className="container">

        <h3 className="text-center mb-5">Skills</h3>

        <div className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-4 justify-content-center">

            <div className="col skill-item">
                <img src="/images/skills/php.svg" className="clients-image img-fluid" alt="PHP" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/laravel.svg" className="clients-image img-fluid" alt="Laravel" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/react.svg" className="clients-image img-fluid" alt="React" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/jquery.svg" className="clients-image img-fluid" alt="JQuery" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/mysql.svg" className="clients-image img-fluid" alt="MySQL" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/mongodb.svg" className="clients-image img-fluid" alt="MongoDB" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/javascript.svg" className="clients-image img-fluid" alt="JavaScript" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/codeigniter3.svg" className="clients-image img-fluid" alt="CodeIgniter 3" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/expressjs.svg" className="clients-image img-fluid" alt="ExpressJS" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/nodejs.svg" className="clients-image img-fluid" alt="NodeJS" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/ajax.svg" className="clients-image img-fluid" alt="Ajax" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/aws_s3.svg" className="clients-image img-fluid" alt="AWS S3" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/aws_web_services.svg" className="clients-image img-fluid" alt="AWS Web Services" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/bitbucket.svg" className="clients-image img-fluid" alt="Bitbucket" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/bootstrap.svg" className="clients-image img-fluid" alt="Bootstrap" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/core_php.svg" className="clients-image img-fluid" alt="Core PHP" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/database_design.svg" className="clients-image img-fluid" alt="Database Design" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/elasticsearch.svg" className="clients-image img-fluid" alt="Elasticsearch" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/github.svg" className="clients-image img-fluid" alt="GitHub" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/html.svg" className="clients-image img-fluid" alt="HTML5" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/fullstack-tech.svg" className="clients-image img-fluid" alt="Full Stack" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/netbeans.svg" className="clients-image img-fluid" alt="NetBeans" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/restful_apis.svg" className="clients-image img-fluid" alt="REST APIs" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/third_party_api_integration.svg" className="clients-image img-fluid" alt="Third Party API Integration" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/third_party_web_services.svg" className="clients-image img-fluid" alt="Third Party Web Services" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/ubuntu.svg" className="clients-image img-fluid" alt="Ubuntu" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/vscode.svg" className="clients-image img-fluid" alt="VS Code" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/web_development.svg" className="clients-image img-fluid" alt="Web Development" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/windows.svg" className="clients-image img-fluid" alt="Windows" />
            </div>

            <div className="col skill-item">
                <img src="/images/skills/query_optimization.svg" className="clients-image img-fluid" alt="Query Optimization" />
            </div>

        </div>
    </div>
</section>

        <section className="services section-padding" id="section_3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-12 mx-auto">
                        <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                            <img src="/images/handshake-man-woman-after-signing-business-contract-closeup.jpg" className="avatar-image img-fluid" alt=""/>
                            <h2 className="text-white ms-4 mb-0">Services</h2>
                        </div>
                        <div className="row pt-lg-5">
                            <div className="col-lg-6 col-12">
                                <div className="services-thumb">
                                    <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                        <h3 className="mb-0">Websites Development</h3>
                                        <div className="services-price-wrap ms-auto d-none">
                                            <p className="services-price-text mb-0"></p>
                                            <div className="services-price-overlay"></div>
                                        </div>
                                    </div>
                                    <p>We create modern, responsive, and high-performing websites designed to deliver a smooth user experience across all devices. Our website development services focus on clean design, fast performance, security, scalability, and easy management.</p>
                                    <ul>
                                        <li>Custom Website Development</li>
                                        <li>Laravel, PHP & JavaScript Development</li>
                                        <li>Business & Corporate Websites</li>
                                        <li>Responsive Web Design</li>
                                        <li>Content Management Systems (CMS)</li>
                                        <li>E-commerce Website Development</li>
                                        <li>API & Third-Party Integrations</li>
                                        <li>Website Redesign & Modernization</li>
                                        <li>Performance & Speed Optimization</li>
                                        <li>Landing Page Development</li>
                                        <li>Search Engine Optimization (SEO)</li>
                                    </ul>
                                    <a className="custom-btn custom-border-btn btn mt-3"></a>
                                    <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                                        <i className="services-icon bi-globe"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="services-thumb services-thumb-up">
                                    <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                        <h3 className="mb-0">Bug Fixes</h3>
                                        <div className="services-price-wrap ms-auto d-none">
                                            <p className="services-price-text mb-0"></p>
                                            <div className="services-price-overlay"></div>
                                        </div>
                                    </div>
                                    <p>We identify, troubleshoot, and resolve website and application issues to keep your system running smoothly and reliably. From minor UI glitches to complex backend errors, we provide fast and effective bug-fixing solutions.</p>
                                    <ul>
                                        <li>Website Error Fixing</li>
                                        <li>Frontend & UI Bug Fixes</li>
                                        <li>Performance Optimization</li>
                                        <li>Database Error Resolution</li>
                                        <li>API & Third-Party Integration Fixes</li>
                                        <li>Backend & Server-Side Issues</li>
                                        <li>Performance Issue Fixes</li>
                                        <li>Cross-Browser Compatibility Fixes</li>
                                        <li>Security Vulnerability Fixes</li>
                                        <li>Laravel, PHP & JavaScript Bug Fixes</li>
                                        <li>Application Error Resolution</li>
                                    </ul>
                                    <a className="custom-btn custom-border-btn btn mt-3"></a>
                                    <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                                        <i className="services-icon bi-lightbulb"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="services-thumb">
                                    <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                        <h3 className="mb-0">E-commerce Development</h3>
                                        <div className="services-price-wrap ms-auto d-none">
                                            <p className="services-price-text mb-0"></p>
                                            <div className="services-price-overlay"></div>
                                        </div>
                                    </div>
                                    <p>We build secure, scalable, and user-friendly e-commerce websites that make online shopping simple and seamless. Our solutions are designed to improve customer experience, streamline store management, and support business growth.</p>
                                    <ul>
                                        <li>Custom E-commerce Website Development</li>
                                        <li>Product &amp; Category Management</li>
                                        <li>Shopping Cart &amp; Checkout Development</li>
                                        <li>Payment Gateway Integration</li>
                                        <li>Order &amp; Inventory Management</li>
                                        <li>Customer Account Management</li>
                                        <li>Coupon &amp; Discount Features</li>
                                        <li>Shipping &amp; Delivery Integration</li>
                                        <li>Mobile-Responsive Store Design</li>
                                        <li>E-commerce Maintenance &amp; Support</li>
                                    </ul>
                                    <a className="custom-btn custom-border-btn btn mt-3"></a>
                                    <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                                        <i className="services-icon bi-laptop"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="services-thumb services-thumb-up">
                                    <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                        <h3 className="mb-0">Web Design</h3>
                                        <div className="services-price-wrap ms-auto d-none">
                                            <p className="services-price-text mb-0"></p>
                                            <div className="services-price-overlay"></div>
                                        </div>
                                    </div>
                                    <p>We create modern, attractive, and user-friendly website designs that reflect your brand and provide a smooth experience across all devices. Our web design solutions focus on usability, responsiveness, visual appeal, and performance.</p>
                                    <ul>
                                        <li>Custom Website Design</li>
                                        <li>Responsive Web Design</li>
                                        <li>UI/UX Design</li>
                                        <li>Landing Page Design</li>
                                        <li>Business Website Design</li>
                                        <li>E-commerce Website Design</li>
                                        <li>Mobile-Friendly Layouts</li>
                                        <li>Website Redesign</li>
                                        <li>Cross-Browser Compatibility</li>
                                        <li>Design Maintenance &amp; Support</li>
                                    </ul>
                                    <a className="custom-btn custom-border-btn btn mt-3"></a>
                                    <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                                        <i className="services-icon bi-webcamp"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="services-thumb services-thumb-up">
                                    <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                        <h3 className="mb-0">Third-party API Integration</h3>
                                        <div className="services-price-wrap ms-auto d-none">
                                            <p className="services-price-text mb-0"></p>
                                            <div className="services-price-overlay"></div>
                                        </div>
                                    </div>
                                    <p>We integrate third-party APIs to enhance your website's functionality and provide seamless connectivity with various services and platforms.</p>
                                    <ul>
                                        <li>Custom API Development</li>
                                        <li>Third-Party API Integration</li>
                                        <li>API Authentication & Security</li>
                                        <li>Data Validation & Error Handling</li>
                                        <li>API Documentation & Support</li>
                                    </ul>
                                    <a  className="custom-btn custom-border-btn btn mt-3"></a>
                                    <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                                        <i className="services-icon bi-google"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="services-thumb services-thumb-up">
                                    <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                        <h3 className="mb-0">Rest API's Integration</h3>
                                        <div className="services-price-wrap ms-auto d-none">
                                            <p className="services-price-text mb-0"></p>
                                            <div className="services-price-overlay"></div>
                                        </div>
                                    </div>
                                    <p>We develop and integrate REST APIs to enable smooth communication between your application and external services, ensuring data consistency and real-time updates.</p>
                                    <ul>
                                        <li>Custom REST API Development</li>
                                        <li>Third-Party API Integration</li>
                                        <li>API Authentication & Security</li>
                                        <li>Data Validation & Error Handling</li>
                                        <li>API Documentation & Support</li>
                                        <li>Performance Optimization & Caching</li>
                                        <li>Versioning & Maintenance of APIs</li>
                                        <li>Integration with Frontend & Mobile Applications</li>
                                        <li>Monitoring & Logging of API Requests</li>
                                        <li>Scalable API Architecture Design</li>
                                        <li>Real-Time Data Synchronization</li>
                                        <li>Cross-Origin Resource Sharing (CORS) Configuration</li>
                                    </ul>
                                    <a  className="custom-btn custom-border-btn btn mt-3"></a>
                                    <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                                        <i className="services-icon bi-sliders"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="projects section-padding d-none" id="section_4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-12 ms-auto">
                        <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                            <img src="/images/white-desk-work-study-aesthetics.jpg" className="avatar-image img-fluid" alt=""/>
                            <h2 className="text-white ms-4 mb-0">Projects</h2>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="projects-thumb">
                            <div className="projects-info">
                                <small className="projects-tag">Branding</small>
                                <h3 className="projects-title">Zoik agency</h3>
                            </div>
                            <a href="/images/projects/nikhil-KO4io-eCAXA-unsplash.jpg" className="popup-image">
                                <img src="/images/projects/nikhil-KO4io-eCAXA-unsplash.jpg" className="projects-image img-fluid" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="projects-thumb">
                            <div className="projects-info">
                                <small className="projects-tag">Photography</small>
                                <h3 className="projects-title">The Watch</h3>
                            </div>
                            <a href="/images/projects/the-5th-IQYR7N67dhM-unsplash.jpg" className="popup-image">
                                <img src="/images/projects/the-5th-IQYR7N67dhM-unsplash.jpg" className="projects-image img-fluid" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="projects-thumb">
                            <div className="projects-info">
                                <small className="projects-tag">Website</small>
                                <h3 className="projects-title">Polo</h3>
                            </div>
                            <a href="/images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg" className="popup-image">
                                <img src="/images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg" className="projects-image img-fluid" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact section-padding" id="section_5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-12">
                        <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                            <img src="/images/aerial-view-man-using-computer-laptop-wooden-table.jpg" className="avatar-image img-fluid" alt=""/>
                            <h2 className="text-white ms-4 mb-0">Say Hi</h2>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-3 col-md-6 col-12 pe-lg-0">
                        <div className="contact-info contact-info-border-start d-flex flex-column">
                            <strong className="site-footer-title d-block mb-3">Services</strong>
                            <ul className="footer-menu">
                                <li className="footer-menu-item"><a href="/" className="footer-menu-link">Websites Development</a></li>
                                <li className="footer-menu-item"><a href="/" className="footer-menu-link">Bug Fixes</a></li>
                                <li className="footer-menu-item"><a href="/" className="footer-menu-link">Ecommerce</a></li>
                                <li className="footer-menu-item"><a href="/" className="footer-menu-link">Web Design</a></li>
                            </ul>
                            <strong className="site-footer-title d-block mt-4 mb-3">Stay connected</strong>
                            <ul className="social-icon">
                                <li className="social-icon-item"><a href="/" className="social-icon-link bi-twitter"></a></li>
                                <li className="social-icon-item"><a href="/" className="social-icon-link bi-instagram"></a></li>
                                <li className="social-icon-item"><a href="/" className="social-icon-link bi-pinterest"></a></li>
                                <li className="social-icon-item"><a href="/" className="social-icon-link bi-youtube"></a></li>
                            </ul>
                            <strong className="site-footer-title d-block mt-4 mb-3">Start a project</strong>
                            <p className="mb-0">I’m available for part time projects</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 ps-lg-0">
                        <div className="contact-info d-flex flex-column">
                            <strong className="site-footer-title d-block mb-3">About</strong>
                            <p className="mb-2">PHP Developer with in designing and implementing web applications using Laravel, Node.js, MySQL, and jQuery. Demonstrated ability to collaborate effectively with cross-functional teams to meet project goals.</p>
                            <strong className="site-footer-title d-block mt-4 mb-3">Email</strong>
                            <p>
                                <a href="mailto:anjaneyulugulla33@gmail.com">
                                    anjaneyulugulla33@gmail.com
                                </a>
                            </p>
                            <strong className="site-footer-title d-block mt-4 mb-3">Call</strong>
                            <p className="mb-0">
                                <a href="tel:801-970-4808">
                                    801-970-4808
                                </a>
                            </p>
                        </div>
                    </div>
                          
                    <div className="col-lg-6 col-12 mt-5 mt-lg-0 d-none">
                        <form action="#" method="get" className="custom-form contact-form" role="form">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-floating">
                                        <input type="text" name="name" id="name" className="form-control" placeholder="Name" required/>              
                                        <label htmlFor="name">Name</label>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12"> 
                                    <div className="form-floating">
                                        <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required/>  
                                        <label htmlFor="email">Email address</label>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="form-check form-check-inline">
                                        <input name="website" type="checkbox" className="form-check-input" id="inlineCheckbox1" value="1"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">
                                            <i className="bi-globe form-check-icon"></i>
                                            <span className="form-check-label-text">Websites Development</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="form-check form-check-inline">
                                        <input name="branding" type="checkbox" className="form-check-input" id="inlineCheckbox2" value="1"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">
                                            <i className="bi-lightbulb form-check-icon"></i>
                                            <span className="form-check-label-text">Bug Fixes</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="form-check form-check-inline">
                                        <input name="ecommerce" type="checkbox" className="form-check-input" id="inlineCheckbox3" value="1"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox3">
                                            <i className="bi-phone form-check-icon"></i>
                                            <span className="form-check-label-text">Web Design</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="form-check form-check-inline me-0">
                                        <input name="seo" type="checkbox" className="form-check-input" id="inlineCheckbox4" value="1"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox4">
                                            <i className="bi-google form-check-icon"></i>
                                            <span className="form-check-label-text">E-commerce</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" id="message" name="message" placeholder="Tell me about the project"></textarea>  
                                        <label htmlFor="message">Tell me about the project</label>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-12 ms-auto">
                                    <button type="submit" className="form-control">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="copyright-text-wrap">
                        <p className="mb-0">
                            <span className="copyright-text">Copyright © 2026 <a href="/">Portfolio</a> All rights reserved.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default App
