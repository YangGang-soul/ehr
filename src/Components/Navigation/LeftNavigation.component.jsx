import React, {Component} from 'react';
import {
  Link,NavLink
} from 'react-router-dom';

 

class LeftNavigation extends Component {
    render(){
        return(
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink to="/"  className="nav-link active" href="#">
                  <span data-feather="home"></span>
                  我的工作台 <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/org-structure"  className="nav-link" href="#">
                  <span data-feather="file"></span>
                  组织架构
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ele-contract"  className="nav-link" href="#">
                  <span data-feather="shopping-cart"></span>
                  电子合同
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/employee-roster"  className="nav-link" href="#">
                  <span data-feather="users"></span>
                  员工花名册
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/attendance-Record"  className="nav-link" href="#">
                  <span data-feather="bar-chart-2"></span>
                  考勤记录
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/staff-files"  className="nav-link" href="#">
                  <span data-feather="layers"></span>
                  员工档案
                </NavLink>
              </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <NavLink to=""  className="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </NavLink>
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Current month
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Last quarter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Social engagement
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Year-end sale
                </NavLink>
              </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <NavLink to=""  className="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </NavLink>
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Current month
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Last quarter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Social engagement
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Year-end sale
                </NavLink>
              </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <NavLink to=""  className="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </NavLink>
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Current month
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Last quarter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Social engagement
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Year-end sale
                </NavLink>
              </li>
            </ul>
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <NavLink to=""  className="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </NavLink>
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Current month
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Last quarter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Social engagement
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Year-end sale
                </NavLink>
              </li>
            </ul>
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <NavLink to=""  className="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </NavLink>
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Current month
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Last quarter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Social engagement
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to=""  className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Year-end sale
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        )
    }
}
export default LeftNavigation