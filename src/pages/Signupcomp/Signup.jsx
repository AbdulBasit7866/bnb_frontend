import React from "react";
import { Button, Form, Input, Typography, Card } from "antd";
import "../Signincomp/signin.css"; // ✅ Correct path

const { Title } = Typography;

const Signup = () => {
  const onFinish = (values) => {
    console.log("Signup data:", values);
  };

  return (
    <div className="signin-container">
      <Card className="signin-card">
        <Title level={3} className="signin-title">Signup</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Username" name="username" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Signup;
