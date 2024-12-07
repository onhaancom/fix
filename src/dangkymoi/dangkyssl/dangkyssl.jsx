import './dangkyssl.css';
import Header from '../Header';
import Sidebar from '../Sidebar';

const SSL = () => {
  return (
    <>
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>SSL</p>
          </div>
        </div>
    <div className="card-container">
    <div className="pricing-card">
      <h3 className="pricing-card-title">RAPIDSSL</h3>
      <ul className="pricing-card-list">
        <li>Chính sách bảo hiểm : <b>$10.000</b></li>
        <li>Số domain được bảo mật : <b>1</b></li>
        <li>Độ tin cậy : <b>Cơ bản</b></li>
        <li>Thanh địa chỉ màu xanh : <b>Không</b></li>
        <li>SANs : <b>Không có</b></li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">375,000 đ / 12 tháng</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    <div className="pricing-card">
      <h3 className="pricing-card-title">THAWTE EV SSL</h3>
      <ul className="pricing-card-list">
        <li>Chính sách bảo hiểm : <b>$1.000.000</b></li>
        <li>Số domain được bảo mật : <b>1</b></li>
        <li>Độ tin cậy : <b>Cao</b></li>
        <li>Thanh địa chỉ màu xanh : <b>Có</b></li>
        <li>SANs : <b>Không có</b></li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">3,400,000 đ / 12 tháng</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    <div className="pricing-card">
      <h3 className="pricing-card-title">RAPIDSSL WILDCARD</h3>
      <ul className="pricing-card-list">
        <li>Chính sách bảo hiểm : <b>$10.000</b></li>
        <li>Số domain được bảo mật : <b>Unlimited</b></li>
        <li>Độ tin cậy : <b>Cao</b></li>
        <li>Thanh địa chỉ màu xanh : <b>Không</b></li>
        <li>SANs : <b>Không có</b></li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">3,750,000 đ / 12 tháng</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default SSL;
