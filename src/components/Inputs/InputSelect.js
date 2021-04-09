export const InputSelect = props => {
    const {label, options, value, error, showError, onChange } = props
    return (
      <div className="form-group">
        <label>{label}</label>
        <select 
          value={value} 
          onChange={e => onChange(e.target.value)}
          className={`form-control ${error && showError ? 'is-invalid' : ''}`}>
            {options.map(option => 
              <option value={option.value} key={option.value}>{option.label}</option>
            )}
        </select>
        <div className="invalid-feedback">
          {error}
        </div>
      </div>
    );
  }

  InputSelect.defaultProps = {
    required: 'options',
    isValid: false,
    showError: false,
  }; 