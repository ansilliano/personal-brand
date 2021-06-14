import React from 'react';

const Two = ({ size = 240, side }) => {
  const style = {
    cssFloat: side === 'left' ? 'left' : 'right',
  };
  return (
    <svg
      style={style}
      width={size}
      height={160}
      viewBox='0 0 273 160'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        // eslint-disable-next-line max-len
        d='M120.405 22.247l-.755.655.002.002.753-.657zm0 115.908l.754.657.002-.002-.756-.655zm-101.084 0l-.753.657.002.002.751-.659zm0-115.908l.752.66.002-.003-.754-.657zM48.433 42.12l-.868-.498-.001.002.869.496zm0 76.054l-.873.489.005.009.868-.498zm42.753-.107l-.867-.497-.002.002.87.495zm0-75.84l-.869.495.006.009.864-.504zM70.024 2.944c21.622 0 38.112 6.689 49.626 19.958l1.511-1.31C109.185 7.79 92.088.943 70.024.943v2zm49.628 19.96c11.532 13.22 17.37 32.215 17.37 57.136h2c0-25.21-5.906-44.743-17.863-58.45l-1.507 1.314zm17.37 57.136c0 25.064-5.839 44.168-17.372 57.459l1.511 1.311c11.956-13.779 17.861-33.419 17.861-58.77h-2zm-17.37 57.457c-11.514 13.199-28.004 19.853-49.628 19.853v2c22.062 0 39.159-6.809 51.135-20.538l-1.507-1.315zM70.024 157.35c-21.769 0-38.367-6.656-49.951-19.855l-1.503 1.319c12.048 13.728 29.252 20.536 51.454 20.536v-2zm-49.95-19.853C8.472 124.206 2.598 105.103 2.598 80.04h-2c0 25.353 5.942 44.993 17.971 58.772l1.507-1.315zM2.598 80.04c0-24.92 5.873-43.914 17.476-57.134l-1.503-1.32C6.54 35.295.597 54.829.597 80.04h2zm17.478-57.136c11.584-13.27 28.182-19.96 49.95-19.96v-2c-22.205 0-39.409 6.844-51.457 20.645l1.507 1.315zm49.95 6.614c-10.263 0-17.818 4.017-22.46 12.104l1.735.995c4.238-7.382 11.078-11.099 20.724-11.099v-2zM47.563 41.624C43.059 49.526 40.88 62.39 40.88 80.04h2c0-17.585 2.189-30.001 6.421-37.425l-1.737-.99zM40.88 80.04c0 17.652 2.18 30.582 6.68 38.623l1.745-.977c-4.237-7.571-6.425-20.064-6.425-37.646h-2zm6.685 38.632c4.643 8.086 12.197 12.104 22.46 12.104v-2c-9.647 0-16.487-3.717-20.725-11.1l-1.735.996zm22.46 12.104c9.993 0 17.397-4.068 22.03-12.215l-1.738-.989c-4.246 7.466-10.95 11.204-20.293 11.204v2zm22.03-12.212c4.646-8.114 6.9-21.01 6.9-38.524h-2c0 17.433-2.26 29.888-6.636 37.53l1.735.994zm6.9-38.524c0-17.512-2.253-30.343-6.905-38.317l-1.727 1.008c4.372 7.494 6.631 19.872 6.631 37.309h2zm-6.9-38.307c-4.633-8.147-12.037-12.215-22.03-12.215v2c9.341 0 16.046 3.738 20.292 11.203l1.739-.988zm149.63-35.277l-.383.923.003.002.38-.925zm18.691 14.072l-.808.59.005.005.803-.595zm-.859 45.869l-.857-.516-.002.003.859.513zm-21.377 26.64l-.713-.701-.008.008-.007.008.728.686zm-31.26 33.194l-.728-.686-1.588 1.686h2.316v-1zm64.883 0h1v-1h-1v1zm0 31.045v1h1v-1h-1zm-115.264 0h-1v1h1v-1zm0-25.352l-.727-.686-.273.289v.397h1zm55-58.222l.727.686.007-.008-.734-.678zm10.635-14.18l.866.499.004-.006-.87-.493zm-55.322-6.768l-.887.464.581 1.11.954-.812-.648-.762zM152.095 24.61l-.6-.8-.681.51.395.753.886-.463zm62.519-22.096c9.989 0 18.879 1.63 26.688 4.865l.765-1.847C233.978 2.179 224.821.514 214.614.514v2zm26.691 4.867c7.876 3.234 13.947 7.82 18.263 13.736l1.616-1.178c-4.565-6.258-10.954-11.055-19.12-14.408l-.759 1.85zm18.268 13.742c4.375 5.903 6.571 12.78 6.571 20.674h2c0-8.291-2.316-15.593-6.965-21.865l-1.606 1.191zm6.571 20.674c0 7.729-2.471 15.752-7.484 24.084l1.713 1.031c5.156-8.568 7.771-16.945 7.771-25.115h-2zm-7.486 24.087c-4.96 8.291-12.03 17.109-21.231 26.452l1.425 1.403c9.276-9.42 16.457-18.362 21.523-26.829l-1.717-1.026zm-21.246 26.468l-31.26 33.193 1.456 1.372 31.26-33.194-1.456-1.371zm-30.532 34.879h64.883v-2H206.88v2zm63.883-1v31.045h2v-31.045h-2zm1 30.045H156.499v2h115.264v-2zm-114.264 1v-25.352h-2v25.352h2zm-.273-24.665l55-58.223-1.454-1.373-55 58.223 1.454 1.373zm55.007-58.23c4.411-4.772 8.003-9.558 10.767-14.36l-1.733-.998c-2.678 4.652-6.176 9.319-10.502 14l1.468 1.357zm10.771-14.366c2.758-4.863 4.212-9.123 4.212-12.74h-2c0 3.117-1.267 7.02-3.952 11.754l1.74.986zm4.212-12.74c0-4.634-1.65-8.37-4.988-11.087l-1.263 1.55c2.821 2.297 4.251 5.436 4.251 9.538h2zm-4.988-11.087c-3.314-2.698-7.827-3.984-13.415-3.984v2c5.298 0 9.308 1.22 12.152 3.535l1.263-1.551zm-13.415-3.984c-6.344 0-13.222 1.77-20.621 5.251l.852 1.81c7.211-3.394 13.796-5.061 19.769-5.061v-2zm-20.621 5.251c-7.397 3.481-14.74 8.331-22.029 14.538l1.297 1.523c7.177-6.111 14.372-10.858 21.584-14.251l-.852-1.81zm-20.494 14.836l-14.717-28.144-1.772.926 14.716 28.145 1.773-.927zm-15.004-26.88c20.419-15.297 41.053-22.897 61.92-22.897v-2c-21.386 0-42.431 7.797-63.119 23.296l1.199 1.6z'
        fill='#D7D7D7'
      />
    </svg>
  );
};

export default Two;
