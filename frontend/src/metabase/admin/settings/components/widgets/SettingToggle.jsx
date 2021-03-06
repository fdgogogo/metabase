import React from "react";
import { t } from "c-3po";
import Toggle from "metabase/components/Toggle.jsx";

const SettingToggle = ({ setting, onChange, disabled }) => {
  const value = setting.value == null ? setting.default : setting.value;
  const on = value === true || value === "true";
  return (
    <div className="flex align-center pt1">
      <Toggle value={on} onChange={!disabled ? () => onChange(!on) : null} />
      <span className="text-bold mx1">{on ? t`Enabled` : t`Disabled`}</span>
    </div>
  );
};

export default SettingToggle;
