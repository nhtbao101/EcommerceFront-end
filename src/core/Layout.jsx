import React from "react";
import Menu from "../core/Menu";
import "./layout.css";
const Layout = ({
  title = "title",
  description = "description",
  className,
  children,
  content,
}) => {
  return (
    <div>
      <Menu />
      <div className="jumbotron">
        <h2>{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
      <div>{content}</div>
    </div>
    // cai nay layout chung ây đó là mặc mây cái này là tham số mà
    // chỗ m cho no chạy mặc định đâu mỗi cái router m thêm thôi vì t add layout thằng vô page signup luôn
    // code layout mà bỏ vô từng cái component thì code làm mẹ gì thế thì bỏ mẹ cái layout trên cái route mẹ di
    //lúc đầu làm thế rồi t sửa lịa no là cái biến thôi mà
    // đọc lại props đi, ừ hiêu r
  );
};

export default Layout;
