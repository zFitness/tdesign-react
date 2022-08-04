import React from 'react';
import { Space } from 'tdesign-react';
import Link from '../Link';

export default function LinkExample() {
  return (
    <Space>
      <Link underline>查看链接</Link>
      <Link underline theme="success">
        查看链接
      </Link>
      <Link underline theme="danger">
        查看链接
      </Link>
      <Link underline theme="warning">
        查看链接
      </Link>
      <Link underline disabled>
        查看链接
      </Link>
    </Space>
  );
}
