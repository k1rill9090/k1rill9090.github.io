import React, { memo, useMemo } from 'react';
import cn from 'clsx';
// import { useMutation } from '@apollo/client';
import { FormikConfig, useFormik } from 'formik';
import { Button, message } from 'antd';
// import { useDispatch } from 'react-redux';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import { AuthForm, AuthFormErrors, AuthFormValues } from '../../features/forms';
import { isLongEnough, isNotDefinedString } from '../../utils/validation';
// import { tokenActions } from 'src/app/store/token';
// import { createErrorHandlers } from 'src/utils/createErrorHandlers';
// import { NavigationState } from 'src/app/navigation/types';
// import { profileActions } from 'src/app/store/profile';
// import { SIGN_IN, SignInResponse, SignInVars, extractSignIn } from '../connections';
import s from './SingInBlock.sass';

export type SingInBlockProps = {
  className?: string;
};

const initialValues: AuthFormValues = {
  email: undefined,
  password: undefined,
};

export const SingInBlock = memo<SingInBlockProps>(({ className }) => {
  // const { t } = useTranslation();
  // const [signIn, { loading }] = useMutation<SignInResponse, SignInVars>(SIGN_IN, { fetchPolicy: 'no-cache' });
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const location = useLocation();

  const { onSubmit, validate } = useMemo<Pick<FormikConfig<AuthFormValues>, 'onSubmit' | 'validate'>>(() => {
    // const { catcher } = createErrorHandlers((code, _, error) => {
    //   if (code === null) {
    //     message.error(t(`errors.${error.message}`));
    //   } else {
    //     message.error(t(`errors.${code}`));
    //   }
    // });
    return {
      onSubmit: (values, { resetForm }) => {
        // signIn({ variables: { email: values.email, password: values.password } })
        //   .then((res) => {
        //     const result = extractSignIn(res.data);
        //     if (result) {
        //       dispatch(tokenActions.set(result.token));
        //       dispatch(profileActions.set(result.profile));
        //     }
        //     resetForm();
        //     navigate((location.state as NavigationState)?.from || '/');
        //   })
        //   .catch(catcher);
        alert('Пользователь авторизован')
      },
      validate: (values) => {
        const errors = {} as AuthFormErrors;
        if (isNotDefinedString(values.email)) {
          // errors.email = t(`errors.is_required`);
          errors.email = 'Обязательное поле';
        }
        if (isNotDefinedString(values.password)) {
          // errors.password = t(`errors.is_required`);
          errors.password = 'Обязательное поле';
        } else if (!isLongEnough(values.password)) {
          // errors.password = t(`errors.too_short_password`);
          errors.password = 'Слишком короткий пароль';
        }
        return errors;
      },
    };
  }, []);

  const formik = useFormik<AuthFormValues>({
    onSubmit,
    initialValues,
    validate,
  });

  const { submitForm } = formik;
  return (
    <div className={cn(className)}>
      <AuthForm formManager={formik} />
      <div >
        <Button  type="primary" onClick={submitForm}>
          Войти
        </Button>
      </div>
    </div>
  );
});

SingInBlock.displayName = 'SingInBlock';
