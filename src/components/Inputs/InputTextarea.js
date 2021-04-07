export const InputTextarea = props => {
    return (
      <div className="form-group">
        <label>{props.label}</label>
        <textarea 
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
          type={props.type} 
          className={`form-control ${props.error && props.showError ? 'is-invalid' : ''}`} />
        <div className="invalid-feedback">
          {props.error}
        </div>
      </div>
    );
  }