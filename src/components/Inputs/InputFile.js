import { useRef } from 'react';
export const InputFile = props => {
    const fileRef = useRef();
    const changeHandler = (e) => {
      props.onChange(e.target.files[0]);
    }
  
    return (
      <div className="form-group">
        <input 
          type="file" 
          onChange={changeHandler}
          ref={props.fileRef} />
      </div>
    );
  }