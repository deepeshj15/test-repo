import { Injectable } from '@angular/core';

@Injectable()
export class FormValidationService {

  constructor() { }

  public validateTextField(field: string, fieldName: string, required: boolean) {
    if (required && (field == null || field == '')) {
      throw new Error ("The required field '" + fieldName + "' is either null or empty.");
    }
  }

  public validateDateField(field: Date, fieldName: string, required: boolean) {
    if (required && field == null) {
      throw new Error ("The required field '" + fieldName + "' is either null or empty.");
    }
  }
}
