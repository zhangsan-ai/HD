import React from 'react';

// 这个页面仅用于提供搜索索引的JSON数据
export default function SearchIndexPage({ index }) {
  // 设置响应头为JSON类型
  if (typeof window === 'undefined') {
    // 服务器端渲染时设置HTTP头
    const { setHeadComponents } = require('@docusaurus/Head');
    setHeadComponents([
      {
        tagName: 'meta',
        attributes: {
          'http-equiv': 'Content-Type',
          content: 'application/json',
        },
      },
    ]);
  } else {
    // 客户端渲染时设置Content-Type
    document.contentType = 'application/json';
  }
  
  // 直接返回JSON数据
  return <>{JSON.stringify(index)}</>;
}
