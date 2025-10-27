import React from "react";
import PropTypes from "prop-types";

const StatCard = ({ value, label, icon }) => {
  return (
    <div className="flex items-start space-x-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      {icon && (
        <div className="flex-none w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center text-green-700">
          {icon}
        </div>
      )}
      <div>
        <div className="text-2xl font-bold text-neutralDark">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

export default StatCard;