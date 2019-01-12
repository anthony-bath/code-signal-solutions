const marathonTaskScore = (
  marathonLength,
  maxScore,
  submissions,
  successfulSubmissionTime
) => {
  if (successfulSubmissionTime === -1) return 0;

  let score = maxScore;

  if (successfulSubmissionTime === 0 && submissions === 1) {
    return maxScore;
  } else {
    if (submissions > 1) {
      score -= (submissions - 1) * SUBMISSION_PENALTY;
    }

    if (successfulSubmissionTime > 0) {
      score -= successfulSubmissionTime * (maxScore / 2) * (1 / marathonLength);
    }
  }

  return Math.max(score, maxScore / 2);
};

const SUBMISSION_PENALTY = 10;
