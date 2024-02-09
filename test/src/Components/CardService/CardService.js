import React, { useState, useEffect, useRef } from 'react';
import { Card, Col, Row } from 'antd';
import CountUp from 'react-countup';
import { ArrowUpOutlined, BankOutlined, DollarCircleOutlined } from '@ant-design/icons'; // Import Ant Design icons
import '../../App.css'; // Import your CSS file with animations

const App = () => {
  const [counting, setCounting] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleCountUpComplete = () => {
    
  };

  return (
    <Card
      title={<h1 className="text-3xl font-bold text-center">Why Choose Us?</h1>}
      bordered={false}
      ref={cardRef}
    >
      <Row gutter={[16, 16]} className="flex flex-wrap justify-center">
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className="mb-4">
          <Card bordered={false}>
            {counting && ( // Render CountUp component only when counting is true
              <h2 className="animated-number">
                <ArrowUpOutlined style={{ color: 'blue', marginRight: '5px' }} /> {/* Upward arrow icon */}
                <CountUp start={0} end={200} duration={2} onEnd={handleCountUpComplete} />
                <span style={{ marginLeft: '5px' }}>+</span> {/* Plus sign suffix */}
              </h2>
            )}
            <p className="text-center text-lg font-semibold text-blue-500"><BankOutlined /> Partner Banks and NBFCs</p> {/* Bank icon */}
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className="mb-4">
          <Card bordered={false}>
            {counting && ( // Render CountUp component only when counting is true
              <h2 className="animated-number">
                <ArrowUpOutlined style={{ color: 'blue', marginRight: '5px' }} /> {/* Upward arrow icon */}
                <CountUp start={0} end={10000000} duration={2} onEnd={handleCountUpComplete} />
                <span style={{ marginLeft: '5px' }}>+</span> {/* Plus sign suffix */}
              </h2>
            )}
            <p className="text-center text-lg font-semibold text-blue-500"><DollarCircleOutlined /> Disbursement</p> {/* Dollar circle icon */}
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className="mb-4">
          <Card bordered={false}>
            {counting && ( // Render CountUp component only when counting is true
              <h2 className="animated-number">
                <ArrowUpOutlined style={{ color: 'blue', marginRight: '5px' }} /> {/* Upward arrow icon */}
                <CountUp start={0} end={12000} duration={2} onEnd={handleCountUpComplete} />
                <span style={{ marginLeft: '5px' }}>+</span> {/* Plus sign suffix */}
              </h2>
            )}
            <p className="text-center text-lg font-semibold text-blue-500"><BankOutlined /> Customers</p> {/* Bank icon */}
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default App;
