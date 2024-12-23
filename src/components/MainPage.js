import React from "react";
import SideBarAdvert from "./SideBarAdvert";

const MainPage = () => {
  return (
    <main>
      <div className="main-page">
        <div className="sector-window">
          <h2>Калькулятор себестоимости продукции Finist</h2>
          <p className="greeting-text">Здравствуйте, рады видеть вас на нашем сайте!</p>
          <p>Для начала работы с сервисом, пожалуйста, авторизуйтесь.<br/><br/>Если у вас нет профиля, заполните регистрационную форму (Войти -&#62; Регистрация) и наш менеджер с вами свяжется</p>
        </div>
      </div>
      <SideBarAdvert />
    </main>
  );
};

export default MainPage;