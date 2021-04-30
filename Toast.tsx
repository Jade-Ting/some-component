import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as styles from './index.scss';

/**
 * @example Toast.info('提示信息')
 */

let timer: any = null;

class Toast extends React.Component {
  static info(msg: string, timeout?: number) {
    init();
    setTime(timeout || 3000);
    ReactDOM.render(
      <React.Fragment>
        <span>{msg}</span>
      </React.Fragment>,
      document.getElementById('toast')
    );
  }
}

function init() {
  clearTimeout(timer);
  const toast_dom = document.getElementById('toast');
  if (toast_dom) {
    toast_dom.style.display = 'block';
  } else {
    const div = document.createElement('div');
    div.setAttribute('id', 'toast');
    div.setAttribute('class', styles.toast);
    document.body.appendChild(div);
  }
}

function setTime(timeout: number) {
  timer = setTimeout(() => {
    const toast_dom = document.getElementById('toast');
    if (toast_dom) {
      toast_dom.style.display = 'none';
    }
  }, timeout);
}

export default Toast;
