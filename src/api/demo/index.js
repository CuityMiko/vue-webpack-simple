import instance from './instance';
import { convertRESTAPI } from '../util';

/** post方式获取分页数据 */
function getpage_post(opts) {
  return instance({
    method: 'post',
    url:  '/getpage',
    opts: opts
  });
}

/** 获取分页数据 */
function getpagedata_pageindex_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/getpagedata/:pageindex', opts),
    opts: opts
  });
}

/** 获取Id */
function getid_cid_sid_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/getid/:cid/:sid', opts),
    opts: opts
  });
}

/** 获取测试数据 */
function getdata_get(opts) {
  return instance({
    method: 'get',
    url:  '/getdata',
    opts: opts
  });
}

export {
  getpage_post,
  getpagedata_pageindex_get,
  getid_cid_sid_get,
  getdata_get
};
