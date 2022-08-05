import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import {FormInput, FormAutoComplete, FormRadioGroup,FormTextArea, FormCheckbox} from './form-components';

import {
    nameValidator, requiredValidator, regNoValidator
} from './validators'

import {countries, genders } from './data'


export const OtherDetails = (
    <div>
    <Field
      key={'scholarshipName'}
      id={'scholarshipName'}
      name={'scholarshipName'}
      label={'Name of Scholarship if availed last year'}
      component={FormInput}
        />

<Field
      key={'wardMartyr'}
      id={'wardMartyr'}
      name={'wardMartyr'}
      label={'Ward of Martyrs of Defense Personnel'}
      component={FormCheckbox}
        />
  <Field
      key={'wardSingleMother'}
      id={'wardSingleMother'}
      name={'wardSingleMother'}
      label={'Ward of Single Mother'}
      component={FormCheckbox}
      
        />

<Field
      key={'mujGrad'}
      id={'mujGrad'}
      name={'mujGrad'}
      label={'MUJ Graduate'}
      component={FormCheckbox}
        />

<Field
      key={'sportsPerson'}
      id={'sportsPerson'}
      name={'sportsPerson'}
      label={'Sportsperson'}
      component={FormCheckbox}
        />

        
          

        


    
  </div>
);


