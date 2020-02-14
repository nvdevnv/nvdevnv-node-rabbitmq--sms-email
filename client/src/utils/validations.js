const validTargetData = payload => {
  if (!payload.target) {
    return "target phone/email is required";
  }
  const targetRegex = {
    sms: /^\+\d{1,2}\d{10}$/,
    email: /\S+@\S+\.\S+/
  };
  payload.target = payload.target.trim();
  if (!targetRegex[payload.type].test(payload.target)) {
    return "target is incorrect format.";
  }
};

export default validTargetData;
