/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Script from 'next/script';

const contact = () => {
  return (
    <div>
      <Script id=''>
        {`alert("welcome to contact page")`}
      </Script>
      Contact
    </div>
  );
}

export default contact;
export const metadata = {
    title: "contact Next App",
    description: "Generated by create next app",
  };
