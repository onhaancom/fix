import React from 'react';
import { FaBell, FaEnvelope, FaUserCircle, FaShoppingCart } from 'react-icons/fa';
const Header = () => {
    const headerStyle = {
        height: '60px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        borderBottom: '1px solid #ccc',
        position: 'fixed',
        top: 0,
        left: '250px', // Sidebar width
        right: 0,
        zIndex: 1000,
        left: '-10px',
    };

    const logoStyle = {
        display: 'flex',
        alignItems: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#e74c3c',
    };

    const iconsContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
    };

    const iconStyle = {
        fontSize: '18px',
        color: '#555',
        cursor: 'pointer',
    };

    const userInfoStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '14px',
        color: '#333',
    };

    const cartStyle = {
        position: 'relative',
        fontSize: '18px',
        cursor: 'pointer',
    };

    const cartBadgeStyle = {
        position: 'absolute',
        top: '-5px',
        right: '-10px',
        backgroundColor: '#e74c3c',
        color: '#fff',
        fontSize: '12px',
        borderRadius: '50%',
        width: '18px',
        height: '18px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={headerStyle}>
            {/* Logo */}
            <div style={logoStyle}>
                <span>TADU</span>
                <span style={{ color: '#f39c12' }}>.cloud</span>
            </div>

            {/* Icons Section */}
            <div style={iconsContainerStyle}>
                <i style={iconStyle} className="fas fa-comment-alt"></i>
                <i style={iconStyle} className="fas fa-envelope"></i>
                <a href="/user/feedback"><span style={iconStyle}>Báo lỗi và góp ý chức năng</span></a>
            </div>

            {/* User Info */}
            <div style={userInfoStyle}>
                <a href="/thongtincanhan"><span>ggg</span></a>
                <div style={cartStyle}>
                    <i className="fas fa-shopping-cart"></i>
                    <div style={cartBadgeStyle}>0</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
