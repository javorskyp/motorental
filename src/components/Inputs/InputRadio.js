export const InputRadio = props => {
  const {options, name, value, label } = props
    return (
      <div className="form-group">
        {options.map(option => (
          <div className="custom-control custom-radio" key={option.value}>
            <input 
              type="radio" 
              id={`radio-${option.value}-${name}`} 
              name={name}
              value={option.value}
              onChange={e => props.onChange(e.target.value)}
              checked={props.value === option.value}
              className="custom-control-input" />
            <label className="custom-control-label" htmlFor={`radio-${value}-${name}`}>{label}</label>
          </div>
        ))}
      </div>
    );
  }