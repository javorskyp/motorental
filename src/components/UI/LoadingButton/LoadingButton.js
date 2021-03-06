export default function LoadingButton(props) {
    const className = props.className || 'btn-primary';

    const buttonProps = {...props};
    delete buttonProps.loading;

    return  props.loading 
    ? (
      <button className={`btn ${className}`} type="button" disabled>
         <span className="spinner-boarder spinner-boarder-sm" role="status" aria-hidden="true"></span>
         <span className="sr-only">Logowanie...</span>
  </button>) : <button {...buttonProps} className={`btn ${className}`}>{props.children}</button>
  }
