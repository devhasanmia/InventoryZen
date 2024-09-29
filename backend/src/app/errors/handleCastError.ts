import mongoose from 'mongoose';
import { TErrorSource, TGenericErrorResponse } from '../interface/error';


const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const errorSources: TErrorSource = [
    {
      path: err.path,
      message: err.message,
    },
  ];
  return {
    status: 400,
    message: 'অবৈধ আইডি। অনুগ্রহ করে সঠিক আইডি প্রদান করুন।',
    errorSources,
  };
};

export default handleCastError;