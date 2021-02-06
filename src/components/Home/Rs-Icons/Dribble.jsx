import React from 'react';

const Dribble = ({ size }) => (
  <>
    <svg
      width={size}
      height={size}
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20.9058 8.98549C14.9751 8.79955 10.0878 13.64 9.54887 19.3763C8.94818 25.7747 14.4582 30.8295 20.5474 31.0194C20.5613 31.02 20.5763 31.0194 20.5907 31.018C20.6142 31.0165 20.6416 31.0135 20.6516 31.0149C20.657 31.016 20.6626 31.0165 20.67 31.0165C26.5688 30.832 31.3475 26.5553 31.9039 20.6266C32.5045 14.2288 26.9946 9.17492 20.9058 8.98549ZM12.5209 13.7841C13.1451 12.967 13.8889 12.2392 14.7238 11.628C14.9457 11.4656 14.9726 11.5 14.7757 11.6924C14.0578 12.3953 13.3335 13.1046 12.5838 13.8384C12.3879 14.0309 12.3539 14.0029 12.5209 13.7841ZM12.5379 13.9083C13.3814 13.0897 13.8893 12.6041 13.3998 13.1077C13.2533 13.2487 12.9347 13.5563 12.4851 13.9915C12.2872 14.1829 12.1391 14.3195 12.1535 14.2966C12.168 14.2732 12.3405 14.0992 12.5379 13.9083ZM10.6326 21.513C10.6122 21.4147 10.5927 21.3155 10.5773 21.2148C10.5733 21.1889 10.5698 21.163 10.5668 21.1371C10.5618 21.0932 10.682 20.9302 10.836 20.7717C10.99 20.6131 11.1286 20.6635 11.1551 20.8838C11.181 21.1042 11.0932 21.4003 10.9522 21.5463C10.8106 21.6909 10.6665 21.677 10.6326 21.513ZM10.8869 22.5972C10.846 22.4561 10.9257 22.2338 11.0603 22.1002C11.1954 21.9671 11.328 21.984 11.3604 22.1386C11.3924 22.2931 11.3196 22.5159 11.1934 22.6365C11.0678 22.7567 10.9277 22.7383 10.8869 22.5972ZM11.1416 23.3893C11.0489 23.1336 11.0848 22.8225 11.2094 22.6984C11.334 22.5747 11.4856 22.6909 11.5589 22.9571C11.5608 22.9661 11.5633 22.9746 11.5658 22.983C11.6396 23.2482 11.6227 23.5473 11.5145 23.655C11.4073 23.7612 11.2343 23.6441 11.1416 23.3893ZM12.6486 25.7094C12.5359 25.814 12.3161 25.7174 12.1695 25.484C12.0344 25.2692 11.9063 25.0484 11.7852 24.822C11.6556 24.5793 11.5703 24.3669 11.5838 24.3549C11.5918 24.3469 11.5992 24.3404 11.6072 24.3325C11.6585 24.2802 11.7094 24.2273 11.7603 24.1755C11.8445 24.0882 11.994 24.2268 12.1157 24.4741C12.2388 24.7233 12.3729 24.9516 12.5195 25.1491C12.6849 25.3689 12.7613 25.6042 12.6486 25.7094ZM12.9173 20.0159C14.9133 19.9481 16.8919 19.6705 18.845 19.2682C19.1147 19.2123 19.5544 19.1889 19.8276 19.2238C21.4277 19.4287 21.8749 19.642 21.1675 19.8649C20.5554 20.0827 19.9756 20.323 19.3904 20.6041C18.4761 21.0438 17.6436 21.644 16.8525 22.2722C15.9262 23.0084 15.1152 23.8778 14.3864 24.8071C14.2169 25.0244 13.845 25.2577 13.6646 25.0498C13.0788 24.3739 12.349 22.17 12.2618 21.824C12.1705 21.4018 12.1097 20.976 12.0788 20.5459C11.9965 19.7806 12.2747 20.0374 12.9173 20.0159ZM30.6705 17.7991C30.713 17.967 30.6262 18.2223 30.4821 18.3674C30.338 18.5124 30.2209 18.4751 30.199 18.2851C30.1775 18.0957 30.2468 17.8434 30.3685 17.7198C30.4906 17.5962 30.6282 17.6306 30.6705 17.7991ZM29.9781 16.4352C30.0758 16.3295 30.2328 16.4292 30.3186 16.6615C30.4038 16.8938 30.3744 17.1824 30.2623 17.3026C30.1501 17.4227 30.0115 17.3165 29.9402 17.0703C29.8685 16.8235 29.8794 16.5409 29.9781 16.4352ZM29.8231 16.0508C29.7274 16.146 29.5668 16.0149 29.4417 15.7697C28.8983 14.7058 28.0564 13.9616 26.844 14.8026C26.8081 14.8275 26.7792 14.8514 26.7548 14.8748C25.7662 15.836 24.6411 16.5797 23.4123 17.2008C22.8116 17.5044 22.4193 17.9441 22.5305 18.6261C22.6272 19.2173 22.9602 19.7976 23.5868 19.836C24.9422 19.9202 26.2932 19.8035 27.6536 19.9297C28.3336 19.993 28.9118 20.0145 29.347 19.9028C29.6137 19.8345 29.854 19.7069 29.9208 19.7158C29.9876 19.7248 30.1984 19.5727 30.3914 19.3763C30.4397 19.3265 30.4876 19.2777 30.537 19.2283C30.7299 19.0319 30.9198 19.0932 30.9457 19.3674C31.0634 20.5872 30.9433 21.7677 30.6277 22.8754C30.5524 23.1401 30.3993 23.4277 30.3002 23.5229C30.2404 23.5807 30.181 23.6386 30.1217 23.6964C29.8416 23.9691 29.6003 24.2034 29.3949 24.4028C29.1975 24.5942 29.0419 24.7413 29.0484 24.7313C29.0549 24.7208 29.2199 24.5568 29.4173 24.3654C29.524 24.2617 29.6396 24.149 29.7653 24.0274C29.9627 23.836 29.9627 23.8355 29.7633 24.0264C29.6536 24.1321 29.5434 24.2393 29.4308 24.3474C29.2329 24.5384 29.193 24.506 29.3301 24.2667C29.6546 23.6974 29.9337 23.0728 30.009 22.5109C30.0454 22.2383 30.1407 21.8893 30.2917 21.7343C30.4438 21.5802 30.517 21.4097 30.4472 21.3614C30.3784 21.314 30.2294 21.3739 30.1242 21.4825C30.019 21.5912 29.854 21.4641 29.6561 21.2791C29.4587 21.0947 29.2169 20.9835 29.17 20.9646C29.1456 20.9546 29.1167 20.9461 29.0823 20.9391C28.1018 20.7457 27.1202 20.643 26.1217 20.6286C25.5185 20.6201 24.4567 20.5558 24.0773 21.1755C23.9876 21.321 23.9352 21.4721 23.9083 21.6261C23.8625 21.8898 23.8889 22.0788 23.8749 22.0408C23.8605 22.003 23.7273 22.0942 23.5768 22.2447C23.4262 22.3953 23.2244 22.3091 23.1152 22.0563C23.017 21.8265 22.9118 21.6007 22.7977 21.3823C22.697 21.1894 22.4337 21.1715 22.2423 21.2358C20.361 21.8734 18.6556 22.8579 17.1446 24.1445C16.2164 24.9352 14.5893 26.316 15.1541 27.655C15.4108 28.2642 16.5688 28.6371 17.1102 28.8295C18.2523 29.2368 19.4472 29.5045 20.6671 29.4686C21.9602 29.4302 24.1187 29.3744 24.525 27.9442C24.6003 27.6799 24.7299 27.3121 24.8998 27.1401C25.0703 26.9671 25.2224 26.8739 25.2403 26.9312C25.2503 26.9651 25.2613 27.0005 25.2732 27.0339C25.5414 27.7502 26.1332 27.6331 26.7289 27.2523C26.9612 27.1042 27.1596 26.9975 27.2 27.0384C27.2408 27.0793 27.4387 26.9456 27.6337 26.7512C28.34 26.0459 29.0474 25.3365 29.7548 24.6281C29.9492 24.4327 30.0145 24.4786 29.8874 24.7223C28.188 27.9756 24.7149 30.2577 20.8719 30.4108C19.8645 30.3774 18.9028 30.2084 17.9955 29.9307C17.7323 29.85 17.5339 29.7622 17.5484 29.7467C17.5624 29.7318 17.3704 29.6271 17.1267 29.4995C17.0917 29.4811 17.0569 29.4626 17.022 29.4447C16.7792 29.3141 16.5578 29.2278 16.5205 29.2647C16.4831 29.3011 16.2513 29.2338 16.01 29.1017C15.8545 29.0164 15.7024 28.9272 15.5524 28.8345C15.3181 28.6899 15.183 28.514 15.2428 28.4542C15.3026 28.3943 15.2488 28.2642 15.1281 28.1575C15.007 28.0513 14.85 28.0185 14.7757 28.0862C14.7009 28.155 14.4627 28.0753 14.2523 27.8968C14.0728 27.7453 13.8983 27.5882 13.7293 27.4247C13.5314 27.2333 13.4567 26.992 13.5514 26.8953C13.6456 26.7996 13.6974 26.6899 13.668 26.6496C13.6386 26.6092 13.5325 26.653 13.4312 26.7463C13.33 26.8395 13.1431 26.7996 13.0165 26.654C12.8903 26.5085 12.8834 26.3026 12.9945 26.2019C13.1057 26.1002 13.1316 25.9232 13.0584 25.8031C12.9851 25.683 13.0982 25.7393 13.3579 25.8305C13.7916 25.9821 14.2926 25.8814 14.8674 25.4058C14.8928 25.3843 14.9133 25.3644 14.9297 25.3455C14.9607 25.3095 15.1072 25.0922 15.2782 24.8774C16.6835 23.1102 18.4562 21.6291 20.5285 20.7318C20.7807 20.6221 20.861 20.6695 20.7024 20.8255C20.5439 20.981 20.4692 21.0748 20.5369 21.0373C20.6047 20.9995 20.7777 20.8584 20.9223 20.7213C21.0673 20.5842 21.2807 20.4367 21.3999 20.3908C21.4716 20.3629 21.5434 20.3365 21.6172 20.313C21.7587 20.2682 22.0105 20.168 22.0275 19.9865C22.0324 19.9312 22.0349 19.8783 22.0354 19.8275C22.0364 19.7392 22.1665 19.5408 22.331 19.3848C22.4961 19.2283 22.6202 19.0867 22.6082 19.0693C22.5962 19.0518 22.5738 19.0493 22.5599 19.0633C22.5733 19.0493 22.5798 19.0319 22.5719 19.0249C22.5643 19.0179 22.4382 19.1296 22.2907 19.2741C22.1431 19.4187 22.013 19.3031 21.8859 19.0593C21.3381 18.0179 19.4143 18.5623 18.4302 18.7757C16.8071 19.1276 15.1376 19.2926 13.4821 19.3928C12.9597 19.4247 12.3739 19.3698 11.845 19.4825C11.5758 19.5404 11.3655 19.5169 11.3689 19.3614C11.3724 19.2058 11.2259 19.2373 11.03 19.4307C10.9596 19.4995 10.8899 19.5688 10.8201 19.6381C10.6242 19.8315 10.4577 19.7652 10.4651 19.49C10.4711 19.2552 10.4861 19.0224 10.5095 18.7916C10.5369 18.5174 10.7343 18.1435 10.9342 17.9541C11.017 17.8753 11.0997 17.7971 11.1825 17.7183C11.3819 17.5284 11.517 17.6096 11.6316 17.8599C11.7558 18.1311 12.0189 18.3295 12.4746 18.4102C12.489 18.4127 12.505 18.4142 12.5209 18.4142C12.5469 18.4142 12.5982 18.4177 12.6366 18.4217C12.6575 18.4237 12.68 18.4247 12.7059 18.4237C14.9422 18.332 17.7458 18.2951 19.7976 17.3385C20.0678 17.2123 20.2144 17.0194 20.2692 16.7806C20.331 16.5119 20.3968 16.171 20.5509 16.0309C20.7044 15.8903 20.8241 15.7686 20.8181 15.7587C20.8126 15.7492 20.688 15.8634 20.5399 16.0129C20.3919 16.163 20.2478 16.131 20.191 15.9481C20.1337 15.7652 20.1611 15.5294 20.2742 15.4137C20.3874 15.2976 20.4477 15.152 20.4083 15.0882C20.3689 15.0244 20.2518 15.0628 20.1446 15.172C20.0374 15.2811 19.8495 15.1675 19.7114 14.9297C19.6297 14.7891 19.5424 14.648 19.4517 14.5084C19.3021 14.2776 19.2398 14.0299 19.3221 13.9486C19.3719 13.8993 19.4218 13.8504 19.4711 13.8016C19.4821 13.7896 19.4931 13.7771 19.5041 13.7647C19.522 13.7442 19.4467 13.5912 19.3345 13.4227C19.2219 13.2542 19.0439 13.2059 18.9377 13.315C18.8316 13.4237 18.6775 13.4217 18.5923 13.311C18.5075 13.1998 18.5284 13.0174 18.6401 12.9027C18.7518 12.7881 18.8375 12.6884 18.8316 12.6799C18.8255 12.6714 18.7313 12.7592 18.6197 12.8753C18.5085 12.991 18.4138 13.0802 18.4088 13.0737C18.4038 13.0672 18.4542 13.0095 18.5215 12.9446C18.5664 12.9007 18.6077 12.8614 18.6436 12.8275C18.6745 12.796 18.7035 12.7677 18.7293 12.7412C18.7767 12.6939 18.7976 12.6315 18.7767 12.6007C18.7637 12.5812 18.7508 12.5628 18.7383 12.5453C18.6934 12.481 18.6411 12.4227 18.5833 12.3709C18.4871 12.2851 18.3111 12.31 18.2079 12.4048C18.1052 12.4994 17.9836 12.5264 17.9372 12.4641C17.9053 12.4217 17.8774 12.3828 17.8545 12.3494C16.6436 10.5912 14.2797 12.9875 13.4581 13.8768C13.0409 14.3285 12.1535 15.4646 11.7503 16.4925C11.6496 16.7487 11.4427 17.1261 11.2488 17.3215C11.1601 17.4112 11.0713 17.501 10.9826 17.5902C10.7887 17.7861 10.673 17.7248 10.7393 17.4576C10.831 17.0887 10.9442 16.7268 11.0778 16.3733C11.175 16.1156 11.4218 15.7527 11.6147 15.5563C12.0589 15.1037 12.5025 14.651 12.9442 14.2033C13.1376 14.0069 13.4217 13.6654 13.5907 13.4481C14.1237 12.7622 14.7383 12.143 15.4198 11.6047C15.6356 11.4337 15.9746 11.1465 16.169 10.9516C16.1909 10.9297 16.2129 10.9077 16.2354 10.8853C16.4297 10.6904 16.7892 10.4381 17.0444 10.3344C17.4267 10.1794 17.8191 10.0463 18.2199 9.93664C18.4856 9.86386 18.6985 9.82099 18.6929 9.82697C18.687 9.83245 18.7373 9.81949 18.8061 9.80005C18.8475 9.78858 18.8889 9.77711 18.9302 9.76515C19.2792 9.69536 19.6336 9.64252 19.9921 9.60862C24.2663 9.20682 27.9532 11.8265 29.7802 15.4292C29.9063 15.6749 29.9193 15.9556 29.8231 16.0508ZM29.0754 19.4551C27.7912 19.4641 26.499 19.1934 25.1989 19.2163C24.5041 19.2283 23.9562 19.4132 23.6446 18.6993C23.2423 17.7796 24.5699 17.2766 25.2104 16.8973C25.8919 16.493 26.5295 16.005 27.1197 15.4731C27.3241 15.2886 27.7274 15.0134 27.9477 15.1784C28.8261 15.8394 29.5369 19.4521 29.0754 19.4551ZM24.1451 24.008C24.2897 23.8624 24.4148 23.7667 24.4243 23.7941C24.4308 23.8106 24.4358 23.8275 24.4407 23.8449C24.4641 23.9247 24.4856 24.005 24.506 24.0863C24.5399 24.2198 24.4482 24.4471 24.3016 24.5947C24.1551 24.7417 24.0035 24.7298 23.9617 24.5663C23.9203 24.4033 24.0005 24.1535 24.1451 24.008ZM23.7194 23.7124C23.6481 23.4805 23.6935 23.1805 23.8251 23.0384C23.9577 22.8973 24.1262 22.9656 24.2089 23.1869C24.2917 23.4093 24.2423 23.7119 24.1008 23.8614C23.9582 24.011 23.7902 23.9436 23.7194 23.7124ZM24.4985 25.4127C24.6441 25.2627 24.8101 25.3604 24.8744 25.6276C24.9138 25.7916 24.9552 25.9546 24.9991 26.1162C25.0703 26.3818 25.0085 26.7273 24.8505 26.8893C24.6925 27.0514 24.5175 26.9646 24.4592 26.6954C24.4213 26.5214 24.3834 26.346 24.344 26.1695C24.2847 25.9018 24.353 25.5628 24.4985 25.4127ZM25.019 22.332C24.5724 20.9302 26.7867 21.1954 27.9816 21.4092C28.2528 21.4576 28.697 21.5837 28.862 21.8046C29.4836 22.6381 28.34 24.3574 27.8739 25.0817C27.5624 25.5663 27.1765 25.994 26.7772 26.4058C26.1566 27.0464 26.0628 26.157 25.9567 25.6934C25.6965 24.5593 25.3719 23.4412 25.019 22.332ZM23.5155 28.0389C22.8859 29.334 19.7403 28.8196 18.7493 28.5987C18.0579 28.4442 17.4098 28.145 16.7802 27.83C15.2882 27.0833 16.1685 26.2408 16.6745 25.6286C17.9427 24.0932 19.67 22.8963 21.5165 22.1246C21.7713 22.0184 22.0773 22.1421 22.1865 22.3948C22.8141 23.8599 23.187 25.5185 23.5205 27.0693C23.5788 27.3385 23.6356 27.7911 23.5155 28.0389ZM14.5573 13.7462C15.0005 13.2667 16.1671 11.9696 16.9666 12.7452C17.3265 13.0942 17.5962 13.6719 17.871 14.0882C18.2568 14.6729 18.6252 15.2691 18.9911 15.8669C19.8919 17.3404 17.1695 17.3898 16.5304 17.487C15.5224 17.6405 14.5045 17.7353 13.4861 17.7921C13.2109 17.8075 12.7204 17.7751 12.6042 17.5254C12.182 16.6141 14.2358 14.0952 14.5573 13.7462Z'
        fill='#660813'
      />
      <path
        d='M27.3441 12.5484C27.2937 12.513 27.2434 12.4796 27.1915 12.4467C27.1068 12.3918 26.9603 12.4192 26.8655 12.508C26.7703 12.5962 26.6237 12.5339 26.5056 12.3913C26.3884 12.2488 26.3112 12.1156 26.359 12.0718C26.4074 12.0279 26.3685 11.9491 26.2723 11.8978C26.1776 11.846 26.0704 11.8315 26.0365 11.8619C26.0026 11.8923 25.8242 11.8111 25.6267 11.7004C25.4294 11.5898 25.2718 11.504 25.2853 11.4905C25.2982 11.477 25.2618 11.4482 25.2025 11.4262C25.1432 11.4043 25.0864 11.3963 25.0754 11.4068C25.0645 11.4173 24.9159 11.3659 24.7399 11.2991C24.5639 11.2323 24.4004 11.1745 24.3765 11.1665C24.3621 11.1615 24.3476 11.1575 24.3326 11.1535C23.5724 10.9088 22.8186 10.7557 22.3535 10.676C21.4553 10.5214 17.8466 10.1625 18.6835 12.0573C18.686 12.0633 18.6905 12.0673 18.6945 12.0713C18.702 12.0783 18.71 12.0932 18.7125 12.1052C18.7135 12.1122 18.7154 12.1187 18.7205 12.1262C19.4508 13.1765 20.1417 14.2503 20.7987 15.3475C21.211 16.0354 21.6651 16.5708 22.549 16.4771C22.7429 16.4566 22.9383 16.4083 23.1332 16.341C23.393 16.2508 23.6487 16.1615 23.719 16.171C23.7902 16.1804 23.9597 16.0748 24.0988 15.9452C24.2369 15.8161 24.5375 15.5902 24.7648 15.4347C24.9174 15.3305 25.0639 15.2284 25.2025 15.1336C25.6756 14.8111 26.6551 14.2114 26.8042 13.6097C26.8132 13.5743 26.8172 13.5404 26.8212 13.5065C26.8266 13.4492 26.8366 13.3958 26.8456 13.3879C26.8511 13.3829 26.856 13.3774 26.8616 13.3734C26.8616 13.3734 27.0131 13.2328 27.1996 13.0593C27.3865 12.8859 27.5011 12.6944 27.4488 12.6396C27.4174 12.6062 27.383 12.5758 27.3441 12.5484ZM25.3337 14.2049C25.0161 14.492 24.6681 14.7413 24.3112 14.9761C24.0814 15.1276 23.73 15.4058 23.4837 15.5289C23.1487 15.6964 22.7912 15.7229 22.4109 15.6072C22.1482 15.5274 21.8441 15.2144 21.704 14.9776C21.6113 14.821 21.5181 14.665 21.4244 14.51C20.9507 13.7193 20.4453 12.9472 19.9248 12.1864C19.7693 11.9591 19.531 11.4871 19.7653 11.3425C20.4074 10.9456 22.7713 11.4527 23.0559 11.5304C24.1327 11.8245 26.8556 12.8295 25.3337 14.2049Z'
        fill='#660813'
      />
      <path
        d='M20.7963 16.7727C20.725 16.838 20.6492 16.9088 20.547 17.006C20.3471 17.1954 20.2779 17.332 20.3885 17.3091C20.4548 17.2951 20.5211 17.2812 20.5884 17.2657C20.6203 17.2582 20.6512 17.2493 20.6806 17.2393C20.7305 17.2223 20.8441 17.1341 20.9359 17.0479C21.0281 16.9621 21.1567 16.7971 21.1722 16.668C21.1881 16.5379 20.9987 16.5858 20.7963 16.7727Z'
        fill='#660813'
      />
      <path
        d='M15.6847 24.665C15.5022 24.8345 15.3198 25.0035 15.1368 25.1725C14.9349 25.3594 14.7904 25.5269 14.8153 25.5434C14.8402 25.5598 15.0187 25.4128 15.2116 25.2174C15.5107 24.9147 15.8098 24.6111 16.1099 24.3071C16.3034 24.1112 16.2959 24.1037 16.093 24.2901C15.9604 24.4123 15.8243 24.5374 15.6847 24.665Z'
        fill='#660813'
      />
    </svg>
  </>
);

export default Dribble;