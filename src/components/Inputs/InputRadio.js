export const InputRadio = props => {
  const { options, value, name, onChange } = props; 
  return (
    <div className="form-group">
      {options.map(option => (
        <div className="custom-control custom-radio" key={option.value}>
          <input 
            type="radio" 
            id={`radio-${option.value}-${name}`} 
            name={name}
            value={option.value}
            onChange={e => onChange(e.target.value)}
            checked={value === option.value}
            className="custom-control-input" />
          <label className="custom-control-label" htmlFor={`radio-${option.value}-${name}`}>{option.label}</label>
        </div>
      ))}
    </div>
  );
  }