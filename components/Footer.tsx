import { Container } from "react-bootstrap";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container fluid="lg">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Menu xe</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">Xe đã qua sử dụng</li>
              <li className="nav-item mb-2">Xe mới</li>
              <li className="nav-item mb-2">Chọn cấu hình xe</li>
              <li className="nav-item mb-2">Bảng giá & brochure</li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Tư vấn mua xe</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">Yêu cầu tư vấn</li>
              <li className="nav-item mb-2">Đăng ký lái thử</li>
              <li className="nav-item mb-2">Tìm Nhà Phân Phối gần nhất</li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Dịch vụ</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">Đặt hẹn dịch vụ</li>
              <li className="nav-item mb-2">Ưu đãi đặc biệt</li>
              <li className="nav-item mb-2">Phụ kiện chính hãng</li>
              <li className="nav-item mb-2">
                Hướng dẫn sử dụng dành cho chủ sở hữu xe
              </li>
              <li className="nav-item mb-2">Triệu hồi xe</li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Các dòng xe</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">SUV</li>
              <li className="nav-item mb-2">Sedan</li>
              <li className="nav-item mb-2">Mercedes-AMG</li>
              <li className="nav-item mb-2">Mercedes-Maybach</li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Giới thiệu</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">Liên hệ</li>
              <li className="nav-item mb-2">Câu chuyện của chúng tôi</li>
              <li className="nav-item mb-2">Phát triển bền vững & tương lai</li>
              <li className="nav-item mb-2">Tin tức & sự kiện</li>

            </ul>
          </div>
          {/* <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what&#39;s new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label className="visually-hidden">Email address</label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div> */}
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© {year} Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </Container>
  );
}