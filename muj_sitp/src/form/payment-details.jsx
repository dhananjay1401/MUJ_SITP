import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import {
    FormInput, FormAutoComplete, FormRadioGroup,
    FormTextArea
} from './form-components';

import {
    nameValidator, regNoValidator, requiredValidator
} from './validators'


export const PaymentDetails = (
  <div>
    <Field
      key={'acName'}
      id={'acName'}
      name={'acName'}
      label={"Account Holder Name"}
      component={FormInput}
      validator={requiredValidator}
        />
        <Field
      key={'acNumber'}
      id={'acNumber'}
      name={'acNumber'}
      label={"Account Number"}
      component={FormInput}
      validator={requiredValidator}
        />
        <Field
      key={'bankName'}
      id={'bankName'}
      name={'bankName'}
      label={"Bank Name"}
      component={FormInput}
      validator={requiredValidator}
        />
           <Field
      key={'ifsc'}
      id={'ifsc'}
      name={'ifsc'}
      label={"IFSC CODE"}
      component={FormInput}
      validator={requiredValidator}
        />  
         <Field
      key={'branchName'}
      id={'branchName'}
      name={'branchName'}
      label={"Branch name"}
      component={FormTextArea}
      validator={requiredValidator}
        />
        
  </div>
);
