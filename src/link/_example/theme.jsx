import React from 'react';
import { Space } from 'tdesign-react';
import Link from '../Link';

export default function LinkExample() {
  return (
    <Space direction="vertical">
      <Space>
        <Link>普通链接</Link>
        <Link theme="success">成功链接</Link>
        <Link theme="danger">失败链接</Link>
        <Link theme="warning">警告链接</Link>
      </Space>
    </Space>
  );
}
