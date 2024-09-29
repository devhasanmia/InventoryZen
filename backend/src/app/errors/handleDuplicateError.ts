import { TErrorSource, TGenericErrorResponse } from '../interface/error';

// Use Regex
const handleDuplicateError = (err: any): TGenericErrorResponse => {
  let match = err.message.match(/"([^"]*)"/);
  const extractedMsg = match && match[1];
  const errorSources: TErrorSource = [
    {
      path: '',
      message: `দুঃখিত, ${extractedMsg} নম্বর টি আমাদের ডেটাবেজে ইতোমধ্যে রেজিস্টার্ড। অনুগ্রহ করে অন্য একটি নম্বর প্রদান করুন।`,
    },
  ];
  return {
    status: 400,
    message: 'দুঃখিত, এই এন্ট্রি ইতোমধ্যে বিদ্যমান। অনুগ্রহ করে আলাদা ডেটা প্রদান করুন।',
    errorSources,
  };
};

export default handleDuplicateError;