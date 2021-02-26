<<<<<<< HEAD
/* eslint-disable max-len */
=======
>>>>>>> 50762cffc0a73816d14d365e8161383b53aac47e
import React from 'react';

const Instagram = ({ size, color = '#660813' }) => (
  <a
    href='https://www.instagram.com/ansilliano'
    target='_blank'
    rel='noreferrer'
  >
    <svg
      width={size}
      height={size}
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M31.4815 23.312C31.4815 19.8024 31.4815 16.2934 31.4815 12.7833C31.4815 10.0942 29.7282 9.32401 27.3649 9.32401C22.6474 9.32401 17.9283 9.32401 13.2103 9.32401C13.198 9.32401 13.1852 9.3245 13.1719 9.32647C13.1516 9.32844 13.1245 9.33239 13.1127 9.33189C13.1063 9.33189 13.0999 9.33189 13.091 9.33288C10.0296 9.68788 9.89453 11.9914 9.89453 14.4799C9.89453 18.1738 9.89453 21.8678 9.89453 25.5618C9.89453 27.8407 9.97293 30.4613 13.0097 30.4613C16.2313 30.4613 19.4524 30.4613 22.674 30.4613C24.5082 30.4613 28.1051 31.1491 29.8095 30.0624C32.1111 28.5951 31.4815 25.6895 31.4815 23.312ZM30.5452 13.4691C30.5373 13.7103 30.5289 13.938 30.5289 14.1397C30.5289 14.1984 30.5289 14.2565 30.5289 14.3147C30.5289 14.4113 30.3701 14.6431 30.1739 14.8319C29.8401 15.1539 29.5063 15.4759 29.174 15.7973C28.9787 15.9867 28.8535 16.1509 28.8969 16.1592C28.9398 16.1681 29.1335 16.0177 29.3293 15.8279C29.5916 15.573 29.8751 15.2964 30.1769 15.0035C30.3721 14.8132 30.5294 14.8512 30.5294 15.0878C30.5294 15.324 30.3755 15.6647 30.1848 15.8491C29.9949 16.033 29.9071 16.1829 29.9885 16.1829C30.0698 16.1829 30.2247 16.105 30.3331 16.0089C30.4421 15.9132 30.5294 16.0562 30.5294 16.3283C30.5294 17.3145 30.5294 18.3011 30.5294 19.2872C30.5294 19.9863 30.5447 20.6934 30.5634 21.4044C30.5708 21.6765 30.5328 22.067 30.4648 22.2727C30.3967 22.4782 30.3869 22.5803 30.4589 22.5068C30.5309 22.4329 30.5954 22.5936 30.6024 22.8658C30.6093 23.132 30.6137 23.3978 30.6186 23.664C30.6231 23.9362 30.4712 24.3153 30.2804 24.5101C30.024 24.7729 29.7681 25.0357 29.5112 25.299C29.3209 25.4942 29.1617 25.4809 29.1552 25.2689C29.1513 25.1368 29.1483 25.0091 29.1483 24.8853C29.1483 23.3854 30.0556 18.6417 28.146 18.0807C28.1341 18.0772 28.1193 18.0747 28.1046 18.0732C28.0814 18.0713 28.0399 18.0644 28.0113 18.0605C27.9833 18.0565 27.9556 18.0481 27.9497 18.0388C27.9438 18.0294 27.9324 18.0284 27.9236 18.0368C27.9157 18.0452 27.863 18.0521 27.8067 18.0615C27.7757 18.0664 27.7417 18.0737 27.7061 18.0837C26.2442 18.4919 26.6875 19.3799 26.6145 20.7737C26.5786 21.463 26.4119 22.0922 26.1501 22.6582C26.0357 22.9052 25.766 23.2504 25.5727 23.4431C25.4854 23.5299 25.3982 23.6177 25.3114 23.704C25.1186 23.8963 25.0303 24.0432 25.1112 24.0284C25.1921 24.0141 25.1082 24.164 24.9066 24.3469C23.9777 25.1885 22.7603 25.7181 21.4799 25.8754C21.2097 25.9079 21.0376 25.8675 21.0982 25.8068C21.1589 25.7462 21.1244 25.652 21.0228 25.5919C20.9217 25.5332 20.7363 25.5785 20.6057 25.6988C20.475 25.8192 20.1486 25.9079 19.8779 25.8749C19.4431 25.8226 19.0116 25.726 18.5925 25.5776C18.5319 25.5564 18.4732 25.5327 18.415 25.5076C18.3174 25.4672 18.3913 25.2783 18.5787 25.0875C18.7661 24.8977 18.7557 24.8927 18.555 25.0771V25.0791C18.3543 25.263 18.0442 25.3483 17.8697 25.2551C17.6952 25.1624 17.7223 24.9277 17.9229 24.7438C18.1492 24.5367 18.376 24.3282 18.6019 24.1206C18.8025 23.9362 19.1719 23.8652 19.4346 23.9372C19.7907 24.0343 20.1545 24.0949 20.5174 24.1142C21.7269 24.1773 22.8658 23.7266 23.7361 22.9674C23.9412 22.7884 23.9491 22.7962 23.7494 22.9812C23.6221 23.0985 23.4876 23.2085 23.3466 23.3105C23.1252 23.4693 22.8841 23.6147 22.8278 23.666C22.7716 23.7173 22.7924 23.7858 22.8752 23.8164C22.958 23.8469 23.1804 23.7123 23.3712 23.5186C24.242 22.6311 25.1127 21.7421 25.9819 20.8517C26.1728 20.6564 26.1624 20.6461 25.9602 20.8285C25.5786 21.1731 25.1995 21.5153 24.8267 21.852C24.6251 22.035 24.594 22.0064 24.733 21.7722C25.0116 21.2974 25.2098 20.7732 25.3025 20.2201C25.3193 20.1214 25.3311 20.0248 25.338 19.9291C25.3508 19.7679 25.5106 19.4844 25.7078 19.2965C26.2285 18.801 26.7328 18.3193 27.2175 17.8563C27.4143 17.6685 27.5568 17.4954 27.5336 17.4718C27.5104 17.4481 27.3344 17.5827 27.1386 17.7725C26.6559 18.2439 26.1767 18.7128 25.6999 19.1807C25.5052 19.371 25.5042 19.3715 25.6979 19.1802C26.1777 18.7078 26.6781 18.2148 27.1337 17.7666C27.3275 17.5758 27.4808 17.4165 27.4759 17.4116C27.4705 17.4067 27.3097 17.5566 27.1155 17.7468C26.6392 18.2118 26.1673 18.6729 25.6979 19.1318C25.5032 19.3222 25.342 19.2551 25.2946 18.9869C25.2734 18.8626 25.2443 18.7409 25.2098 18.622C25.1339 18.3607 25.1995 18.0097 25.3987 17.8243C25.6827 17.56 25.9657 17.2962 26.2497 17.0324C26.4488 16.8466 26.4834 16.6158 26.3197 16.53C26.155 16.4447 25.8537 16.5384 25.6535 16.7233C25.4623 16.9008 25.2719 17.0783 25.0801 17.2553C24.8809 17.4407 24.6325 17.4658 24.5121 17.3233C24.3918 17.1808 24.4485 16.9255 24.6487 16.7411C24.7172 16.6784 24.7883 16.6128 24.8627 16.5453C25.0629 16.3609 25.4445 16.245 25.7157 16.2574C26.4084 16.2874 27.1381 16.2016 27.5449 16.2016C28.6124 16.2016 28.993 15.5873 29.1163 14.8107C29.1597 14.542 29.173 14.3112 29.1849 14.3004C29.1917 14.294 29.1981 14.2876 29.2056 14.2812L29.9727 13.5683C30.0708 13.4691 30.168 13.371 30.2656 13.2729C30.4259 13.1097 30.5535 13.197 30.5452 13.4691ZM30.1803 14.9508C29.8934 15.2353 29.6182 15.502 29.3481 15.7599C29.1513 15.9477 29.1483 15.9458 29.3441 15.7559C29.6523 15.4581 29.9273 15.1904 30.1764 14.9473C30.3711 14.757 30.3736 14.7594 30.1803 14.9508ZM28.0212 27.5848C27.3985 27.5848 26.7767 27.5848 26.154 27.5848C23.5867 27.5848 21.0188 27.5848 18.4515 27.5848C17.7297 27.5848 13.1408 28.1913 13.1408 26.8512C13.1408 24.6901 13.1408 22.528 13.1408 20.3675C13.1408 20.0154 13.1408 19.6639 13.1408 19.3118C13.1408 18.34 13.8469 20.7678 13.8498 20.8363C13.9371 22.5118 14.9725 23.9826 16.1835 25.0485C18.166 26.7939 21.0331 26.8083 23.3865 25.974C24.6443 25.5283 25.6679 24.5816 26.4666 23.5467C26.8507 23.0482 27.0884 22.4363 27.3073 21.856C27.3931 21.6302 27.5306 20.1426 27.6598 19.2329C27.6983 18.9632 27.9034 18.9026 28.0227 19.1471C28.7499 20.6278 28.1953 24.1837 28.1953 25.1417C28.1957 25.2719 28.322 27.5848 28.0212 27.5848ZM18.0374 23.342C18.1996 23.4436 18.1764 23.665 17.9767 23.8499C17.7873 24.0259 17.598 24.2015 17.4087 24.3775C17.209 24.5624 16.9304 24.62 16.7934 24.4968C16.6568 24.3735 16.714 24.1156 16.9132 23.9298C17.0714 23.7824 17.2302 23.634 17.3895 23.4855C17.5882 23.2996 17.8751 23.2405 18.0374 23.342ZM20.0268 16.137C20.2956 16.0927 20.7383 16.0927 21.007 16.138C25.1206 16.8327 25.6644 23.3627 20.8975 23.6118C16.4408 23.8445 15.6928 16.8539 20.0268 16.137ZM28.1647 15.2979C28.0922 15.9255 27.0918 15.6977 26.6756 15.6977C26.1501 15.6977 25.5249 15.823 25.1216 15.4197C24.8237 15.1218 24.9495 14.3177 24.9495 13.9469C24.9495 13.7103 24.8534 12.9243 25.0008 12.4603C25.0826 12.201 25.5352 12.1049 25.8069 12.0851C26.5795 12.0279 27.5671 11.9475 28.0153 12.3967C28.3131 12.6955 28.1879 13.4987 28.1879 13.87C28.1879 14.3438 28.2189 14.828 28.1647 15.2979ZM11.1533 11.4244C11.4299 10.7263 11.8382 10.1977 12.4298 9.95413C12.6818 9.85059 12.9303 9.82741 12.9618 9.82741C12.9934 9.82741 12.8647 9.9847 12.6739 10.179C12.237 10.6242 11.7903 11.0793 11.3397 11.5388C11.1489 11.7336 11.0527 11.6779 11.1533 11.4244ZM10.6903 16.818C10.6864 16.7474 10.6819 16.677 10.678 16.6059C10.6622 16.3343 10.8086 15.96 11.0049 15.7717C11.9368 14.8763 12.8292 14.0194 13.693 13.1915C13.8898 13.0032 14.0495 12.841 14.0495 12.8306C14.0495 12.8198 13.8903 12.9637 13.6935 13.1526C12.8455 13.9666 11.9471 14.8295 11.0034 15.7337C10.8067 15.9221 10.642 15.9792 10.6346 15.8609C10.6302 15.7899 10.6257 15.7189 10.6218 15.6474C10.6134 15.0297 10.6262 14.4035 10.674 13.8014C10.6953 13.5298 10.8762 13.1526 11.066 12.9574C11.8243 12.1818 12.5669 11.4224 13.267 10.707C13.4573 10.5123 13.4593 10.5133 13.27 10.709C13.1004 10.8845 12.9288 11.0625 12.7552 11.2425C12.5664 11.4387 12.5679 11.4392 12.7582 11.2449C13.1073 10.8885 13.4549 10.5345 13.803 10.1795C13.9938 9.98519 14.369 9.82741 14.6412 9.82741C14.9399 9.82741 15.2392 9.82741 15.5386 9.82741C15.8107 9.82741 16.0065 9.85206 15.9759 9.88313C15.9453 9.91419 15.9848 9.91764 16.0646 9.89398C16.1445 9.87031 16.2174 9.85108 16.2264 9.8427C16.2352 9.83432 16.4635 9.82741 16.7357 9.82741C18.0713 9.82741 19.4066 9.82741 20.7423 9.82741C22.5079 9.82741 24.2735 9.82741 26.0386 9.82741C27.3201 9.82741 28.5488 9.66125 29.6029 10.4299C29.8223 10.5901 30.1384 10.9077 30.2597 11.1513C30.3455 11.3223 30.4061 11.5112 30.4505 11.7119C30.5082 11.9776 30.3618 12.3499 30.1626 12.5353C29.948 12.7345 29.7341 12.9342 29.5201 13.1333C29.3199 13.3187 29.1523 13.304 29.1454 13.1003C29.1414 12.9726 29.1385 12.8488 29.1385 12.7315C29.1385 12.7088 29.1365 12.6881 29.1335 12.6679C29.1286 12.6329 29.247 12.4914 29.3983 12.3514C29.5492 12.2118 29.5551 12.0984 29.4126 12.0984C29.2696 12.0984 29.1237 12.1256 29.0872 12.1591C29.0497 12.1926 28.9126 12.0131 28.6829 11.8657C27.9019 11.3633 26.3177 11.6143 25.5909 11.6143C25.5791 11.6143 25.5658 11.6153 25.553 11.6167C25.5318 11.6187 25.5047 11.6226 25.4933 11.6221C25.4864 11.6221 25.4805 11.6221 25.4711 11.6226C23.5847 11.8421 23.9959 13.7295 23.9959 15.1307C23.9959 15.4842 24.1374 15.7303 24.3657 15.9004C24.5841 16.0631 24.7 16.2169 24.5679 16.3407C24.49 16.4132 24.4111 16.4876 24.3292 16.5645C24.2779 16.6143 24.2316 16.6607 24.1867 16.7046C24.1078 16.782 23.9278 16.7416 23.7765 16.6252C23.6241 16.5093 23.5739 16.353 23.6715 16.2637C23.7696 16.174 23.8184 16.1055 23.7809 16.1109C23.7434 16.1163 23.6537 16.1824 23.5798 16.2574C23.5063 16.3323 23.2608 16.2727 23.0177 16.1499C22.567 15.9226 22.0799 15.7594 21.5844 15.6672C21.3167 15.6169 21.0524 15.5839 20.9971 15.5799C20.9419 15.5759 20.8739 15.5784 20.8453 15.5814C20.8167 15.5843 20.5731 15.6016 20.3034 15.6406C18.2133 15.9423 16.4857 17.2553 16.1129 19.4745C15.9892 20.2106 16.0912 20.8817 16.3501 21.4739C16.4591 21.7239 16.5251 21.9635 16.46 22.0281C16.395 22.0937 16.3422 22.2988 16.3422 22.4876C16.3422 22.6774 16.392 22.7795 16.4532 22.7159C16.4901 22.6779 16.5271 22.64 16.5641 22.602C16.6124 22.5522 16.6602 22.5024 16.708 22.4531C16.7874 22.3708 16.9876 22.4802 17.1809 22.6715C17.2228 22.7139 17.2662 22.7553 17.3106 22.7948C17.5113 22.9787 17.5354 23.2647 17.3431 23.4574C17.1972 23.6039 17.0468 23.7543 16.8929 23.9081C16.7007 24.1014 16.3901 24.1004 16.2189 23.8879C15.1678 22.5842 14.7063 20.8215 14.8339 19.1101C14.8606 18.7522 14.723 18.4495 14.4908 18.2577C14.2807 18.0841 14.048 18.02 14.048 17.9776C14.048 17.9347 14.016 17.9327 13.976 17.9727C13.9361 18.0131 13.8242 18.0407 13.7266 18.0501C13.6694 18.0555 13.6117 18.0659 13.552 18.0827C12.8115 18.2912 12.4328 18.7576 12.2484 19.3459C12.167 19.6057 11.9856 19.9834 11.7938 20.1767C11.6044 20.3684 11.4146 20.5588 11.2253 20.7506C11.0335 20.9443 10.8851 21.0163 10.891 20.9113C10.8959 20.8235 10.8984 20.7579 10.8984 20.7205C10.8984 20.6588 10.8915 20.4932 10.8797 20.2486C10.8673 19.9888 11.0103 19.6195 11.2001 19.4243C12.0389 18.5629 12.8726 17.7104 13.7019 16.8653C13.8927 16.671 14.0475 16.3535 14.0475 16.1563C14.0475 15.959 13.8883 15.9517 13.693 16.1415C12.9662 16.8451 12.1049 17.6798 11.1637 18.593C10.9684 18.7823 10.7983 18.7241 10.7835 18.4623C10.7687 18.2005 10.9147 17.8346 11.1099 17.6448C11.9476 16.8298 12.809 15.9911 13.6945 15.1292C13.8898 14.9394 14.0475 14.6101 14.0475 14.3936C14.0475 14.1777 13.8908 14.1579 13.6974 14.3497C12.8178 15.2234 11.9392 16.0946 11.0665 16.9609C10.8747 17.1552 10.7056 17.0896 10.6903 16.818ZM11.7819 24.1063C11.5847 24.3099 11.387 24.5131 11.1898 24.7167C11.0005 24.912 10.8466 24.8735 10.8466 24.6299C10.8466 24.3864 11 24.0299 11.1888 23.8346C11.4087 23.6073 11.6271 23.3815 11.8445 23.1571C12.0339 22.9619 12.1838 23.0156 12.1641 23.278C12.1448 23.5398 11.9713 23.911 11.7819 24.1063ZM12.0536 24.7517C12.0433 24.9484 11.883 25.2645 11.6912 25.4577C11.5083 25.6422 11.3254 25.8261 11.142 26.0105C10.9501 26.2038 10.8042 26.1964 10.8171 25.9942C10.8298 25.7926 10.9945 25.4716 11.1868 25.2793C11.426 25.0402 11.6651 24.801 11.9047 24.5628C11.9333 24.5348 11.9614 24.5072 11.99 24.479C12.0374 24.4327 12.0635 24.555 12.0536 24.7517ZM10.8471 22.4511C10.8471 22.1568 10.8471 21.8624 10.8471 21.5685C10.851 21.5148 10.8555 21.4616 10.859 21.4103C10.8653 21.323 11.0325 21.1026 11.2317 20.9162C11.4053 20.7535 11.5788 20.5903 11.7519 20.4266C11.9501 20.2398 12.0906 20.3093 12.0891 20.581C12.0876 20.7786 12.094 20.9798 12.1039 21.1805C12.1172 21.4527 11.9767 21.8274 11.7829 22.0192C11.5877 22.212 11.3929 22.4043 11.1972 22.5981C11.0034 22.7893 10.8471 22.7238 10.8471 22.4511ZM10.7879 27.3259C10.7786 27.1919 10.7751 27.0538 10.7756 26.9143C10.7766 26.6421 10.9482 26.2654 11.141 26.0731C11.3229 25.8922 11.5048 25.7117 11.6873 25.5303C11.8806 25.3384 12.0299 25.404 12.0354 25.6762C12.0379 25.7856 12.0418 25.8941 12.0482 26.0011C12.0645 26.2733 11.9446 26.6539 11.7593 26.8531C11.5714 27.0538 11.3836 27.255 11.1952 27.4556C11.0083 27.6533 10.8072 27.5976 10.7879 27.3259ZM11.6473 29.0891C11.4624 28.9303 11.3022 28.7499 11.1696 28.5438C11.0222 28.315 11.1065 27.9546 11.3042 27.7677C11.4767 27.605 11.6503 27.4423 11.8243 27.2786C12.0226 27.0918 12.2301 27.1593 12.3494 27.4039C12.5526 27.8205 12.8751 28.0892 13.3805 28.0892C13.3883 28.0892 13.3962 28.0892 13.4041 28.0892C13.4169 28.0892 13.2665 28.2401 13.0673 28.4259C12.8469 28.6311 12.6266 28.8362 12.4067 29.0423C12.2074 29.2267 11.8535 29.2671 11.6473 29.0891ZM30.6176 25.7467C30.6112 26.0189 30.4436 26.3926 30.2478 26.5814C29.8628 26.9527 29.4684 27.3329 29.0611 27.7268C28.8658 27.9156 28.8658 28.0685 29.0616 28.0685C29.2573 28.0685 29.5729 27.9127 29.7661 27.7199C29.9175 27.568 30.0693 27.4167 30.2217 27.2648C30.4145 27.0721 30.5594 27.1095 30.5402 27.3476C30.521 27.5858 30.4362 27.8437 30.3558 27.9235C30.275 28.0034 30.2695 28.0685 30.3425 28.0685C30.4155 28.0685 30.4717 28.1045 30.4678 28.1494C30.4658 28.1765 30.4633 28.2036 30.4604 28.2307C30.1261 31.1116 22.2293 29.9564 20.6342 29.9564C19.1447 29.9564 16.4438 30.3499 14.2408 30.059C13.9711 30.0235 13.909 29.8238 14.0998 29.63C14.1131 29.6172 14.1264 29.6029 14.1397 29.5896C14.331 29.3958 14.4489 29.1828 14.4104 29.1093C14.372 29.0363 14.1802 29.1256 13.9785 29.3085C13.8868 29.3924 13.7946 29.4757 13.7019 29.559C13.4998 29.7409 13.1556 29.8464 12.9382 29.7765C12.7212 29.7059 12.7153 29.4855 12.9175 29.3036C13.1881 29.06 13.4588 28.8165 13.729 28.5729C13.9312 28.3905 14.089 28.208 14.085 28.1651C14.0815 28.1227 14.299 28.0877 14.5711 28.0877C18.9061 28.0877 23.241 28.0877 27.5755 28.0877C28.7628 28.0877 29.0818 27.3629 29.1528 26.4976C29.1749 26.2259 29.2085 25.9676 29.2548 25.9222L29.3396 25.8399C29.6537 25.5238 29.9668 25.2083 30.2804 24.8922C30.4722 24.6989 30.629 24.763 30.627 25.0357C30.6265 25.2733 30.6231 25.51 30.6176 25.7467Z'
        fill={color}
      />
    </svg>
  </a>
);

export default Instagram;
