import React from 'react';
import { Space } from 'tdesign-react';
import Link from '../Link';

export default function LinkExample() {
  return (
    <Space>
      <Link hover="color" theme="default">
        查看链接
      </Link>
      <Link hover="underline">查看链接</Link>
    </Space>
  );
}
