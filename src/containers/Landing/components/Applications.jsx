import React, { useState } from 'react';
import PropTypes from 'prop-types';

const background = `${process.env.PUBLIC_URL}/img/landing/applications_bg.png`;
const email = `${process.env.PUBLIC_URL}/img/landing/applications_email.png`;
const calendar = `${process.env.PUBLIC_URL}/img/landing/applications_calendar.png`;
const chat = `${process.env.PUBLIC_URL}/img/landing/applications_chat.png`;
const todo = `${process.env.PUBLIC_URL}/img/landing/applications_todo.png`;
// decors
const plusLg = `${process.env.PUBLIC_URL}/img/landing/decor/plus-lg.png`;
const plusMd = `${process.env.PUBLIC_URL}/img/landing/decor/plus-md.png`;
const plusSm = `${process.env.PUBLIC_URL}/img/landing/decor/plus-sm.png`;
const point = `${process.env.PUBLIC_URL}/img/landing/decor/point.png`;
const pointsLg = `${process.env.PUBLIC_URL}/img/landing/decor/points-lg.png`;
const pointsMd = `${process.env.PUBLIC_URL}/img/landing/decor/points-md.png`;
const pointsSm = `${process.env.PUBLIC_URL}/img/landing/decor/points-sm.png`;
const sinLg = `${process.env.PUBLIC_URL}/img/landing/decor/sin-lg.png`;
const sinMd = `${process.env.PUBLIC_URL}/img/landing/decor/sin-md.png`;

const AppsEnum = {
  Email: 'email',
  Calendar: 'calendar',
  Chat: 'chat',
  ToDo: 'todo',
};

const sliderData = {
  [AppsEnum.Email]: {
    img: email,
    caption: 'Simple and convenient application for collecting and viewing letters',
  },
  [AppsEnum.Calendar]: {
    img: calendar,
    caption: 'Do not miss a single important event in your life with the calendar application',
  },
  [AppsEnum.Chat]: {
    img: chat,
    caption: 'Communicate, make new acquaintances, save the history of correspondence. It\'s easy with our Chat app',
  },
  [AppsEnum.ToDo]: {
    img: todo,
    caption: 'Make a plan for the day, month, year, to forget nothing. Our task manager will help you!',
  },
};

const Slider = ({ item }) => {
  const { img, caption } = sliderData[item];
  return (
    <div className="applications__slider-body">
      <img className="applications__decor applications__decor--plus-lg" src={plusLg} alt="decoration" />
      <img className="applications__decor applications__decor--plus-md" src={plusMd} alt="decoration" />
      <img className="applications__decor applications__decor--plus-sm" src={plusSm} alt="decoration" />
      <img className="applications__decor applications__decor--point" src={point} alt="decoration" />

      <img className="applications__slider-body-img" src={img} alt="application" />
      <p className="applications__slider-body-caption">{caption}</p>
    </div>
  );
};
Slider.propTypes = {
  item: PropTypes.string.isRequired,
};

const Applications = () => {
  const [selectedApp, selectApp] = useState(AppsEnum.Calendar);
  const selectedClassName = 'applications__slider-btn--selected';
  const addSelectedModifier = currentApp => selected => (selected === currentApp ? selectedClassName : '');

  return (
    <section
      className="landing__section landing__section--applications applications"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img className="applications__decor applications__decor--points-lg" src={pointsLg} alt="decoration" />
      <img className="applications__decor applications__decor--points-md" src={pointsMd} alt="decoration" />
      <img className="applications__decor applications__decor--points-sm" src={pointsSm} alt="decoration" />
      <img className="applications__decor applications__decor--sin-lg" src={sinLg} alt="decoration" />
      <img className="applications__decor applications__decor--sin-md" src={sinMd} alt="decoration" />

      <h3 className="landing__section-title landing__applications-title">Applications</h3>
      <h4 className="landing__additional-title landing__applications-description">
        With the help of components and layouts, we created four different applications. They are a good way
        to get you started if you want to build something similar.
      </h4>
      <div className="applications__slider">
        <button
          className={`applications__slider-btn ${addSelectedModifier(AppsEnum.Email)(selectedApp)}`}
          onClick={() => selectApp(AppsEnum.Email)}
          type="button"
        >E-mail
        </button>
        <button
          className={`applications__slider-btn ${addSelectedModifier(AppsEnum.Calendar)(selectedApp)}`}
          onClick={() => selectApp(AppsEnum.Calendar)}
          type="button"
        >Calendar
        </button>
        <button
          className={`applications__slider-btn ${addSelectedModifier(AppsEnum.Chat)(selectedApp)}`}
          onClick={() => selectApp(AppsEnum.Chat)}
          type="button"
        >Chat
        </button>
        <button
          className={`applications__slider-btn ${addSelectedModifier(AppsEnum.ToDo)(selectedApp)}`}
          onClick={() => selectApp(AppsEnum.ToDo)}
          type="button"
        >To Do
        </button>
      </div>
      <Slider item={selectedApp} />
    </section>
  );
};

export default Applications;
