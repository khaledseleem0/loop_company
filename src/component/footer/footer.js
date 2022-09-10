import React, { Component } from "react";
import { Footers, SocialiIcon, Copyright } from "./footers";
import axios from "axios";
class Footer extends Component {
  state = {
    icons: [],
  };
  componentDidMount() {
    axios.get("./app.json").then((res) => {
      let icons = res.data[1];
      this.setState({
        icons,
      });
    });
  }

  render() {
    let icons = this.state.icons;
    let iconsImages = icons.map((icon, index) => {
      return (
        <span key={index}>
          <img src={icon} alt={icon} />
        </span>
      );
    });

    return (
      <>
        <Footers>
          <SocialiIcon>{iconsImages}</SocialiIcon>
          <Copyright>
            <a href="#">support</a>
            <span>all right reseved to loop studio &copy; 2021</span>
          </Copyright>
        </Footers>
      </>
    );
  }
}
export default Footer;
