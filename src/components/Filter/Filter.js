import { FindStyled, Input } from 'components/common/CommonStyled';
import React from 'react';
import propTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <FindStyled>Find contacts by name</FindStyled>
      <Input
        type="text"
        placeholder="Search contact"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
