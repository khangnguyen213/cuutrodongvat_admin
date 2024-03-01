import { Link } from 'react-router-dom';
import './Menu.scss';
import { menu } from '../../data';
import { useState } from 'react';

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="menu">
        {menu.map((item) => (
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => (
              <Link to={listItem.url} className="listItem" key={listItem.id}>
                <img src={listItem.icon} alt="" />
                <span className="listItemTitle">{listItem.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
      {!open && (
        <img
          src="/menu.svg"
          alt=""
          className="menuButton"
          onClick={() => setOpen(!open)}
        />
      )}

      {open && (
        <div className={`menuMobile`}>
          <img
            src="/close.svg"
            alt=""
            onClick={() => setOpen(false)}
            className="closeBtn"
          />
          {menu.map((item) => (
            <div className="item" key={item.id}>
              <span className="title">{item.title}</span>
              {item.listItems.map((listItem) => (
                <Link
                  to={listItem.url}
                  className="listItem"
                  key={listItem.id}
                  onClick={() => setOpen(false)}
                >
                  <img src={listItem.icon} alt="" />
                  <span className="listItemTitle">{listItem.title}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Menu;
