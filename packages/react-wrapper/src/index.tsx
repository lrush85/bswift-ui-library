import React from 'react';
import { Button as SharedButton } from '@lrush85/shared-components';

export const Button: React.FC<{ label: string; color: string }> = ({ label, color }) => {
  return <div dangerouslySetInnerHTML={{ __html: SharedButton({ label, color }) }} />;
};