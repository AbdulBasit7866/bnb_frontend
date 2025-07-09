import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Input, Button, Typography, Card, message } from 'antd';
import axios from 'axios'; // ✅ This line is required!
import '../Signincomp/signin.css'; // Optional styles reuse

const { Title } = Typography;


const ResetPassword = () => {
  const { token } = useParams(); // ✅ get token from URL
  console.log("Reset token:", token); // You’ll send this to your backend later
const navigate=useNavigate();
const [loading,setloading]=useState(false)
  const onFinish = async(values) => {
    setloading(true);
    try {
        const res= await axios.post("http://localhost:8000/user/reset-password",{
            token, newpassword:values.Password,
        });
        if(res.status===200){
            message.success("password reset successfull!")
            navigate("/");
        }
    } catch (error) {
       console.log(error) 
       message.error(error.response?.data?.message||"something went wrong.")
    }
    finally{
        setloading(false);
    }
}
const onFinishFailed = (errorInfo) => {
  console.log("Validation Failed:", errorInfo);
};

  return (
    <div className="signin-container">
      <Card className="signin-card">
        <Title level={3} className="signin-title">Reset Password</Title>
        <Form
          name="reset-form"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="New Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your new password!' }]}
          >
            <Input.Password placeholder="Enter new password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Passwords do not match!');
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm new password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ResetPassword;
