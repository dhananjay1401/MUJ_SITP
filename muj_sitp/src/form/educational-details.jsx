import * as React from "react";

import { Field } from "@progress/kendo-react-form";

import {
  FormInput,
  FormAutoComplete,
  FormRadioGroup,
  FormTextArea,
} from "./form-components";

import { nameValidator, requiredValidator, regNoValidator } from "./validators";

import { countries, genders } from "./data";

export const EducationalDetails = (
  <div>
    
    

    <div>
      <br />
      <legend class="k-form-legend">
        <h5>10th Details</h5>
      </legend>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Field
        key={"tenthboardUniv"}
        id={"tenthboardUniv"}
        name={"tenthboardUniv"}
        label={"Board/University"}
        component={FormInput}
        validator={requiredValidator}
      />
      <Field
        key={"tenthPassingYear"}
        id={"tenthPassingYear"}
        name={"tenthPassingYear"}
        label={"Passing Year"}
        component={FormInput}
        validator={requiredValidator}
        style={{ outerWidth: "40%" }}
      />
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Field
        key={"tenthPerCGPA"}
        id={"tenthPerCGPA"}
        name={"tenthPerCGPA"}
        label={"Percentage/CGPA"}
        component={FormInput}
        validator={requiredValidator}
      />
      <Field
        key={"tenthmaxGrade"}
        id={"tenthmaxGrade"}
        name={"tenthmaxGrade"}
        label={"Maximum Grade"}
        component={FormInput}
        validator={requiredValidator}
      />
    </div>

    <div>
      <br />
      <legend class="k-form-legend">
        <h5>12th Details</h5>
      </legend>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Field
        key={"twelthboardUniv"}
        id={"twelthboardUniv"}
        name={"twelthboardUniv"}
        label={"Board/University"}
        component={FormInput}
        validator={requiredValidator}
      />
      <Field
        key={"twelthPassingYear"}
        id={"twelthPassingYear"}
        name={"twelthPassingYear"}
        label={"Passing Year"}
        component={FormInput}
        validator={requiredValidator}
      />
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Field
        key={"twelthmaxGrade"}
        id={"twelthmaxGrade"}
        name={"twelthmaxGrade"}
        label={"Maximum Grade"}
        component={FormInput}
        validator={requiredValidator}
      />

      <Field
        key={"twelthPerCGPA"}
        id={"twelthPerCGPA"}
        name={"twelthPerCGPA"}
        label={"Percentage/CGPA"}
        component={FormInput}
        validator={requiredValidator}
      />
    </div>
    <div>
      <br />
      <legend class="k-form-legend">
        <h5>Graduation Details</h5>
      </legend>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Field
        key={"gradboardUniv"}
        id={"gradboardUniv"}
        name={"gradboardUniv"}
        label={"Board/University"}
        component={FormInput}
        validator={requiredValidator}
      />
      <Field
        key={"gradPassingYear"}
        id={"gradPassingYear"}
        name={"gradPassingYear"}
        label={"Passing Year"}
        component={FormInput}
        validator={requiredValidator}
      />{" "}
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Field
        key={"gradPerCGPA"}
        id={"gradPerCGPA"}
        name={"gradPerCGPA"}
        label={"Percentage/CGPA"}
        component={FormInput}
        validator={requiredValidator}
      />
      <Field
        key={"gradmaxGrade"}
        id={"gradmaxGrade"}
        name={"gradmaxGrade"}
        label={"Maximum Grade"}
        component={FormInput}
        validator={requiredValidator}
      />
    </div>
    <div>
      <br />
      <legend class="k-form-legend">
        <h5>PostGraduation Details</h5>
      </legend>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Field
        key={"pgradboardUniv"}
        id={"pgradboardUniv"}
        name={"pgradboardUniv"}
        label={"Board/University"}
        component={FormInput}
        
      />
      <Field
        key={"pgradPassingYear"}
        id={"pgradPassingYear"}
        name={"pgradPassingYear"}
        label={"Passing Year"}
        component={FormInput}
        
      />
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Field
        key={"pgradPerCGPA"}
        id={"pgradPerCGPA"}
        name={"pgradPerCGPA"}
        label={"Percentage/CGPA"}
        component={FormInput}
        
      />
      <Field
        key={"pgradmaxGrade"}
        id={"pgradmaxGrade"}
        name={"pgradmaxGrade"}
        label={"Maximum Grade"}
        component={FormInput}
        
      />
    </div>
    <br />
    <legend class="k-form-legend">
      <h5>MET</h5>
    </legend>
    {/* <div>
            <legend class="k-form-legend">Account Details</legend>
            <h3>MET<hr></hr></h3>
        
        </div> */}
    <Field
      key={"metrollNo"}
      id={"metrollNo"}
      name={"metrollNo"}
      label={"MET Roll No."}
      component={FormInput}
      
    />
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Field
        key={"metrank"}
        id={"metrank"}
        name={"metrank"}
        label={"MET Rank"}
        component={FormInput}
        
      />

      <Field
        key={"metscore"}
        id={"metscore"}
        name={"metscore"}
        label={"MET Score"}
        layout={"horizontal"}
        component={FormInput}
        
      />
    </div>
  </div>
);
