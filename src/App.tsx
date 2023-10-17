import { NavCard } from "./Components/NavCard";
import { TileCard } from "./Components/TileCard";
import { OverviewChart } from "./Components/OverviewChart";
import "./index.css";
import {
  IconSettings2,
  IconChevronRight,
  IconChevronDown,
  IconSearch,
} from "@tabler/icons-react";
import { LabelsData } from "./Components/LabelsData";
import { CustomersCard } from "./Components/CustomersCard";
import { ProductItems } from "./Components/ProductItems";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="wrapper">
          <div className="sideBarHeader">
            <>
              <IconSettings2 size={33} />
              <h1>Dashboard</h1>
            </>
          </div>
          <div className="navBarSection">
            {NavCard.map((item) => {
              return (
                <div className="navItems" key={item.name}>
                  <div className="navItemsLeft">
                    <span>{item.icon}</span>
                    <h4>{item.name}</h4>
                  </div>
                  <IconChevronRight className="iconDisplay" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="userInfoSection">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxWnLAMqGNETsqRqmcjVLm6Mz8uiFPWE85w&usqp=CAU"
            alt=""
          />
          <div className="userDetails">
            <h5>Evano</h5>
            <p>Project Manager</p>
          </div>
          <IconChevronDown className="userIcon" />
        </div>
      </div>
      <div className="displaySection">
        <div className="displaySectionHeader">
          <h3>Hello Shahrukh 👋,</h3>
          <div className="headerSearch">
            <IconSearch className="searchIcon" size={15} />
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="displaySectionTileInfoCards">
          {TileCard.map((item) => {
            return (
              <div className="tile" key={item.title}>
                <span>{item.icon}</span>
                <div className="tileInfo">
                  <h6>{item.title}</h6>
                  <h2>{item.value}</h2>
                  <div className="percentage">
                    <span className="arrowIcons">{item.changeIcon}</span>
                    <div className="percentageDisplayText">
                      <span style={{ color: item.changeIcon.props.color }}>
                        {item.percentage}
                      </span>
                      <span>{item.text}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="displaySectionLongInfoCards">
          <div className="overviewCard">
            <div className="overviewCardHeader">
              <div className="left">
                <h2>Overview</h2>
                <span>Monthly Earning</span>
              </div>
              <select name="" id="">
                <option value="" selected disabled hidden>
                  Quaterly
                </option>
              </select>
            </div>
            <OverviewChart />
            <div className="labelText">
              {LabelsData.map((label) => {
                return <div className="label">{label}</div>;
              })}
            </div>
          </div>
          <div className="cutomersCard">
            <div className="overviewCardHeader">
              <div className="left">
                <h2>customers</h2>
                <span>Customers that buy products</span>
              </div>
              <CustomersCard />
              <div className="customersText">
                <h2>65%</h2>
                <span>Total New Customers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="displaySectionProductInfoCards">
          <div className="productHeader">
            <h2>Product Sell</h2>
            <div className="productHeaderWrapper">
              <div className="productSearch">
                <span>
                  <IconSearch />
                </span>
                <input type="search" placeholder="Search" />
              </div>
              <select name="" id="">
                <option value="" selected disabled hidden>
                  Last 30 days
                </option>
              </select>
            </div>
          </div>
          <div className="productHeadings">
            <h3>Product Name</h3>
            <div className="right">
              <h3>Stock</h3>
              <h3>Price</h3>
              <h3>Total Sales</h3>
            </div>
          </div>
          <div className="productItems">
            {ProductItems.map((products) => {
              return (
                <div className="product">
                  <div className="productInfoLeft">
                    <img src={products.image} />
                    <div className="infoWrapper">
                      <h3>{products.title}</h3>
                      <p>{products.text}</p>
                    </div>
                  </div>
                  <div className="productInfoRight">
                    <p>{products.stock}</p>
                    <p className="price">{products.price}</p>
                    <p className="sales">{products.total}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
