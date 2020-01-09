import React from 'react';
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expressList: [
        { name: '天马迅达', val: 'tianma' },
        { name: '顺丰速运', val: 'shunfeng' },
        { name: '贝海国际速递', val: 'xlobo' },
        { name: '递四方', val: 'disifang' },
        { name: '递四方美国', val: 'disifangus' },
        { name: '递四方澳洲', val: 'disifangau' },
        { name: '天马迅达', val: 'tianma' },
        { name: '长江', val: 'changjiang' },
        { name: 'EWE', val: 'ewe' },
        { name: '泛捷国际速递', val: 'epanex' },
        { name: '申通快递', val: 'shentong' },
        { name: '天翼快递', val: 'tykd ' },
        { name: '圆通快递', val: 'yuantong' },
        { name: 'EMS', val: 'ems' },
        { name: '中通快递', val: 'zhongtong' },
        { name: '韵达', val: 'yunda' },
        { name: '京东快递', val: 'jd' },
        { name: '百世快递', val: 'huitongkuaidi' }
      ],
      status: false
    };
  }

  handleClick = val => {
    if (val.href) {
      window.open(val.href);
      return;
    }
    this.props.updateCurrentActiveExpress(val);
    this.handleExpressSelectClick();
  };
  handleExpressSelectClick = () => {
    const { status } = this.state;
    this.setState({ status: !status });
  };
  renderExpressList = () => {
    const { expressList, status } = this.state;
    if (!status) return;
    return (
      <ul className="search-box__menu-list">
        {expressList.map(item => {
          return (
            <li
              key={item.name}
              onClick={() => {
                this.handleClick(item);
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    const { activeExpressName } = this.props;
    return (
      <div className="search-box__menu">
        <span
          className="search-box__menu-btn"
          onClick={this.handleExpressSelectClick}
        >
          {activeExpressName || '快递 ▼'}
        </span>
        {this.renderExpressList()}
      </div>
    );
  }
}
