const termsOfService = [
  {
    id: 1,
    title: "1. Introduction",
    content:
      'Welcome to Realty on Chain (ROC), operated by Blockera (Web3 Corporation LTD), a company registered in London, United Kingdom. These Terms of Service ("Terms") govern your access to and use of the Realty on Chain (ROC) platform, including the website located at www.rocplatform.online (the "Platform").',
  },
  {
    id: 2,
    title: "2. Acceptance of Terms",
    content:
      "By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree to all of these Terms, you are not authorised to access or use the Platform.",
  },
  {
    id: 3,
    title: "3. Registration and Account",
    content:
      "You may need to register for an account to access certain features of the Platform. You are responsible for maintaining the confidentiality of your account information, including your username and password, and for all activity that occurs under your account. You agree to notify ROC immediately of any unauthorised use of your account or any other security breach.",
  },
  {
    id: 4,
    title: "4. Use of the Platform",
    explanation:
      "You agree to use the Platform only for lawful purposes and in accordance with these Terms. You agree not to:",
    firstAnswer:
      "Use the Platform in any way that violates any applicable laws or regulations.",
    secondAnswer: "Infringe upon the intellectual property rights of others.",
    thirdAnswer: "Engage in any fraudulent or misleading activity.",
    forthAnswer: "Attempt to disrupt or disable the Platform.",
    fivethAnswer:
      "Collect or store personal information about other users without their consent.",
    sixthAnswer: "Use the Platform for any unauthorised commercial purpose.",
  },
  {
    id: 5,
    title: "5. Risk Disclosure",
    content:
      "Investing in assets offered through the Platform involves inherent risks, including the potential for loss of principal. You are solely responsible for evaluating the risks involved in any investment and making your own investment decisions. The Platform does not provide financial advice, and you should consult with a qualified financial advisor before making any investment decisions.",
  },
  {
    id: 6,
    title: "6. Disclaimer of Warranties",
    content:
      'The Platform is provided "as is" and without warranties of any kind, express or implied. ROC disclaims all warranties, including but not limited to, warranties of merchantability, fitness for a particular purpose, non-infringement, and security. ROC does not warrant that the Platform will be uninterrupted or error-free.',
  },
  {
    id: 7,
    title: "7. Limitation of Liability",
    content:
      "ROC will not be liable for any damages arising out of or related to your use of the Platform, including but not limited to, direct, indirect, incidental, consequential, or punitive damages.",
  },
  {
    id: 8,
    title: "8. Intellectual Property",
    content:
      "The Platform and all content and materials contained herein are the property of ROC or its licensors and are protected by copyright, trademark, and other intellectual property laws. You agree not to modify, reproduce, distribute, or create derivative works of any content or materials on the Platform without the prior written consent of ROC.",
  },
  {
    id: 9,
    title: "9. Termination",
    content:
      "ROC may terminate your access to the Platform in the event of a violation of these Terms. You may also terminate your account at any time.",
  },
  {
    id: 10,
    title: "10. Governing Law and Jurisdiction",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of laws principles. You agree to submit to the exclusive jurisdiction of the courts of England and Wales for any dispute arising out of or relating to these Terms.",
  },
  {
    id: 11,
    title: "11. Entire Agreement",
    content:
      "These Terms constitute the entire agreement between you and ROC with respect to your use of the Platform.",
  },
  {
    id: 12,
    title: "12. Severability",
    content:
      "If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.",
  },
  {
    id: 13,
    title: "13. Amendment",
    content:
      "ROC may amend these Terms at any time by posting the amended Terms on the Platform. You are responsible for checking the Terms periodically for updates. Your continued use of the Platform after the posting of amended Terms constitutes your acceptance of the amended Terms.",
  },
  {
    id: 14,
    title: "14. Contact Us",
    content:
      'If you have any questions about these Terms, please contact us at "admin@wakaru.io"',
  },
];

const TermsOfService = () => {
  return (
    <div className="space-y-6">
      <div className="p-4 md:p-6 text-center">
        <h1 className="font-bold text-4xl md:text-5xl text-rocPurple-800 font-prompt">{`Terms of Service`}</h1>
      </div>
      <div className="rounded-2xl bg-rocWhite-300 p-4 space-y-4 font-manrope">
        {termsOfService.map((item) => {
          if (item.id !== 4) {
            return (
              <span key={item.id}>
                <h2 className="font-bold text-2xl text-rocPurple-800">
                  {item.title}
                </h2>
                <br></br>
                <p>{item.content}</p>
                <br></br>
              </span>
            );
          } else {
            return (
              <span key={item.id}>
                <h2 className="font-bold text-2xl text-rocPurple-800">
                  {item.title}
                </h2>
                <br></br>
                <p>
                  <strong>{item.explanation}</strong>
                  <ul className="list-disc pl-4">
                    <br></br>
                    <li>{item.firstAnswer}</li>
                    <li>{item.secondAnswer}</li>
                    <li>{item.thirdAnswer}</li>
                    <li>{item.forthAnswer}</li>
                    <li>{item.fivethAnswer}</li>
                    <li>{item.sixthAnswer}</li>
                  </ul>
                </p>
                <br></br>
              </span>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TermsOfService;
