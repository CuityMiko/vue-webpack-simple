import instance from './instance';
import { convertRESTAPI } from '../util';

/** 获取测试数据 */
function getdata_get(opts) {
  return instance({
    method: 'get',
    url:  '/getdata',
    opts: opts
  });
}

export {
  getdata_get
};
