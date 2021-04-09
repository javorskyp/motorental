export const InputText = props => {
    const {label, value, type, error, showError } = props
    return (
      <div className="form-group">
        <label>{label}</label>
        <input 
          value={value}
          onChange={e => props.onChange(e.target.value)}
          type={type} 
          className={`form-control ${error && showError ? 'is-invalid' : ''}`} />
        <div className="invalid-feedback">
          {error}
        </div>
      </div>
    );
  } 

  InputText.defaultProps = {
    type: 'text',
    showError: false,
  }; 