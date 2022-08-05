import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import {FormInput, FormAutoComplete, FormRadioGroup,FormTextArea} from './form-components';

import {
    nameValidator, requiredValidator, regNoValidator
} from './validators'

import {countries, genders } from './data'

export const ParentDetails = (
  
    <div>
    <Field
      key={'fName'}
      id={'fName'}
      name={'fName'}
      label={"Father's Name"}
      component={FormInput}
      validator={requiredValidator}
        />
        <Field
      key={'mName'}
      id={'mName'}
      name={'mName'}
      label={"Mother's Name"}
      component={FormInput}
      validator={requiredValidator}
        />
        <Field
      key={'fProfession'}
      id={'fProfession'}
      name={'fProfession'}
      label={"Father's Profession"}
      component={FormInput}
      validator={requiredValidator}
        />
         <Field
      key={'mProfession'}
      id={'mProfession'}
      name={'mProfession'}
      label={"Mother's Profession"}
      component={FormInput}
      validator={requiredValidator}
        />
         <Field
      key={'fannIncome'}
      id={'fannIncome'}
      name={'fannIncome'}
      label={"Father's Income"}
      component={FormInput}
      validator={requiredValidator}
        />
         <Field
      key={'mannIncome'}
      id={'mannIncome'}
      name={'mannIncome'}
      label={"Mother's Income"}
      component={FormInput}
      validator={requiredValidator}
        />
         

    
  </div>
);

