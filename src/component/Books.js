function Books() {
    return (
        <div className="books">
        <div className="books__title">
          <li><i className="fa-solid fa-book" /></li>
          <li><h2>BOOKS</h2></li>
        </div>
        <div className="books__item">
          <ul className="books__list">
            <li><img src="/img/17.jpg" alt="" /> <p>Con tim không già đi thì tại sao chúng ta lại già</p> </li>
            <li><img src="/img/18.jpg" alt="" /> <p>Maradona dạy Messi đá phạt như thế nào</p> </li>
            <li><img src="/img/19.jpg" alt="" /> <p>Những bộ tiểu thuyết kỳ ảo được yêu thích nhất năm 2022</p></li>
            <li><img src="/img/21.jpg" alt="" /> <p> Thế giới khoảng đạt và tự do của người da đỏ</p></li>
            <li><img src="/img/20.jpg" alt="" /> <p> Tại sao Mbappe được gọi là 'Hoàng tử bé'</p></li>
          </ul>
        </div>
      </div>
    );
    
}
export default Books;