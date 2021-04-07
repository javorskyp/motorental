export const InputRadio = props => {
    return (
      <div className="form-group">
        {props.options.map(option => (
          <div className="custom-control custom-radio" key={option.value}>
            <input 
              type="radio" 
              id={`radio-${option.value}-${props.name}`} 
              name={props.name}
              value={option.value}
              onChange={e => props.onChange(e.target.value)}
              checked={props.value === option.value}
              className="custom-control-input" />
            <label className="custom-control-label" htmlFor={`radio-${option.value}-${props.name}`}>{option.label}</label>
          </div>
        ))}
      </div>
    );
  }