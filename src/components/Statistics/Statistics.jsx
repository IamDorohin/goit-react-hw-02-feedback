import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  StatisticsElements,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsContainer>
      <StatisticsElements>Good: {good}</StatisticsElements>
      <StatisticsElements>Neutral: {neutral}</StatisticsElements>
      <StatisticsElements>Bad: {bad}</StatisticsElements>
      <StatisticsElements>Total: {total}</StatisticsElements>
      <StatisticsElements>
        Positive feedback: {positivePercentage > 0 ? positivePercentage : 0}%
      </StatisticsElements>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
