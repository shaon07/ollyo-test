import { Card, Divider } from 'antd'
import React from 'react'
import Header from '../components/Header'

export default function HomeScreen() {
  return (
    <div className='m-5'>
      <Card bodyStyle={{padding:0}}>
        <div>
        <Header />
        <Divider className='mt-0' />
        </div>
      </Card>
    </div>
  )
}
