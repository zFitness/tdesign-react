import { TElement, TNode } from '../common';

export interface TdLinkProps {
  /**
   * 下划线
   * @default false
   */
  underline?: boolean;
  /**
   * 链接内容，同 content
   */
  children?: TNode;
  /**
   * 链接内容
   */
  content?: TNode;
  /**
   * 禁用状态
   */
  disabled?: boolean;
  /**
   * 跳转地址。
   * @default ''
   */
  href?: string;
  /**
   * 前置图标，可完全自定义
   */
  prefixIcon?: TElement;
  /**
   * 后置图标，可完全自定义
   */
  suffixIcon?: TElement;
  /**
   * 组件风格，依次为默认色、品牌色、危险色、警告色、成功色
   */
  theme?: 'default' | 'primary' | 'danger' | 'warning' | 'success';
}
