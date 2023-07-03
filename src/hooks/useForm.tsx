import { useState } from 'react';

export const useForm = (initialForm = { searchText: '' }) => {
    
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: { target: HTMLInputElement }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    onInputChange,
    onResetForm,
  };
};
