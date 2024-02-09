import React from 'react';
import { Row, Col, Card, Avatar, Typography, Carousel } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const TestimonialsContainer = () => {
  return (
    <div style={{ background: '#f0f2f5', padding: '50px 0' }}>
      <Row justify="center">
        <Col xs={22} sm={20} md={18} lg={16} xl={14} xxl={12}>
          {/* Conditional rendering based on screen size */}
          {window.innerWidth < 768 ? (
            <Carousel autoplay autoplaySpeed={2000} dots={false}>
              <div>
                <Card
                  bordered={false}
                  style={{ minWidth: 280 }}
                  cover={<img alt="testimonial 1" src="https://via.placeholder.com/300" />}
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title={<Title level={4}>John Doe</Title>}
                    description={<Paragraph style={{ margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>}
                  />
                </Card>
              </div>
              <div>
                <Card
                  bordered={false}
                  style={{ minWidth: 280 }}
                  cover={<img alt="testimonial 2" src="https://via.placeholder.com/300" />}
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title={<Title level={4}>Jane Smith</Title>}
                    description={<Paragraph style={{ margin: 0 }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>}
                  />
                </Card>
              </div>
              <div>
                <Card
                  bordered={false}
                  style={{ minWidth: 280 }}
                  cover={<img alt="testimonial 3" src="https://via.placeholder.com/300" />}
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title={<Title level={4}>Alice Johnson</Title>}
                    description={<Paragraph style={{ margin: 0 }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>}
                  />
                </Card>
              </div>
            </Carousel>
          ) : (
            <Row gutter={[24, 24]} justify="center">
              <Col xs={24} sm={12} md={8} lg={8}>
                <Card
                  bordered={false}
                  style={{ minWidth: 280 }}
                  cover={<img alt="testimonial 1" src="https://via.placeholder.com/300" />}
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title={<Title level={4}>John Doe</Title>}
                    description={<Paragraph style={{ margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8}>
                <Card
                  bordered={false}
                  style={{ minWidth: 280 }}
                  cover={<img alt="testimonial 2" src="https://via.placeholder.com/300" />}
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title={<Title level={4}>Jane Smith</Title>}
                    description={<Paragraph style={{ margin: 0 }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8}>
                <Card
                  bordered={false}
                  style={{ minWidth: 280 }}
                  cover={<img alt="testimonial 3" src="https://via.placeholder.com/300" />}
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title={<Title level={4}>Alice Johnson</Title>}
                    description={<Paragraph style={{ margin: 0 }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>}
                  />
                </Card>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
};