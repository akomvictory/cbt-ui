import React, { Component } from 'react';

class Home extends Component{
    render(){
     return(
        <div class="content-wrapper"style={{ minHeight: '357px'}} >
      
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark"> EduX CBT Exams</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Starter Page</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
     
    
     
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">CBT Guide</h5>
    
                    <p class="card-text">
                    Onlinevarsity is the ecommerce arm of Aptech, a global learning solutions company present in 40 countries.
                    </p>
    
                    <a href="#" class="card-link">Test Practice</a>
                    <a href="#" class="card-link">Student Guide</a>
                  </div>
                </div>
    
                <div class="card card-primary card-outline">
                  <div class="card-body">
                    <h5 class="card-title">Summer Bootcamp</h5>
    
                    <p class="card-text">
                      Join 40k+ student to enroll for the aptech 
                      hackerthon summer code bootcamp.
                    </p>
                    <a href="#" class="card-link">Register Here</a>
                    <a href="#" class="card-link">View Enrollment</a>
                  </div>
                </div>
              </div>
       
              <div className="col-lg-6">
              <div className="card card-widget widget-user-2">
              <div className="widget-user-header bg-warning">
                <div className="widget-user-image">
                  <img className="img-circle elevation-2" src="/img/user7-128x128.jpg" alt="User Avatar" />
                </div>
                
                <h3 className="widget-user-username">Nadia Carmichael</h3>
                <h5 className="widget-user-desc">ADSE Faculty </h5>
              </div>
              <div className="card-footer p-0">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Projects <span className="float-right badge bg-primary">31</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Exams <span className="float-right badge bg-info">5</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" className="nav-link">
                      Completed Projects <span class="float-right badge bg-success">12</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                     Academic Performance <span className="float-right badge bg-success">96%</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
              </div> 
        
            </div>
         
          </div>
        </div>
        
      </div>
        )
    }
}
export default Home