import { useState } from 'react';
export const useForm = (initialValue, setShowSuccessMessage) =>{
  const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };

    return [values, handleChanges, handleSubmit]
}