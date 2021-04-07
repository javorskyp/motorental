import InputCheckbox from './InputCheckbox';
import InputFile from './InputFile';
import InputRadio from './InputRadio';
import InputSelect from './InputSelect';
import InputText from './InputText';
import InputTextarea from './InputTextarea';

function Input(props) {
  switch (props.type) {
    case 'select':
      return <InputSelect {...props} />;
    case 'password':
      return <InputText {...props} type="password" />;
    case 'email':
      return <InputText {...props} type="email" />;
    case 'checkbox':
      return <InputCheckbox {...props} />;
    case 'file':
      return <InputFile {...props} />;
    case 'radio':
      return <InputRadio {...props} />;
    case 'textarea':
      return <InputTextarea {...props} />;
    default: 
      return <InputText {...props} />;
  }
}

Input.defaultProps = {
  type: 'text',
  isValid: false,
  showError: false,
}; 

export default Input;