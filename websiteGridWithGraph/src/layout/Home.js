import React, { useState } from "react";
import Fakedata from "../components/Mockdata";
import Chart from "chart.js/auto";
import { Bar,Line } from "react-chartjs-2";
const Home = () => {
  const [data, setdata] = useState(Fakedata);
  
  // const BarChart = () => {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const bardata = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    }
  // }


  return (
    <>
      <div className="page-wrapper">
        <div className="aside-page">
          <div className="aside-top">
            <div className="company-title">
              <div className="company-icon"></div>
              <div className="company-header-title">
                <p>Untitled UI</p>
              </div>
            </div>
            <div>Home</div>
            <div>Projects</div>
            <div>Tasks</div>
            <div>Reporting</div>
          </div>
          <div className="aside-bottom">
            <div>Notifications</div>
            <div>Support</div>
            <div>Setting</div>
            <div className="user-info-wrapper">
              <div className="user-info">
                <div className="image-wrapper">
                  <div>img</div>
                </div>
                <div className="user-details">
                  <div>Name</div>
                  <div>userId</div>
                </div>
                <div className="btn-icon-container">
                  <div>⬆️</div>
                  <div>⬇️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-contents">
          <div className="right-top-content">
            <div className="title">Customers</div>
            <div className="import-container">
              <div className="import-btn">
                <button className="import">Import</button>
              </div>
              <div className="add-customer">
                <button className="add-customer-btn">+ Add customer</button>
              </div>
            </div>
          </div>
          <div className="nav-container">
            <div>Overview</div>
            <div>Table</div>
            <div>List view</div>
            <div>Segment</div>
            <div>Custom</div>
          </div>
          <div className="hightlight-container">
            <div className="highlight-content">
              <div className="left-highlight">
                <div>Total customer</div>
                <div>2450</div>
              </div>
              <div className="right-highlight">
                <div>icon</div>
                <div>20%</div>
              </div>
            </div>
            <div className="highlight-content">
              <div className="left-highlight">
                <div>Total customer</div>
                <div>2450</div>
              </div>
              <div className="right-highlight">
                <div>icon</div>
                <div>20%</div>
              </div>
            </div>
            <div className="highlight-content">
              <div className="left-highlight">
                <div>Total customer</div>
                <div>2450</div>
              </div>
              <div className="right-highlight">
                <div>icon</div>
                <div className="user-active">
                  <div className="user">i</div>
                  <div className="user">i</div>
                  <div className="user">i</div>
                  <div className="user">i</div>
                </div>
              </div>
            </div>
          </div>
          <div className="btns-search-container">
            <div className="btn-filter-container">
              <div>All time</div>
              <div>US ALL</div>
              <div>More filters</div>
            </div>
            <div className="search-container">
              <div className="search-box">
                <input type={"text"} placeholder="Search" />
              </div>
            </div>
          </div>

          <div className="graph-container">
            <div style={{height:'100%',width:'50%'}}>
              <Bar data={bardata} />
            </div>
            <div style={{height:'100%',width:'50%'}}>
              <Line data={bardata} />
            </div>
          </div>

          <div className="header-container">
            <div className="checkbox">
              <input type={"checkbox"} />
            </div>
            <div className="company-container">company</div>
            <div className="status">status</div>
            <div className="about">about</div>
            <div className="users">users</div>
            <div className="license">license</div>
            <div className="edit">edit</div>
          </div>

          <div className="table-container">
            {data?.map((ele, i) => (
              <>
                <div
                  className="checkbox"
                  style={{ gridRow: `${i + 1}/${i + 2}` }}
                >
                  <input type={"checkbox"} />
                </div>
                <div
                  className="company-container"
                  style={{ gridRow: `${i + 1}/${i + 2}` }}
                >
                  <div className="company-logo"></div>
                  <div className="company-details">
                    <div>Name</div>
                    <div>namedesc</div>
                  </div>
                </div>
                <div
                  className="status"
                  style={{ gridRow: `${i + 1}/${i + 2}` }}
                >
                  status
                </div>
                <div className="about" style={{ gridRow: `${i + 1}/${i + 2}` }}>
                  <div>some lorem ipsem some thisn </div>
                  <div>about content is mandatory</div>
                </div>
                <div className="users" style={{ gridRow: `${i + 1}/${i + 2}` }}>
                  users
                </div>
                <div
                  className="license"
                  style={{ gridRow: `${i + 1}/${i + 2}` }}
                >
                  lices
                </div>
                <div className="edit" style={{ gridRow: `${i + 1}/${i + 2}` }}>
                  <div>ico1</div>
                  <div>ico2</div>
                </div>
              </>
            ))}
          </div>
          <div className="bottom-container">
            <div>previous</div>
            <div>page 1 of 10</div>
            <div>Next</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
