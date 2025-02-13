// // MyModal.js
// import React from "react";
// import {
//   CModal,
//   CModalHeader,
//   CModalTitle,
//   CModalBody,
//   CModalFooter,
//   CButton,
// } from "@coreui/react";

// const AppModal = ({ visible, handleClose }) => {
//   return (
//     <CModal
//       visible={visible}
//       onClose={() => handleClose(false)}
//       aria-labelledby="LiveDemoExampleLabel"
//     >
//       <CModalHeader>
//         <CModalTitle id="LiveDemoExampleLabel">Modal title</CModalTitle>
//       </CModalHeader>
//       <CModalBody>
//         <p>Woohoo, you're reading this text in a modal!</p>
//       </CModalBody>
//       <CModalFooter>
//         <CButton color="secondary" onClick={() => handleClose(false)}>
//           Close
//         </CButton>
//         <CButton color="primary">Save changes</CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// export default AppModal;

import React from "react";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CForm,
  CInputGroup,
  CFormInput,
  CInputGroupText,
  CFormFloating,
  CFormLabel,
} from "@coreui/react";

const AppModal = ({
  visible,
  handleClose,
  formData,
  handleChange,
  handleSubmit,
}) => {
  return (
    <CModal
      visible={visible}
      onClose={() => handleClose(false)}
      aria-labelledby="LiveDemoExampleLabel"
    >
      <CModalHeader>
        <CModalTitle id="LiveDemoExampleLabel">Modal title</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          {formData.map((data, index) => (
            // <CInputGroup key={index}>
            //   <CLabel htmlFor={`input${index}`}>Input {index + 1}</CLabel>
            //   <CFormInput
            //     id={`input${index}`}
            //     name={`input${index}`}
            //     value={data.value}
            //     onChange={(e) => handleChange(e, index)}
            //   />
            // </CInputGroup>
            <CInputGroup key={`input${index}`} className="mb-3">
              <CFormFloating className="mb-3">
                <CFormInput
                  type={data.type}
                  placeholder={data.placeholder}
                  id={`input${index}`}
                  name={`input${index}`}
                  value={data.value}
                  onChange={(e) => handleChange(e, index)}
                />
                <CFormLabel htmlFor="floatingInput">
                  {data.placeholder}
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
          ))}
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => handleClose(false)}>
          Close
        </CButton>
        <CButton color="primary" onClick={handleSubmit}>
          Save changes
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default AppModal;
