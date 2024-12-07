import React, { useState } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import './themmoi.css'

const AddNew = () => {
  const [formData, setFormData] = useState({
    email: "info@dakdesign.net",
    password: "ycmZ2aLy",
    fullName: "",
    phone: "",
    note: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
            <p>Thêm Mới</p>
          </div>
        </div>
        <h2 className="form-title">Thay Đổi Thông Tin Cá Nhân</h2>
        <form onSubmit={handleSubmit} className="user-info-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="button" className="toggle-password-btn" onClick={handleTogglePassword}>
                {showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Họ tên</label>
            <input
              type="text"
              name="fullName"
              placeholder="Họ Tên"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Số điện thoại</label>
            <input
              type="tel"
              name="phone"
              placeholder="Số điện thoại"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Ghi chú</label>
            <textarea
              name="note"
              placeholder="Ghi chú"
              value={formData.note}
              onChange={handleChange}
            />
          </div>

          <button className="submit-btn" type="submit">Lưu</button>
        </form>
      </div>
    </div>
  );
};

export default AddNew;
