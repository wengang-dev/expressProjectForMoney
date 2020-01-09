import React from 'react';
import lantian from '../assets/lantian.png';
import anda from '../assets/anda.png';
import aoyou from '../assets/aoyou.png';
import disifang from '../assets/disifang.png';
import e2g from '../assets/e2g.png';
import fanjie from '../assets/fanjie.png';
import good from '../assets/good.png';
import ueq from '../assets/ueq.png';
import xunda from '../assets/xunda.png';
import fengniao from '../assets/fengniao.png';
import beihai from '../assets/beihai.png';
import jidi from '../assets/jidi.png';
import zhonghuan from '../assets/zhonghuan.png';
import feiyue from '../assets/feiyue.png';
import shunfeng from '../assets/shunfeng.png'
import ewe from '../assets/ewe.png';
import changjiang from '../assets/changjiang.png';

export default class OverseaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overseaExpressData: [
        { name: '澳洲蓝天', url: 'http://www.blueskyexpress.com.au', img: lantian },
        {name:'极地快递', url:'https://www.polarexpress.com.au', img:jidi},
        {name:'重庆中环', url:'http://www.zhonghuan.com.au', img:zhonghuan},
        {name:'飞跃物流', url:'http://www.rlgaustralia.com', img:feiyue},
        {name:'顺丰速运', url:'https://www.sf-express.com/cn/sc/', img:shunfeng},
        {name:'长江快递',url:'http://www.changjiangexpress.com',img:changjiang},
        {name:'ewe',url:'https://cn.yy-ewe.com/html/track.html',img:ewe},
        {
          name: '澳邮快递',
          img: aoyou,
          url: 'http://www.auexpress.com.au/'
        },
        {
          name: '迅达快递',
          img: xunda,
          url: 'http://www.xdexpress.com.au/'
        },
        {
          name: '泛捷国际速递',
          val: 'epanex',
          img: fanjie,
          url: 'http://www.epanex.com/common/upload_id_files'
        },
        {
          name: '递四方',
          val: 'disifang',
          img: disifang,
          url: 'http://express.4px.com/logistic/track'
        },
        { name: 'UEQ', val: 'ueq', url: 'http://www.ueq.com/track/', img: ueq },
        { name: '贝海快递', url: 'http://www.xlobo.com/', img: beihai },
        { name: '安达物流', url: 'http://www.ada-post.com/', img: anda },
        {
          name: '蜂鸟国际速递',
          img: fengniao,
          url: ' http://www.hummerexpress.com/UploadIDPic'
        },
        {
          name: 'E2G速递',
          img: e2g,
          url: 'https://www.express2global.com/yundan/upload.php '
        },
        { name: 'GOOD国际速递', url: 'http://www.goodkuaidi.com', img: good }
      ]
    };
  }
  render() {
    const { overseaExpressData } = this.state;
    return (
      <div className="overseaList">
        {overseaExpressData.map(item => {
          return (
            <div className="overseaExpressItem" key={item.name + item.url}>
              <a className="overseaExpressItem__a" href={item.url}>
                <div className="expressItem__avatar">
                  <img src={item.img} />
                </div>
                <div className="expressItem__info">
                  <div className="expressItem__info__name">{item.name}</div>
                  <div className="expressItem__info__userCrad">
                    <span className="expressItem__info__userCrad__upload">身份证上传：</span>
                    <br />
                    <p className="expressItem__info__userCrad__url">{item.url}</p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
