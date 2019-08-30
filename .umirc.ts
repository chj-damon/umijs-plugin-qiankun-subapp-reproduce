/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-08-30 15:16:01
 * @LastEditors: 陈杰
 * @LastEditTime: 2019-08-30 16:44:27
 */
import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  mountElementId: 'slave2',
  history: 'browser',
  base: '/slave2',
  publicPath: '/slave2/',
  outputPath: './dist/slave2',
  plugins: [
    '@umijs/plugin-qiankun/slave',
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'slave2',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
