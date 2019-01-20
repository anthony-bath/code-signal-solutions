const questionCorrectionBot = question => {
  question = question.trim().replace(/\?/g, '');
  question = question.replace(/\s{0,},/g, ', ');
  question = question.replace(/\s+/g, ' ');

  return `${question.charAt(0).toUpperCase()}${question.substring(1)}?`;
};
