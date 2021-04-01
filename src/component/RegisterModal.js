import { Modal, Row, Col, Form, Input, Radio } from 'antd'
import React, { useState } from 'react'

function RegisterModal(props) {
  const [value, setValue] = useState(1)

  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  return (
    <Modal
      title="สมัคร"
      visible={props.visible}
      onOk={props.onOk}
      onCancel={props.onCancel}
    >
      <Form
        name="nest-messages"
        // onFinish={onFinish}
        // validateMessages={validateMessages}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name={['user', 'firstname']}
              rules={[{ required: true }]}
            >
              <Input placeholder="ชื่อ" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={['user', 'lastname']} rules={[{ required: true }]}>
              <Input placeholder="นามสกุล" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
          <Input placeholder="หมายเลขโทรศัพท์มือถือหรืออีเมล" />
        </Form.Item>
        <Form.Item name={['user', 'newpass']}>
          <Input placeholder="รหัสผ่านใหม่" type="password" />
        </Form.Item>
        <Form.Item label="วันเกิด" name={['user', 'birth']}>
          <Input placeholder="" type="date" />
        </Form.Item>
        <Form.Item label="เพศ" name={['user', 'gender']}>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>หญิง</Radio>
            <Radio value={2}>ชาย</Radio>
            <Radio value={3}>กำหนดเอง</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default RegisterModal
