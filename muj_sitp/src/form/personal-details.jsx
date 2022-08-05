import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import {
    FormInput, FormAutoComplete, FormRadioGroup, FormDatePicker ,
    FormTextArea
} from './form-components';

import {
    nameValidator, regNoValidator, requiredValidator
} from './validators'
import {countries, genders } from './data'
export const PersonalDetails = (
  <div>
    <Field
      key={'fullName'}
      id={'fullName'}
      name={'fullName'}
      label={'Full Name'}
      component={FormInput}
      validator={requiredValidator}
        />
          <Field
      key={'regNo'}
      id={'regNo'}
      name={'regNo'}
      label={'Registration Number'}
      component={FormInput}
      validator={requiredValidator}
        />         
    
    <Field
      key={'gender'}
      id={'gender'}
      name={'gender'}
      label={'Gender'}
      layout={'horizontal'}
      component={FormRadioGroup}
      data={genders}
      validator={requiredValidator}
        />
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <Field
      key={'program'}
      id={'program'}
      name={'program'}
      label={'Program Name'}
      component={FormInput}
      validator={requiredValidator} 
        />
        <Field
      key={'stream'}
      id={'stream'}
      name={'stream'}
      label={'Stream'}
      component={FormInput}
       validator={requiredValidator}
        /></div>

<div style={{display:'flex',justifyContent:'space-between'}}>
        <Field
      key={'year'}
      id={'year'}
      name={'year'}
      label={'Year'}
      component={FormInput}
      validator={requiredValidator} 
        />
        <Field
      key={'semester'}
      id={'semester'}
      name={'semester'}
      label={'Semester'}
      component={FormInput}
      validator={requiredValidator} 
        /></div>
        <Field
      key={'mobno'}
      id={'mobno'}
      name={'mobno'}
      label={'Mobile Number'}
      component={FormInput}
      validator={requiredValidator} 
        />
         <Field
      key={'dob'}
      id={'dob'}
      name={'dob'}
      label={'D.O.B'}
      component={FormDatePicker}
      validator={requiredValidator} 
        />
          <Field
      key={'emailID'}
      id={'emailID'}
      name={'emailID'}
      label={'Email ID'}
      component={FormInput}
      validator={requiredValidator} 
        />

         <Field
      key={'premAdd'}
      id={'premAdd'}
      name={'premAdd'}
      label={'Permanent Address'}
      component={FormTextArea}
      validator={requiredValidator} 
        />
         <Field
      key={'presAdd'}
      id={'presAdd'}
      name={'pressAdd'}
      label={'Present Address'}
      component={FormTextArea}
      validator={requiredValidator}
        />  
        


    
  </div>
);
