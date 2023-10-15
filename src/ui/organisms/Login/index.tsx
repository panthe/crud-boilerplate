import { ReactElement } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ILogin } from '../../../common/commonInterfaces.ts';
import { AUTH, BASE_URL, LOGIN, STAFF } from '../../../common/commonConstants.ts';
import { addTokenCookies } from '../../../utils/helpers/authCookiesWeb.ts';
import { useNavigate } from 'react-router-dom';

const Login = (): ReactElement => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    console.log('onSubmit', data);
    signInWithCredentials(data);
  };

  const signInWithCredentials = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetch(`${BASE_URL}${AUTH}${LOGIN}`, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200 || response.status === 201) {
        const data = await response.json();
        if (data?.user?.stsTokenManager.accessToken) {
          localStorage.setItem('accessToken', data?.user?.stsTokenManager.accessToken);
          localStorage.setItem('refreshToken', data?.user?.stsTokenManager.refreshToken);
          await addTokenCookies({
            accessToken: data?.user?.stsTokenManager.accessToken,
            refreshToken: data?.user?.stsTokenManager.refreshToken,
          });
          return navigate(STAFF);
        }
      }
      return null;
    } catch (error) {
      return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="email" {...methods.register('email')} />
          <input type="password" {...methods.register('password')} />
          <input type="submit" value="Login" />
        </div>
      </form>
    </FormProvider>
  );
};

export default Login;
