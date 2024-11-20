import * as React from 'react';

interface EmailTemplateProps {
  yourName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  yourName,
}) => (
  <div>
    <h1>안녕하세요, {yourName}!</h1>
  </div>
);

export default EmailTemplate;
