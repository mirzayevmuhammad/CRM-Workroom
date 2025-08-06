import { type JSX } from "react";

interface IconProps {
  rightArrowIcon: () => JSX.Element;
  leftArrowIcon: () => JSX.Element;

  companyLogo: () => JSX.Element;
  correctIcon: () => JSX.Element;
  plusIcon: () => JSX.Element;
}

const Icon: IconProps = {
  rightArrowIcon: () => {
    return (
      <svg
        width="16.000000"
        height="12.000000"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="arrow"
          d="M15.79 5.38L15.7 5.29L10.7 0.29C10.31 -0.1 9.68 -0.1 9.29 0.29C8.93 0.65 8.9 1.22 9.2 1.61L9.29 1.7L12.58 5L1 5C0.44 5 0 5.44 0 6C0 6.51 0.38 6.93 0.88 6.99L1 7L12.58 7L9.29 10.29C8.93 10.65 8.9 11.22 9.2 11.61L9.29 11.7C9.65 12.06 10.22 12.09 10.61 11.79L10.7 11.7L15.7 6.7C16.06 6.34 16.09 5.77 15.79 5.38Z"
          fill="#FFFFFF"
          fill-opacity="1.000000"
          fill-rule="evenodd"
        />
      </svg>
    );
  },
  companyLogo: () => {
    return (
      <svg
        width="50.000000"
        height="50.000000"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <rect
          id="Rectangle Copy"
          rx="12.000000"
          width="50.000000"
          height="50.000000"
          fill="#FFFFFF"
          fill-opacity="1.000000"
        />
        <rect
          id="Rectangle Copy"
          rx="12.000000"
          width="50.000000"
          height="50.000000"
          stroke="#979797"
          stroke-opacity="0"
          stroke-width="0.000000"
        />
        <mask
          id="mask0_7170"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0.000000"
          y="0.000000"
          width="50.000000"
          height="50.000000"
        >
          <rect
            id="Rectangle Copy"
            rx="12.000000"
            width="50.000000"
            height="50.000000"
            fill="#FFFFFF"
            fill-opacity="1.000000"
          />
          <rect
            id="Rectangle Copy"
            rx="12.000000"
            width="50.000000"
            height="50.000000"
            stroke="#979797"
            stroke-opacity="0"
            stroke-width="0.000000"
          />
        </mask>
        <path
          id="Fill 2"
          d="M18 25C16.35 25 15 23.64 15 22C15 20.35 16.35 19 18 19C19.64 19 21 20.35 21 22C21 23.64 19.64 25 18 25Z"
          fill="#3F8CFF"
          fill-opacity="1.000000"
          fill-rule="evenodd"
        />
        <path
          id="Fill 3"
          d="M43 18.34C43 13.2 38.72 9 33.5 9L33.5 9C28.27 9 24 13.2 24 18.34L24 32C24 32 42.99 29.91 43 18.34C43 18.34 43 18.34 43 18.34Z"
          fill="#3F8CFF"
          fill-opacity="1.000000"
          fill-rule="evenodd"
        />
        <path
          id="Fill 4"
          d="M7 35.4995L7 35.498C7.00195 27.4473 21 26 21 26L21 35.4995C21 39.0747 17.8501 42 14 42C10.1499 42 7 39.0747 7 35.4995ZM12.1606 35.4995C12.1606 36.439 12.9883 37.2075 14 37.2075C15.0117 37.2075 15.8394 36.439 15.8394 35.4995C15.8394 34.5596 15.0117 33.791 14 33.791C12.9883 33.791 12.1606 34.5596 12.1606 35.4995Z"
          clip-rule="evenodd"
          fill="#3F8CFF"
          fill-opacity="1.000000"
          fill-rule="evenodd"
        />
      </svg>
    );
  },
  correctIcon: () => {
    return (
      <svg
        width="13.313721"
        height="9.071289"
        viewBox="0 0 13.3137 9.07129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="done"
          d="M13.02 0.29C13.38 0.65 13.4 1.22 13.09 1.62L13.02 1.7L5.94 8.77C5.58 9.14 5.01 9.16 4.62 8.85L4.53 8.77L0.29 4.53C-0.1 4.14 -0.1 3.51 0.29 3.12C0.65 2.75 1.22 2.73 1.61 3.04L1.7 3.12L5.24 6.65L11.6 0.29C11.96 -0.07 12.54 -0.1 12.93 0.21L13.02 0.29Z"
          fill="#3F8CFF"
          fill-opacity="1.000000"
          fill-rule="evenodd"
        />
        <path
          id="done"
          d="M13.09 1.62L13.02 1.7L5.94 8.77C5.58 9.14 5.01 9.16 4.62 8.85L4.53 8.77L0.29 4.53C-0.1 4.14 -0.1 3.51 0.29 3.12C0.65 2.75 1.22 2.73 1.61 3.04L1.7 3.12L5.24 6.65L11.6 0.29C11.96 -0.07 12.54 -0.1 12.93 0.21L13.02 0.29C13.38 0.65 13.4 1.22 13.09 1.62Z"
          stroke="#979797"
          stroke-opacity="0"
          stroke-width="0.000000"
        />
      </svg>
    );
  },
  plusIcon: () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.9933 5.88338C12.9355 5.38604 12.5128 5 12 5C11.4477 5 11 5.44772 11 6V11H6L5.88338 11.0067C5.38604 11.0645 5 11.4872 5 12C5 12.5523 5.44772 13 6 13H11V18L11.0067 18.1166C11.0645 18.614 11.4872 19 12 19C12.5523 19 13 18.5523 13 18V13H18L18.1166 12.9933C18.614 12.9355 19 12.5128 19 12C19 11.4477 18.5523 11 18 11H13V6L12.9933 5.88338Z"
          fill="#3F8CFF"
        />
      </svg>
    );
  },
  leftArrowIcon: () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.2097 11.3871L4.29289 11.2929L9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289C11.0676 6.65338 11.0953 7.22061 10.7903 7.6129L10.7071 7.70711L7.415 11H19C19.5523 11 20 11.4477 20 12C20 12.5128 19.614 12.9355 19.1166 12.9933L19 13H7.415L10.7071 16.2929C11.0676 16.6534 11.0953 17.2206 10.7903 17.6129L10.7071 17.7071C10.3466 18.0676 9.77939 18.0953 9.3871 17.7903L9.29289 17.7071L4.29289 12.7071C3.93241 12.3466 3.90468 11.7794 4.2097 11.3871Z"
          fill="#3F8CFF"
        />
      </svg>
    );
  },
};

export default Icon;
