export const useForm = (e, values, setValues, setShowSuccessMessage) =>{
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };

    return [values, handleChanges, handleSubmit]
}