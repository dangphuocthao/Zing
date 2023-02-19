function Video (){
    return (
        <div>
        <div className="video">
          <div className="video-title">
            <li className="video-title-icon" />
            <h3>VIDEO</h3>
          </div>
          <div className="video-content">
            <div className="video-content-left">
              <video controls>
                <source src="/video/Zing - Thông tin uy tín, hình ảnh ấn tượng - ZINGNEWS.VN.mp4" />
              </video>
            </div>
            <div className="video-content-right">
              <ul>
                <li><img src="/img/77.jpg" alt="" /><p> Các di sản UNESCO đẹp nhất nên ghé thăm một lần</p><span>Du lịch</span></li>
                <li><img src="/img/78.jpg" alt="" /><p> Highlights Man City 2-0 Girona: De Bruyne và Haaland ghi bàn</p><span>Thể thao</span></li>
                <li><img src="/img/79.jpg" alt="" /><p> Làm thịt heo quay kiểu Philippines đón Giáng Sinh</p><span>Món ngon</span></li>
                <li><img src="/img/80.jpg" alt="" /><p> Thủ môn Australia bị CĐV ném thùng rác vào đầu</p><span>Thể thao</span></li>
                <li><img src="/img/81.jpg" alt="" /><p> Cách làm bánh quy vòng xoáy cho Giáng Sinh</p><span />Món ngon</li>
                <li><img src="/img/82.jpg" alt="" /><p> Trà Phổ Nhĩ tăng hương vị khi ở trên vũ trụ</p><span />Đời sống</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Video;