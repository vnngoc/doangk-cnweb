import React from "react";
import MinhNgoc from "../img/hehe4.jpg";
function AboutMe() {
  return (
    <div>
      <div className="container-about">
        <div>
          <div className="title-heading">SINH VIÊN THỰC HIỆN</div>
          <img
            className="image-about"
            src={MinhNgoc}
            alt="Vương Minh Ngọc avatar"
          />
        </div>

        <div className="container-desc__wrapper">
          <div className="container-desc">
            <p className="context">NHÓM: PHANTOM</p>
            <p className="context">Vương Minh Ngọc 46.01.104.124</p>
            <p className="context">Võ Tấn Bảo 46.01.104.009</p>
            <p className="context">Nguyễn Trương Đăng Khoa 46.01.104.086</p>
            <p className="context">Phạm Trương Gia Hân 46.01.104.046</p>
            <p className="context">Trường: Đại học Sư phạm TP.HCM</p>
            <p className="context">Lớp Học phần: 2211COMP1031-Công nghệ Web</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
