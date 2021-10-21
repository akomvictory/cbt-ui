import React, { Component } from 'react';

class Dashboard extends Component{
    render(){
     return(
       <div>
       <section className="content">
         <div className="container-fluid">
      <div className="row">
          <div className="col-lg-3 col-6">
           
            <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>

                <p>New Orders</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag"></i>
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
        
          <div className="col-lg-3 col-6">
          
            <div className="small-box bg-success">
              <div className="inner">
                <h3>96<sup style={{fontSize: 20+ 'px'}}>%</sup></h3>

                <p>Performance Rate</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars"></i>
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
        
          <div className="col-lg-3 col-6">
            
            <div className="small-box bg-warning">
              <div className="inner">
              <h3>87<sup style={{fontSize: 20+ 'px'}}>%</sup></h3>

                <p>Class Attendance</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add"></i>
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
         
          <div className="col-lg-3 col-6">
          
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>9</h3>

                <p>Exams Completed</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph"></i>
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          
        </div>
        </div>
        </section>

<div className="row">
<div className="col-md-12">
  <div className="card">
    <div className="card-header">
      <h5 className="card-title">Monthly Recap Report</h5>

      <div className="card-tools">
        <button type="button" className="btn btn-tool" data-card-widget="collapse">
          <i class="fas fa-minus"></i>
        </button>
        <div className="btn-group">
          <button type="button" className="btn btn-tool dropdown-toggle" data-toggle="dropdown">
            <i class="fas fa-wrench"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right" role="menu">
            <a href="#" className="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Another action</a>
            <a href="#" className="dropdown-item">Something else here</a>
            <a class="dropdown-divider"></a>
            <a href="#" className="dropdown-item">Separated link</a>
          </div>
        </div>
        <button type="button" className="btn btn-tool" data-card-widget="remove">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
    
    <div className="card-body">
      <div className="row">
        <div className="col-md-8">
          <p className="text-center">
            <strong>Class Performance: 1 Jan, 2020 - 30 Jul, 2021</strong>
          </p>

          <div className="chart"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
          
            <canvas id="salesChart" height="360" style={{height:180 + 'px', display: 'block', width: 491 +'px'}} width="982" className="chartjs-render-monitor"></canvas>
          </div>
         
        </div>
 
        <div className="col-md-4">
          <p className="text-center">
            <strong>Course Completion</strong>
          </p>

          <div className="progress-group">
            Essential Java
            <span className="float-right"><b>160</b>/200</span>
            <div className="progress progress-sm">
              <div className="progress-bar bg-primary" style={{width: 80+'%' }}></div>
            </div>
          </div>
         

          <div className="progress-group">
            Python Fundemental
            <span className="float-right"><b>310</b>/400</span>
            <div className="progress progress-sm">
              <div className="progress-bar bg-danger" style={{width: 75+'%'}}></div>
            </div>
          </div>

         
          <div className="progress-group">
            <span className="progress-text">Photoshop Intro</span>
            <span className="float-right"><b>480</b>/800</span>
            <div className="progress progress-sm">
              <div className="progress-bar bg-success" style={{width: 60+'%'}}></div>
            </div>
          </div>

    
          <div className="progress-group">
            Basic Linux Operating System
            <span className="float-right"><b>250</b>/500</span>
            <div className="progress progress-sm">
              <div className="progress-bar bg-warning" style={{width: 50 + '%'}}></div>
            </div>
          </div>
       
        </div>
       
      </div>
    
    </div>
  
    <div className="card-footer">
      <div className="row">
        <div className="col-sm-3 col-6">
          <div className="description-block border-right">
            <span className="description-percentage text-success"><i class="fas fa-caret-up"></i> 86%</span>
            <h5 className="description-header">$610.43</h5>
            <span className="description-text">TOTAL FEE PAID</span>
          </div>
        
        </div>
       
        <div className="col-sm-3 col-6">
          <div className="description-block border-right">
            <span className="description-percentage text-warning"><i className="fas fa-caret-left"></i> 230%</span>
            <h5 className="description-header">$10.90</h5>
            <span className="description-text">FEE BALANCE </span>
          </div>
         
        </div>
       
        <div className="col-sm-3 col-6">
          <div className="description-block border-right">
            <span className="description-percentage text-success"><i className="fas fa-caret-up"></i> 80%</span>
            <h5 className="description-header">213.53</h5>
            <span className="description-text">TOTAL SCORE</span>
          </div>
         
        </div>
       
        <div className="col-sm-3 col-6">
          <div className="description-block">
            <span className="description-percentage text-danger"><i className="fas fa-caret-down"></i> 48%</span>
            <h5 className="description-header">4</h5>
            <span className="description-text">COURSES COMPLETED</span>
          </div>
   
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
export default Dashboard