import React from 'react';
import Menu from './components/menu';
import axios from 'axios';
import md5 from 'blueimp-md5';
import classname from 'classname';

import './App.css';

/**
 * customer 43E701842F700404237842A7AD6F0B9A
 * url https://poll.kuaidi100.com/poll/query.do
 * KEY jyaDyLlZ2292
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeExpressName: '',
      expressInfo: [],
      expressInfoStatus: false
    };
    this.com = ''; //快递公司
    this.phone = ''; //电话尾号(顺丰必填)
    this.num = ''; //运单号
  }

  updateCurrentActiveExpress = item => {
    this.com = item.val;
    this.setState({ activeExpressName: item.name });
  };

  handleInputValue = () => {
    const temValue = this.ref.value.replace(/\s+/g, '').split('+');
    this.num = temValue[0];
    this.phone = temValue[1] || '';
  };
  handleCloseClick = () => {
    this.setState({ expressInfoStatus: false });
  };
  showExpressActions = () => {
    const { expressInfo, expressInfoStatus } = this.state;
    if (!expressInfoStatus) return null;
    let actionsList = null;
    let withoutAction = null;
    if (expressInfo.length) {
      actionsList = expressInfo
        .map((item, index) => {
          const cls = classname({
            expressProcesItem: true,
            recentlyAction: index === expressInfo.length - 1
          });
          return (
            <div className={cls} key={item.dayTime + index}>
              <div className="expressProcesItem__time">
                <div>{item.dayTime}</div>
                <div>{item.hourTime}</div>
              </div>
              <div className="expressProcesItem__action">{item.context}</div>
            </div>
          );
        })
        .reverse();
    } else {
      withoutAction = (
        <div className="expressProcesItem recentlyAction">暂无更多物流信息</div>
      );
    }
    return (
      <div className="search-result-container">
        {actionsList}
        {withoutAction}
      </div>
    );
  };

  handleSubmit = () => {
    this.handleInputValue();
    const param = {
      com: this.com,
      num: this.num,
      from: '',
      phone: this.phone,
      to: '',
      resultv2: 0,
      show: '0',
      order: 'desc'
    };
    const sign = md5(
      JSON.stringify(param) +
        'jyaDyLlZ2292' +
        '43E701842F700404237842A7AD6F0B9A'
    ).toLocaleUpperCase();
    if (!param.com || !param.num) {
      alert('信息不全，请检查单号和快递公司，顺丰必填手机尾号');
      return;
    }
    this.setState({ expressInfoStatus: true });
    const str =
      '/poll/query.do?customer=43E701842F700404237842A7AD6F0B9A&sign=' +
      sign +
      '&param=' +
      JSON.stringify(param);
    try {
      axios.get(str).then(res => {
        if (!res.data || !res.data.data || !res.data.data.length) return;
        const tem = res.data.data
          .map(item => {
            return {
              dayTime: item.time.slice(0, 10),
              hourTime: item.time.slice(10),
              context: item.context
            };
          })
          .reverse();
        this.setState({ expressInfo: tem });
      });
    } catch (err) {
      alert('something wrong!');
    }
  };

  render() {
    const { activeExpressName, expressInfoStatus } = this.state;
    return (
      <div className="App">
        <header className="header"></header>
        <div className="content">
          <div className="search-box">
            <Menu
              updateCurrentActiveExpress={this.updateCurrentActiveExpress}
              activeExpressName={activeExpressName}
            />
            <div className="search-box__input-container">
              <input
                ref={ref => (this.ref = ref)}
                type="text"
                className="search-box__input"
                placeholder="快递查询"
              />
            </div>
            <div className="search-box__submit" onClick={this.handleSubmit}>
              查询
            </div>
          </div>
          {expressInfoStatus && (
            <div
              className="search-result-container__close"
              onClick={this.handleCloseClick}
            >
              ×
            </div>
          )}
          {this.showExpressActions()}
        </div>
      </div>
    );
  }
}

export default App;
