import { InfinitySpin } from "react-loader-spinner";

// const FullScreenLoader = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: black;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export const Loader = () => {
  return (
    <InfinitySpin
      color="#ef8964"
      // {(p) => p.theme.colors.orangeColor}
      visible={true}
      height={200}
      width={200}
      ariaLabel="infinity-spin-loading"
    />
  );
};
