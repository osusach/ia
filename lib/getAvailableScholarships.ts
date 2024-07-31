export function getAvailableScholarships(
  social_registry_percentage: number | null,
  highschool_average_score: number | null = null,
  average_obligatory_exams_score: number | null = null,
  top_ranking_percentage: number | null = null
) {
  return scholarships.filter((scholarship) => {
    let is_academic_elegible: boolean;
    let is_socioeconomic_eligible: boolean;

    is_academic_elegible =
      highschool_average_check(highschool_average_score, scholarship) &&
      average_obligatory_exams_check(
        average_obligatory_exams_score,
        scholarship
      ) &&
      top_ranking_percentage_check(top_ranking_percentage, scholarship);
    is_socioeconomic_eligible = social_registry_percentage_check(
      social_registry_percentage,
      scholarship
    );

    return is_academic_elegible && is_socioeconomic_eligible;
  });
}

function highschool_average_check(
  highschool_average_score: number | null,
  scholarship: Scholarship
) {
  if (!highschool_average_score) {
    return true;
  }
  const academic = scholarship.requirements.academic;
  if (!academic) {
    return true;
  }
  return highschool_average_score >= academic.highschool_average_score;
}

function average_obligatory_exams_check(
  average_obligatory_exams_score: number | null,
  scholarship: Scholarship
) {
  if (!average_obligatory_exams_score) {
    return true;
  }
  const academic = scholarship.requirements.academic;
  if (!academic) {
    return true;
  }
  return (
    average_obligatory_exams_score >=
    academic.min_average_obligatory_exams_score
  );
}

function top_ranking_percentage_check(
  top_ranking_percentage: number | null,
  scholarship: Scholarship
) {
  if (!top_ranking_percentage) {
    return true;
  }
  const academic = scholarship.requirements.academic;
  if (!academic) {
    return true;
  }
  return top_ranking_percentage >= academic.top_ranking_percentage;
}

function social_registry_percentage_check(
  social_registry_percentage: number | null,
  scholarship: Scholarship
) {
  if (!social_registry_percentage) {
    return true;
  }
  const socioeconomic = scholarship.requirements.socioeconomic;
  if (!socioeconomic) {
    return true;
  }
  if (!socioeconomic.social_registry_percentage) {
    return true;
  }

  return social_registry_percentage <= socioeconomic.social_registry_percentage;
}
