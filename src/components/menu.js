import React from 'react';
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expressList: [
        { name: '贝海国际速递', val: 'xlobo' },
        { name: '递四方', val: 'disifang' },
        { name: '递四方美国', val: 'disifangus' },
        { name: '递四方澳洲', val: 'disifangau' },
        { name: '天马迅达', val: 'tianma' },
        { name: '泛捷国际速递', val: 'epanex' },
        { name: '顺丰速运', val: 'shunfeng' },
        {
          name: '蜂鸟国际速递',
          val: '',
          href: ' http://www.hummerexpress.com/UploadIDPic'
        },
        {
          name: 'E2G速递',
          val: '',
          href: 'https://www.express2global.com/yundan/upload.php '
        },
        { name: 'GOOD国际速递', val: '', href: ' www.goodkuaidi.com' }
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
