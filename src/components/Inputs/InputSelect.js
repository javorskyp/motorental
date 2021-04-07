export const InputSelect = props => {
    return (
      <div className="form-group">
        <label>{props.label}</label>
        <select 
          value={props.value} 
          onChange={e => props.onChange(e.target.value)}
          className={`form-control ${props.error && props.showError ? 'is-invalid' : ''}`}>
            {props.options.map(option => 
              <option value={option.value} key={option.value}>{option.label}</option>
            )}
        </select>
        <div className="invalid-feedback">
          {props.error}
        </div>
      </div>
    );
  }