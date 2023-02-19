function Worldcupbox (){
    return (
        <div className="worldcupbox">
        <div className="worldcupbox__header">
          <div className="worldcupbox__header-iconleft">
            <img src="/img/23.svg" alt="" />
          </div>
          <div className="worldcupbox__header-iconright">
            <img src="/img/24.svg" alt="" />
          </div>
          <div className="worldcupbox__header-item">
            <ul>
              <li>TIN TỨC</li>
              <li>BÌNH LUẬN</li>
              <li>HẬU TRƯỜNG</li>
              <li>LỊCH ĐẤU</li>
              <li>BẢNG ĐẤU</li>
              <li>ĐỘI TUYỂN</li>
            </ul>
          </div>
        </div>
        <div className="worldcupbox__article">
          <div className="worldcupbox__article-left">
            <div className="worldcupbox__article-newsleft">
              <ul><h5>Cập nhật</h5>
                <li><p>2 giờ trước</p><h4>10 cầu thủ có thể đổi đời sau World Cup</h4></li>
                <li><p>3 giờ trước</p><h4> CLB có nhiều cầu thủ nhất ở chung kết World Cup</h4></li>
                <li><p>3 giờ trước</p><h4>Messi khiêm tốn còn Ronaldo thì kiêu ngạo</h4></li>
                <li><p>4 giờ trước</p><h4>L'Equipe: Messi là người Pháp</h4></li>
              </ul>
            </div>
            <div className="worldcupbox__article-newsright">
              <ul>
                <li><img src="/img/24.jpg" alt="" /></li>
                <li><h2>Croatia vs Morocco: Modric đá chính</h2></li>
                <li><p>Khi đội trưởng Marcelo Brozovic vắng mặt, gánh nặng dành cho Luka Modric sẽ càng lớn hơn.</p></li>
              </ul>
            </div>
          </div>
          <div className="worldcupbox__article-right">
            <div className="worldcupbox__article-itemleft">
              <ul>
                <li><img src="/img/25.jpg" alt="" /><p>Trezeguet: 'Messi xứng đáng vô địch World Cup'</p></li>
                <li><img src="/img/26.jpg" alt="" /><p>Bàn gỡ 1-1 của Morocco trước Croatia</p></li>
              </ul>
            </div>
            <div className="worldcupbox__article-itemright">
              <div className="worldcupbox__article-itemright-title">
                <h3>LỊCH THI ĐẤU</h3>
              </div>
              <div className="worldcupbox__article-itemright-top">
                <ul>
                  <li>Tranh hạng 3 - Giải lao</li>
                  <li>Croatia <img src="/img/co1.svg" /><span>2-1</span> <img src="/img/co2.svg" />Morocco</li>
                </ul>
              </div>
              <div className="worldcupbox__article-itemright-bot">
                <ul>
                  <li>Chung kết - Chủ nhật</li>
                  <li>Argentina <img src="/img/co3.svg" /><span>20:00</span> <img src="/img/co4.svg" />Pháp</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Worldcupbox;