import { createGlobalStyle } from "styled-components";

export const GlobalStyleVendors = createGlobalStyle`
.ReactModalPortal {
  left: 0;
  position: fixed;
  top: 0;
  z-index: 6;

  .ReactModal {

    /* Required for lib !important styles documentation */
    &__Overlay,  &__Content {
        background-color: transparent !important;
    }
  }
}
`;
