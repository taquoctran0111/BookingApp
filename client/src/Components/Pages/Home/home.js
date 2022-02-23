import React, { useEffect, useState } from "react";
import "./home.css";
import Grid from '@material-ui/core/Grid';
import SaleLogo from "../../../assets/image/sale-icon.png";
import SaleImage from "../../../assets/image/sale-image.jpg";
import LocaImage from "../../../assets/image/dalat.jpg";
import DNImage from "../../../assets/image/danang.jpg";
import NTImage from "../../../assets/image/nhatrang.jpg";
import SPImage from "../../../assets/image/sapa.jpg";
import HNImage from "../../../assets/image/hanoi.jpg";
import DiscoveryImg from "../../../assets/image/discovery.png";
import { Carousel } from '@trendyol-js/react-carousel';
import Footer from "../../Footer/footer";
import {NavLink} from "react-router-dom";
import axios from "axios";

function Home() {
    const [hotels, setHotels] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8797/hotels')
        .then(res => {
            setHotels(res.data.result.hotels);
        })
        .catch(err => {
            console.log(err);
        })
    },[])
    var countDaLatHotel = hotels.filter(hotel=>hotel.city_id === 11).length;
    var countDaNangHotel = hotels.filter(hotel=>hotel.city_id === 8).length;
    var countNhaTrangHotel = hotels.filter(hotel=>hotel.city_id === 9).length;
    var countSapaHotel = hotels.filter(hotel=>hotel.city_id === 10).length;
    var countHaNoiHotel = hotels.filter(hotel=>hotel.city_id === 1).length;
    
    return(
        <div>
            <div className="container-home" style={{marginBottom: 150}}>
                <div className="title-container">
                    <img src = {SaleLogo} alt="" className="sale-logo"/>
                    <label className="title">Tìm kiếm các ưu đãi</label>   
                </div>
                <div className="sale-container">
                    <img src = {SaleImage} alt = "" className="sale-image"/>
                    <div className="sale-desc">
                        <div className="slogan">Tìm kiếm những ưu đãi tốt nhất cho bạn trong năm 2022</div>
                        <div className="desc">Rất nhiều ưu đãi hấp dẫn từ các khách sạn dành cho bạn</div>
                        <button className="sale-button">Tìm kiếm ưu đãi</button>
                    </div>
                </div>
                <div className="location-grid">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} className = "grid-container">
                            <NavLink exact to = "/listhotel" state={{id: 11, name: "Đà Lạt"}}>
                                <img src = {LocaImage} alt ="" className="location-image"/>
                                <div className="location-desc">
                                    <div style={{fontWeight: "bold"}}>Đà Lạt</div>
                                    <div>{countDaLatHotel} chỗ ở</div>
                                </div>
                            </NavLink>
                        </Grid>
                        <Grid item xs={12} sm={6} className = "grid-container">
                            <NavLink exact to = "/listhotel" state={{id: 8, name: "Đà Nẵng"}}>
                                <img src = {DNImage} alt ="" className="location-image"/>
                                <div className="location-desc">
                                    <div style={{fontWeight: "bold"}}>Đà Nẵng</div>
                                    <div>{countDaNangHotel} chỗ ở</div>
                                </div>
                            </NavLink>
                        </Grid>
                        <Grid item xs={6} sm={4} className = "grid-container">
                            <NavLink exact to = "/listhotel" state={{id: 9, name: "Nha Trang"}}>
                                <img src = {NTImage} alt ="" className="location-image"/>
                                <div className="location-desc">
                                    <div style={{fontWeight: "bold"}}>Nha Trang</div>
                                    <div>{countNhaTrangHotel} chỗ ở</div>
                                </div>
                            </NavLink>
                        </Grid>
                        <Grid item xs={6} sm={4} className = "grid-container">
                            <NavLink exact to = "/listhotel" state={{id: 10, name: "Sa Pa"}}>
                                <img src = {SPImage} alt ="" className="location-image"/>
                                <div className="location-desc">
                                    <div style={{fontWeight: "bold"}}>Sapa</div>
                                    <div>{countSapaHotel} chỗ ở</div>
                                </div>
                            </NavLink>
                        </Grid>
                        <Grid item xs={6} sm={4} className = "grid-container">
                            <NavLink exact to = "/listhotel" state={{id: 1, name: "Hà Nội"}}>
                                <img src = {HNImage} alt ="" className="location-image"/>
                                <div className="location-desc">
                                    <div style={{fontWeight: "bold"}}>Hà Nội</div>
                                    <div>{countHaNoiHotel} chỗ ở</div>
                                </div>
                            </NavLink>
                        </Grid>
                    </Grid>
                </div>
                <div className="discovery-container">
                    <div className="title-container">
                        <img src = {DiscoveryImg} alt="" className="sale-logo" />
                        <label className="title">Khám phá Việt Nam</label>   
                    </div>
                    <Carousel show={5.5} slide={3} transition={0.5} className="carousel" swiping={true}>
                        <div className="slider">
                            <NavLink exact to = "/listhotel" style={{textDecoration: "none"}}>
                                <img src={LocaImage} alt="" className="slider-img"/>
                                <div className="discovery-desc">
                                    <div>Đà Lạt</div>
                                    <div>2,300 chỗ nghỉ</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="slider">
                            <NavLink exact to = "/listhotel" style={{textDecoration: "none"}}>
                                <img src={LocaImage} alt="" className="slider-img"/>
                                <div className="discovery-desc">
                                    <div>Đà Lạt</div>
                                    <div>2,300 chỗ nghỉ</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="slider">
                            <NavLink exact to = "/listhotel" style={{textDecoration: "none"}}>
                                <img src={LocaImage} alt="" className="slider-img"/>
                                <div className="discovery-desc">
                                    <div>Đà Lạt</div>
                                    <div>2,300 chỗ nghỉ</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="slider">
                            <NavLink exact to = "/listhotel" style={{textDecoration: "none"}}>
                                <img src={LocaImage} alt="" className="slider-img"/>
                                <div className="discovery-desc">
                                    <div>Đà Lạt</div>
                                    <div>2,300 chỗ nghỉ</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="slider">
                            <NavLink exact to = "/listhotel" style={{textDecoration: "none"}}>
                                <img src={LocaImage} alt="" className="slider-img"/>
                                <div className="discovery-desc">
                                    <div>Đà Lạt</div>
                                    <div>2,300 chỗ nghỉ</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="slider">
                            <NavLink exact to = "/listhotel" style={{textDecoration: "none"}}>
                                <img src={LocaImage} alt="" className="slider-img"/>
                                <div className="discovery-desc">
                                    <div>Đà Lạt</div>
                                    <div>2,300 chỗ nghỉ</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="slider">
                            <NavLink exact to = "/listhotel" style={{textDecoration: "none"}}>
                                <img src={LocaImage} alt="" className="slider-img"/>
                                <div className="discovery-desc">
                                    <div>Đà Lạt</div>
                                    <div>2,300 chỗ nghỉ</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="slider">
                            <NavLink exact to = "/listhotel" style={{textDecoration: "none"}}>
                                <img src={LocaImage} alt="" className="slider-img"/>
                                <div className="discovery-desc">
                                    <div>Đà Lạt</div>
                                    <div>2,300 chỗ nghỉ</div>
                                </div>
                            </NavLink>
                        </div>
                    </Carousel>
                </div>
                <div className="discovery-container" style={{marginTop: 100}}>
                    <div className="title-container">
                        <img src = {DiscoveryImg} alt="" className="sale-logo" />
                        <label className="title">Các địa điểm được yêu thích</label>   
                    </div>
                    <Carousel show={5.5} slide={3} transition={0.5} className="carousel" swiping={true}>
                        <div className="slider">
                            <NavLink exact to = "/listhotel" style={{textDecoration: "none"}}>
                                <img src={LocaImage} alt="" className="slider-img"/>
                                <div className="discovery-desc">
                                    <div>Đà Lạt</div>
                                    <div>2,300 chỗ nghỉ</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="slider">
                            <NavLink exact to = "/listhotel" style={{textDecoration: "none"}}>
                                <img src={LocaImage} alt="" className="slider-img"/>
                                <div className="discovery-desc">
                                    <div>Đà Lạt</div>
                                    <div>2,300 chỗ nghỉ</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="slider">
                            <NavLink exact to = "/listhotel" style={{textDecoration: "none"}}>
                                <img src={LocaImage} alt="" className="slider-img"/>
                                <div className="discovery-desc">
                                    <div>Đà Lạt</div>
                                    <div>2,300 chỗ nghỉ</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="slider">
                            <NavLink exact to = "/listhotel" style={{textDecoration: "none"}}>
                                <img src={LocaImage} alt="" className="slider-img"/>
                                <div className="discovery-desc">
                                    <div>Đà Lạt</div>
                                    <div>2,300 chỗ nghỉ</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="slider">
                            <NavLink exact to = "/listhotel" style={{textDecoration: "none"}}>
                                <img src={LocaImage} alt="" className="slider-img"/>
                                <div className="discovery-desc">
                                    <div>Đà Lạt</div>
                                    <div>2,300 chỗ nghỉ</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="slider">
                            <NavLink exact to = "/listhotel" style={{textDecoration: "none"}}>
                                <img src={LocaImage} alt="" className="slider-img"/>
                                <div className="discovery-desc">
                                    <div>Đà Lạt</div>
                                    <div>2,300 chỗ nghỉ</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="slider">
                            <NavLink exact to = "/listhotel" style={{textDecoration: "none"}}>
                                <img src={LocaImage} alt="" className="slider-img"/>
                                <div className="discovery-desc">
                                    <div>Đà Lạt</div>
                                    <div>2,300 chỗ nghỉ</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="slider">
                            <NavLink exact to = "/listhotel" style={{textDecoration: "none"}}>
                                <img src={LocaImage} alt="" className="slider-img"/>
                                <div className="discovery-desc">
                                    <div>Đà Lạt</div>
                                    <div>2,300 chỗ nghỉ</div>
                                </div>
                            </NavLink>
                        </div>
                    </Carousel>
                </div>
            </div>
            <Footer />
        </div>
        
        
    );
}
export default Home;