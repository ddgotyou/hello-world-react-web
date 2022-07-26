import React from 'react';
import 'antd/dist/antd.less';
import { Steps } from 'antd';

const { Step } = Steps;

//动态设置进度条
const ProgressBar = () => (
  <Steps current={1}>
    <Step title="知识库导入" description="载入知识库" />
    <Step title="主体检测" subTitle="Left 00:00:08" description="拆分知识库中主体对象" />
    <Step title="关系检测" description="遍历各个主体间的关系" />
  </Steps>
);

export default ProgressBar;