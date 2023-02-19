import {Link} from 'react-router-dom'
function Header1(){
    return(
        <div className="header">
        <div className="header-item">
          <div className="header__logo">
            <ul>
              <li><p>Tạp chí tri thức trực tuyến</p></li>
              <li>
                <Link to="/">
                <img src="/img/logo1.png" alt="" />
                </Link>
                </li>
            </ul>
          </div>
          <div className="header__menu">
            <ul>
              <li>
                <Link to="/Xuatban">Xuất bản</Link>
              </li>
              <li>
                <Link to="/Kinhdoanh">Kinh doanh</Link>
              </li>
              <li>Công Nghê</li>
              <li>Thể thao</li>
              <li>Giải trí</li>
              <li>Đời sống</li>
              <li>Lifestyle</li>
              <li><img src="assets/img/3.svg" alt="" /></li>
              <li>
                <span>.</span><span>.</span><span>.</span>
              </li>
              <li><i className="fa-solid fa-magnifying-glass" /></li>
              <li><i className="fa-regular fa-user" /></li>
            </ul>
          </div>
        </div>
      </div>
    );
}
export default Header1;