import React from 'react';
import { MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Typography } from 'antd';
import axios from 'axios';
import './ForgotPassword.css'

const { Title } = Typography;

const ForgotPassword = () => {
  const onFinish = async (values) => {
    try {
      // Send email to backend to generate & email OTP
      const res = await axios.post('http://localhost:8000/users/send-otp', {
        email: values.email,
      });

      if (res.status === 200) {
        message.success('OTP has been sent to your email!');
        // You may want to redirect to /verify-otp or /reset-password/otp step here
        // e.g., navigate('/verify-otp')
      }
    } catch (error) {
      console.error('Send OTP error:', error);
      message.error(
        error.response?.data?.message || 'Failed to send OTP.'
      );
    }
  };

  return (
    <div className="otp-container">
    <div className="forgot-password-container" style={{ maxWidth: 400, margin: '60px auto' }}>
      <Title level={3} style={{ textAlign: 'center' }}>
        Forgot Password
      </Title>
      <Form
        name="send-otp-form"
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          name="email"
          label="Enter your registered email"
          rules={[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'Enter a valid email address!' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="example@email.com" />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Send OTP
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
};



export default ForgotPassword;
