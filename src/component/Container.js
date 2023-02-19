function Container() {
    return(
        <div className="container">
        <div className="content">
          <div className="content__left">
            <div className="hashtag">
              <div className="hashtag__item">
                <ul>
                  <li><i className="fa-solid fa-arrow-trend-up" /></li>
                  <li>#Chung kết World Cup 2022: Pháp vs Argentina</li>
                  <li>#Cuồng nhiệt cùng World Cup</li>
                  <li>#Best choice award</li>
                </ul>
              </div>
            </div>
            <div className="article__content__left">
              <div className="article__item--left">
                <ul>
                  <li><img src="/img/4.jpg" alt="" /><p>Thaco thành lập công ty con vốn hơn 550 triệu USD</p></li>
                  <li><img src="/img/5.jpg" alt="" /><p>Nha Trang cho xe du lịch trên 29 chỗ vào nội thành</p></li>
                  <li><img src="/img/6.jpg" alt="" /><p>Cách cơ thể và bộ não giúp Messi trở thành cầu thủ giỏi nhất thế giới</p></li>
                  <li><img src="/img/7.jpg" alt="" /><p>Thầy giáo nước ngoài bị cho thôi việc sau khi xô xát với bảo vệ trường</p></li>
                  <li><img src="/img/8.jpg" alt="" /><p>'Phần mềm' và 'phần cứng' tuyệt vời của Messi</p></li>
                </ul>
              </div>
              <div className="article__item--right">
                <ul>
                  <li><img src="/img/9.jpg" alt="" /><h3>Nhạc sĩ Quốc Trung: Nghệ sĩ không sợ nhiều luật</h3></li>
                  <li><p>"Nghệ sĩ không sợ nhiều luật, không sợ ít luật, mà sợ luật không rõ ràng, không cụ thể", nhạc sĩ Quốc Trung chia sẻ khó khăn của người làm sáng tạo khi tác phẩm vướng các quy định.</p></li>
                  <li><h5>Đưa giáo dục giá trị văn hóa, con người vào trường học</h5></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="content__right">
            <div className="content__right--windy">
              <ul>
                <li><h4>Đà nẵng</h4></li>
                <li><p>19°C / 18-22°C</p></li>
                <li><i className="fa-solid fa-cloud-sun-rain" /></li>
                <li className="content--hidden"><i className="fa-solid fa-circle-chevron-down" /></li>
              </ul>
            </div>
            <div className="article__content__right">
              <div className="article__news">
                <ul>
                  <li><img src="/img/14.jpg" alt="" /><p>Phố Wall chao đảo</p></li>
                  <li><img src="/img/11.jpg" alt="" /><p>Khách khó mua điện thoại trả góp dịp cuối năm</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
}
export default Container;