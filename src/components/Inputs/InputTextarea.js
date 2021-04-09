export const InputTextarea = props => {
    const {label, value, type, error, showError, onChange } = props
    return (
      <div className="form-group">
        <label>{label}</label>
        <textarea 
          value={value}
          onChange={e => onChange(e.target.value)}
          type={type} 
          className={`form-control ${error && showError ? 'is-invalid' : ''}`} />
        <div className="invalid-feedback">
          {error}
        </div>
      </div>
    );
  }

  InputTextarea.defaultProps = {
    type: 'text',
    isValid: false,
    showError: false,
  }; 