import React, { useState } from "react";
import Header from '../Header';
import Sidebar from '../Sidebar';
import './danhsach.css'

const CustomerList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const customers = [
    { email: "nthang91@gmail.com", name: "Nguyễn Thắng", phone: "0916531611", status: "Đã kích hoạt" },
    { email: "dudu@greencentury.com.vn", name: "Anh Duy", phone: "0932592733", status: "Chưa kích hoạt" },
    { email: "rocker03041989@gmail.com", name: "Hoàng Quốc Dũng", phone: "097751517", status: "Đã kích hoạt" },
    { email: "admin@anhpro.biz", name: "Quốc Anh", phone: "0941280777", status: "Đã kích hoạt" },
    { email: "huynhph00628@fpt.edu.vn", name: "Phạm Hoàng Huy", phone: "01293223225", status: "Đã kích hoạt" },
    { email: "lethanhit1088@gmail.com", name: "Lê Đình Thành", phone: "0962632722", status: "Đã kích hoạt" },
    { email: "xuantruong080889@gmail.com", name: "Nông Xuân Trường", phone: "0988480101", status: "Đã kích hoạt" },
    { email: "admin@anhpro.biz", name: "Quốc Anh", phone: "0941280777", status: "Đã kích hoạt" },
    { email: "huynhph00628@fpt.edu.vn", name: "Phạm Hoàng Huy", phone: "01293223225", status: "Đã kích hoạt" },
    { email: "lethanhit1088@gmail.com", name: "Lê Đình Thành", phone: "0962632722", status: "Đã kích hoạt" },
    { email: "xuantruong080889@gmail.com", name: "Nông Xuân Trường", phone: "0988480101", status: "Đã kích hoạt" },
    { email: "dudu@greencentury.com.vn", name: "Anh Duy", phone: "0932592733", status: "Chưa kích hoạt" },
    { email: "nthang91@gmail.com", name: "Nguyễn Thắng", phone: "0916531611", status: "Đã kích hoạt" },
    { email: "dudu@greencentury.com.vn", name: "Anh Duy", phone: "0932592733", status: "Chưa kích hoạt" },
    { email: "rocker03041989@gmail.com", name: "Hoàng Quốc Dũng", phone: "097751517", status: "Đã kích hoạt" },
    { email: "admin@anhpro.biz", name: "Quốc Anh", phone: "0941280777", status: "Đã kích hoạt" },
    { email: "huynhph00628@fpt.edu.vn", name: "Phạm Hoàng Huy", phone: "01293223225", status: "Đã kích hoạt" },
    { email: "lethanhit1088@gmail.com", name: "Lê Đình Thành", phone: "0962632722", status: "Đã kích hoạt" },
    { email: "xuantruong080889@gmail.com", name: "Nông Xuân Trường", phone: "0988480101", status: "Đã kích hoạt" },
  ];

  // Lọc danh sách khách hàng theo email hoặc số điện thoại
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
  );

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>Danh Sách Khách Hàng</p>
          </div>
        </div>
    <div className="customer-list-wrapper">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Email, số điện thoại"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button">Tìm</button>
      </div>
      <table className="customer-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Họ Tên - Điện Thoại</th>
            <th>Trạng Thái</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.email}</td>
              <td>
                {customer.name} - {customer.phone}
              </td>
              <td>
                <span
                  className={`status ${
                    customer.status === "Đã kích hoạt" ? "active" : "inactive"
                  }`}
                >
                  {customer.status.toUpperCase()}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default CustomerList;
