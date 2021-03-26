import React, {Component} from "react";
import Picture2 from "./Picture5.webp"
import Picture3 from "./Picture6.webp"
import Picture1 from "./Picture7.webp";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";

export default class CarouselBox extends Component {
    render()  {
        return (
          <Carousel>
                                <Carousel.Item>
                                        <div className="container mx-auto">
                                                <img
                                                        className="col-lg-11"
                                                        src={Picture1}
                                                        alt= "Mountains"
                                                />
                                                 </div>
                                <Carousel.Caption>
                                        <h3>Image111</h3>
                                        <p>Text</p>
                                </Carousel.Caption>
                        </Carousel.Item>
             
                        <Carousel.Item>
                                <div className="container mx-auto">
                                        <img
                                                className="col-lg-11"
                                                src={Picture2}
                                                alt= "Mountains"
                                        />
                                </div>
                                <Carousel.Caption>
                                        <h3 style={{ textAlign: "center", fontSize: "5em" }}>Image111</h3>
                                        <p>Text</p>
                                </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                                <div className="container mx-auto">
                                        <img
                                                className="col-lg-11"
                                                src={Picture3}
                                                alt= "Mountains"
                                        />
                                </div>
                                <Carousel.Caption>
                                        <h3>Image111</h3>
                                        <p>Text</p>
                                </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
              
        )
        }
}

