export const InputCheckbox = props => {

    const changeFeatureHandler = e => {
      const value = e.target.value;
      const isChecked = e.target.checked;
  
      if (isChecked) {
        const newValue = [...props.value, value];
        props.onChange(newValue);
      } else {
        const newValue = props.value.filter(x => x !== value);
        props.onChange(newValue);
      }
    }
  
    return (
      <div className="form-group">
        {props.options.map(option => (
          <div className="custom-control custom-checkbox" key={option.value}>
            <input 
              type="checkbox" 
              className="custom-control-input" 
              value={option.value}
              checked={props.value.find(x => x === option.value)}
              onChange={changeFeatureHandler}
              id={option.value} />
            <label className="custom-control-label" htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>
    );
  }