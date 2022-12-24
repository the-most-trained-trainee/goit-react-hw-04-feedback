import PropTypes from 'prop-types';
import StyledSection from './StyledSection';

const Section = ({title, children}) => (
  <StyledSection>
    <h1>{title}</h1>
    <div>{children}</div>
  </StyledSection>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
