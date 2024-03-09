import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { Formik, Form } from 'formik'
import { Button } from 'reactstrap'
import {
  Input,
  DatePicker,
  Select,
  Radio
} from 'formik-reactstrap-widgets'

const MyForm = (props) => ( 
  <Formik
    onSubmit={action('form-submitted')}
    initialValues={{
      name: 'Jane Doe',
      birthday: '1/1/1900',
      gender: 'female'
    }}
    render={(props) => ( 
      <Form>
        <Input name='name' label='Name:' />
        <DatePicker name='birthday' label='Birthday:' />
        <Select name='gender' label='Gender:'>
          <option value='female'>Female</option>
          <option value='male'>Male</option>
          <option value='other'>Other</option>
        </Select>
        <Radio name='color' label='Favorite Color:'>
          <option value='red'>Red</option>
          <option value='green'>Green</option>
          <option value='blue'>Blue</option>
          <option value='other'>Other</option>
        </Radio>
        <Radio name='pet' button group label='Favorite Pet:'>
          <option value='dog'>Dog</option>
          <option value='cat'>Cat</option>
          <option value='fish'>Fish</option>
          <option value='other'>Other</option>
        </Radio>
        <Button>Submit</Button>
      </Form>
    )}
  />
)

default export MyForm