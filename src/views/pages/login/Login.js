import React from 'react'
import { Form, Input, Button, Card, Row, Col, Typography, Spin } from 'antd'
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from '@ant-design/icons'
import { ImageConst } from '../../../assets'
import './Login.css'
import useLogin from './useLogin'

const { Title, Text } = Typography

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    error,
    loading,
  } = useLogin()

  return (
    <div className="login-container">
      {/* Background Image */}
      <div className="login-image-container">
        <img
          src={ImageConst.nutwiseWallpaper}
          className="login-image"
          alt="Background Wallpaper"
        />
      </div>

      {/* Login Form */}
      <div className="login-form-container">
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
          <Col>
            <Card className="login-card">
              <div className="login-form-header">
                <Title level={2} className="login-title">
                  Welcome
                </Title>
                <Text type="secondary" className="login-subtitle">
                  Login to your account
                </Text>
              </div>

              {/* Display error message if it exists */}
              {error && <div className="login-error-message">{error}</div>}

              <Form
                name="login-form"
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                autoComplete="off"
              >
                {/* Email Input */}
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email!' },
                    { type: 'email', message: 'Please enter a valid email!' },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="login-input-icon" />}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input"
                  />
                </Form.Item>

                {/* Password Input */}
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: 'Please enter your password!' },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="login-input-icon" />}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    className="login-password-input"
                  />
                </Form.Item>

                {/* Login Button with Spinner */}
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-button"
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? (
                      <Spin size="small" /> // Show spinner when loading
                    ) : (
                      'Login' // Show "Login" text when not loading
                    )}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Login
