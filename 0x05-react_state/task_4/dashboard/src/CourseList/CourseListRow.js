import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

// Define the styles using Aphrodite
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#deb5b545", // Light brown background for header
  },
  row: {
    backgroundColor: "#f5f5f5ab", // Light gray background for regular rows
  },
  rowChecked: {
    backgroundColor: "#e6e4e4", // Light gray background when row is checked
  },
  cell: {
    padding: "10px", // Adds padding to table cells
  },
  headerCell: {
    fontWeight: "bold", // Bold font for header cells
  },
  checkbox: {
    marginRight: "10px", // Adds spacing between checkbox and text
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = useState(false);

  const selectedStyle = isHeader ? styles.header : (isChecked ? styles.rowChecked : styles.row);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr className={css(selectedStyle)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={css(styles.headerCell)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.headerCell)}>{textFirstCell}</th>
            <th className={css(styles.headerCell)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.cell)}>
            <input
              type="checkbox"
              className={css(styles.checkbox)}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            {textFirstCell}
          </td>
          <td className={css(styles.cell)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
