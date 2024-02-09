import React from 'react';
import { Row, Col, Card, Avatar, Typography, Carousel } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const TestimonialsContainer = () => {
  return (
    <div className="bg-gray-200 py-10">
      <Row justify="center">
        <Col span={22} sm={20} md={18} lg={16} xl={14} xxl={12}>
          <Row justify="center">
            {window.innerWidth < 768 ? (
              <Col span={24}>
                <Carousel autoplay autoplaySpeed={2000} dots={false}>
                  <div>
                    <TestimonialCard
                      name="John Doe"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                  <div>
                    <TestimonialCard
                      name="Jane Smith"
                      content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                  </div>
                  <div>
                    <TestimonialCard
                      name="Alice Johnson"
                      content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    />
                  </div>
                </Carousel>
              </Col>
            ) : (
              <>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <TestimonialCard
                    name="John Doe"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <TestimonialCard
                    name="Jane Smith"
                    content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <TestimonialCard
                    name="Alice Johnson"
                    content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                  />
                </Col>
              </>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

const TestimonialCard = ({ name, content }) => (
  <Card bordered={false} className="min-w-[280px]">
    <Meta
      avatar={<Avatar icon={<UserOutlined />} />}
      title={<Title level={4}>{name}</Title>}
      description={<Paragraph className="m-0">{content}</Paragraph>}
    />
  </Card>
);

export default TestimonialsContainer;
