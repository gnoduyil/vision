import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <ul role="menubar" className="can-hover">
      <li role="menuitem" tabindex="0" aria-haspopup="true">
        编程工具
        <ul role="menu">
          <li role="menuitem">
            <Link to="/">my window</Link>
          </li>
          <li role="menuitem">
            <Link to="/image-base64">图片base64计算</Link>
          </li>
        </ul>
      </li>
      <li role="menuitem" tabindex="0" aria-haspopup="true">
        资产检索
        <ul role="menu">
          <li role="menuitem"><Link to="/asset-search">资产检索</Link></li>
        </ul>
      </li>
      <li role="menuitem" tabindex="0" aria-haspopup="true">
        View
        <ul role="menu">
          <li role="menuitem" tabindex="0" aria-haspopup="true">
            Zoom
            <ul role="menu">
              <li role="menuitem"><button>Zoom In</button></li>
              <li role="menuitem"><button>Zoom Out</button></li>
            </ul>
          </li>
          <li role="menuitem"><a href="#menubar">Status Bar</a></li>
        </ul>
      </li>
      <li role="menuitem" tabindex="0" aria-haspopup="true">
        Help
        <ul role="menu">
          <li role="menuitem"><a href="#menubar">View Help</a></li>
          <li role="menuitem"><a href="#menubar">About</a></li>
        </ul>
      </li>
    </ul>
  );
}

export default NavBar;
