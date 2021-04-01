import React, { useState } from 'react'
import './LoginForm.css'
import { Button, Form, Input, Divider } from 'antd'
import RegisterModal from './RegisterModal'
export default function LoginForm() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
    console.log('ok')
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div style={{ width: '50%' }}>
      <div className="form-container">
        <Form
          className="login-form"
          onFinish={() => console.log('Login btn is clicked')}
        >
          <Form.Item name="username">
            <Input className="form-input" type="text" placeholder="Username" />
          </Form.Item>
          <Form.Item name="password">
            <Input
              className="form-input"
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              htmlType="submit"
              type="primary"
              className="form-btn btn-login"
            >
              เข้าสู่ระบบ
            </Button>
          </Form.Item>

          <Button type="link" className="btn-forget-password">
            ลืมรหัสผ่านใช่หรือไม่
          </Button>

          <Divider />

          <Button
            type="secondary"
            className="form-btn btn-register"
            onClick={showModal}
          >
            สร้างบัญชีใหม่
          </Button>
          <RegisterModal
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          />
        </Form>
      </div>
    </div>
  )
}
