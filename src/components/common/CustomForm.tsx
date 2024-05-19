import { UserDataProps } from 'pages/Challenge-05';
import { FC, useEffect, useState } from 'react';
import { Button } from './Button';
import { Fieldset, Input } from './Input';

interface CustomFormProps {
  setUserData: React.Dispatch<React.SetStateAction<UserDataProps>>;
}

export const CustomForm: FC<CustomFormProps> = ({ setUserData }) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [formData, setFormData] = useState<UserDataProps>({
    name: '',
    email: '',
  });

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUserData(formData);
    setFormData({
      name: '',
      email: '',
    });
  };

  useEffect(() => {
    const { name, email } = formData;
    setIsValid(name !== '' && email !== '');
  }, [formData]);

  return (
    <form
      onSubmit={submitForm}
      className='flex flex-col gap-y-2 mb-2'
    >
      <Fieldset legend='Name'>
        <Input
          name='name'
          value={formData.name}
          onChange={getInputValue}
          placeholder='Enter your name'
        />
      </Fieldset>
      <Fieldset legend='Email'>
        <Input
          name='email'
          type='email'
          value={formData.email}
          onChange={getInputValue}
          placeholder='Enter your email'
        />
      </Fieldset>
      <Button
        type='submit'
        disabled={!isValid}
      >
        Submit
      </Button>
    </form>
  );
};
