export const InputCheckbox = props => {
      const {options, value, onChange, label  } = props
      const changeFeatureHandler = e => {
      const value = e.target.value;
      const isChecked = e.target.checked;
  
      if (isChecked) {
        const newValue = [...props.value, value];
        onChange(newValue);
      } else {
        const newValue = props.value.filter(x => x !== value);
        onChange(newValue);
      }
    }
  
    return (
      <div className="form-group">
        {options.map(option => (
          <div className="custom-control custom-checkbox" key={option.value}>
            <input 
              type="checkbox" 
              className="custom-control-input" 
              value={value}
              checked={value.find(x => x === value)}
              onChange={changeFeatureHandler}
              id={value} />
            <label className="custom-control-label" htmlFor={value}>{label}</label>
          </div>
        ))}
      </div>
    );
  }

  InputCheckbox.defaultProps = {
    required: "options",
    isValid: false,
    showError: false,
  }; 
  