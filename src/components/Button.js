import React, { useState } from 'react';
import 'antd/dist/antd.less';
import './Button.css';
import { PlayCircleOutlined} from '@ant-design/icons';
import { Button} from 'antd';


const MyButton= () => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <>
        <Button
          className="MyButton"
          type="primary"
          icon={<PlayCircleOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          开始检测
        </Button>
    </>
  );
};

export default MyButton;