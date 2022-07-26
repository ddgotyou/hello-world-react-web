import React from 'react';
import 'antd/dist/antd.less';
import './TestList.css';
import { Divider, List, Typography } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const TestList = () => (
  <>
    <div className="TestList">
    <Divider orientation="left">日志数据</Divider>
    <List
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    </div>
   </>
);

export default TestList;