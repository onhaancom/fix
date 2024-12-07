import React, { useState } from 'react';
import './thongtincanhan.css';
import Header from '../Header';
import Sidebar from '../Sidebar';

const Info = () => {
  const [formData, setFormData] = useState({
    email: "info@dakdesign.net",
    fullName: "Hoàng Quốc Tuấn",
    phone: "0943943179",
    address: "Tổ 2, Khối 8, P. Tân Lợi",
    city: "Hồ Chí Minh",
    country: "Viet Nam",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Information:", formData);
    alert("Thông tin đã được cập nhật!");
  };

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
      <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>Thay Đổi Thông Tin Cá Nhân</p>
          </div>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="acc-info">
          <label>Email<input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          /></label>
          
        </div>
        <div className="acc-info">
          <label>Họ tên<input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          /></label>
          
        </div>

        <div className="acc-info">
          <label>Điện thoại<input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          /></label>
          
        </div>

        <div className="acc-info">
          <label>Địa chỉ<input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          /></label>
          
        </div>

        <div className="acc-info">
          <label>Tỉnh/Thành phố<select name="city" value={formData.city} onChange={handleChange}>
            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Đà Nẵng">Đà Nẵng</option>
          </select></label>
          
        </div>

        <div className="acc-info">
          <label>Quốc gia<select name="country" value={formData.country} onChange={handleChange}>
            <option value="Viet Nam">Viet Nam</option>
            <option value="United States">United States</option>
            <option value="Japan">Japan</option>
          </select></label>
          
        </div>

        <button className="acc-info-button" type="submit">Cập nhật ➤</button>
      </form>
    </div>
    </div>
    // </div>
  );
};

export default Info;
