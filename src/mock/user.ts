import { MockMethod } from 'vite-plugin-mock';
// 单纯的使⽤⾃⼰的返回数据话，可以不⽤引⼊mockjs
// http://mockjs.com/examples.html
import Mock, { Random } from 'mockjs';
import componentList from "./json-data/get_component_list.json";
import templateList from "./json-data/get_component_template_list.json";

const getComponentsData = {
  url: '/api/getComponentsData',
  method: 'get',
  response: () => {
    return componentList
  }
}
const getTemplateList = {
  url: '/api/getTemplateList',
  method: 'get',
  response: () => {
    return templateList
  }
}
export default [
  {
    url: '/api/createUser',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: Mock.mock({
          'list|4': [
            {
              id: '@id',
              name: '@cname',
              age: Random.integer(1, 100),
              address: '@county',
              city: '@city',
              province: '@province',
              email: Random.email(),
              phone: /^1[0-9]{10}$/,
              regin: '@region',
              url: '@url',
              date: Random.date('yyyy-MM-dd')
            }
          ]
        })
      };
    }
  }, getComponentsData, getTemplateList
] as MockMethod[];
