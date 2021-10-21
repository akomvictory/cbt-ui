import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends Component{
    render(){
        return(
            
<aside class="main-sidebar sidebar-dark-primary elevation-4">
 <Link to="/">
    <a href="/" class="brand-link">
      <img src="img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{opacity: .8}} />
      <span class="brand-text font-weight-light">EduX</span>
    </a>
  </Link>

   
    <div class="sidebar">
 
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
        </div>
        <div class="info">
        <Link to="/">
          Alexander Pierce
        </Link> 
        </div>
      </div>

      
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
         
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
              <Link to="/dashboard"> Dashboard </Link>
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
              
                <a href="#" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p><Link to="/exam"> Start Exam </Link> </p>
                </a>
              </li>
              <li class="nav-item">
              <Link to="/">
                <a href="/" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Home Page</p>
                </a>
              </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Simple Link
                <span class="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
        </ul>
      </nav>
     
    </div>
  
  </aside>
        )
    }
}

export default Sidebar