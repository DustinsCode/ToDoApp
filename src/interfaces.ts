export interface FormDefinition {
  valid: boolean;
  errors: string[];
  fields: {
    [key: string]: any;
  };
  rules?: {
    [key: string]: any;
  };
}
