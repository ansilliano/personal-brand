/* eslint-disable max-len */
import React from 'react';

const Mail = ({ size, color = '#660813' }) => (
  <a href='mailto:illianoangela@gmail.com'>
    <svg
      width={size}
      height={size}
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M32.3702 11.7163C28.1459 11.7163 23.923 11.7163 19.6982 11.7163C17.2357 11.7163 14.7727 11.7163 12.3097 11.7163C11.389 11.7163 10.195 11.5276 9.3383 11.956C9.11146 12.0692 8.9081 12.2353 8.86116 12.2832C8.81377 12.3301 8.75672 12.4235 8.74429 12.4866C8.73233 12.55 8.76178 12.8054 8.76178 13.0598C8.76178 15.2988 8.76178 17.5377 8.76178 19.777C8.76178 21.3971 8.76178 23.0185 8.76178 24.6391C8.76178 25.3343 8.56347 26.583 8.76914 27.2272C9.261 28.7736 11.9099 28.2325 13.1563 28.2325C16.6771 28.2325 20.1984 28.2325 23.7196 28.2325C26.4536 28.2325 29.1885 28.2325 31.9225 28.2325C33.8398 28.2325 33.7556 26.8734 33.7556 25.3375C33.7556 24.5802 33.7556 23.8224 33.7556 23.065C33.7556 22.811 33.7602 22.4977 33.7606 22.3652C33.7616 22.2451 33.7616 22.1255 33.7616 22.1255C33.757 21.5825 33.756 21.0359 33.7556 20.4888C33.7556 20.2349 33.7597 19.8226 33.7606 19.5686C33.7616 19.2792 33.7616 18.9603 33.7616 18.9603C33.7584 18.8177 33.757 18.6741 33.7565 18.5292C33.7551 18.2909 33.7602 17.9748 33.7606 17.8216C33.7616 17.6817 33.7616 17.5427 33.7616 17.5427C33.7575 17.2543 33.7565 16.9639 33.7556 16.6717C33.7556 16.4173 33.7602 16.1053 33.7606 15.9724C33.7616 15.8403 33.7575 15.7078 33.7565 15.6769C33.7556 15.6581 33.7556 15.6393 33.7556 15.6199C33.756 14.1867 34.4168 11.7163 32.3702 11.7163ZM32.2267 27.5497C29.7094 27.5497 27.1925 27.5497 24.6753 27.5497C21.0855 27.5497 17.4956 27.5497 13.9068 27.5497C12.8522 27.5497 11.798 27.5497 10.7439 27.5497C10.6611 27.5497 10.587 27.5415 10.5189 27.5281C10.3961 27.5033 10.4527 27.3197 10.6381 27.1453C11.0039 26.8011 11.372 26.4551 11.7424 26.1059C11.9273 25.932 12.0778 25.7567 12.0778 25.7143V25.6389C12.0778 25.6389 12.0778 25.5046 12.0778 25.3394C12.0778 25.1737 11.937 25.1898 11.7635 25.3757C11.2837 25.8901 10.8019 26.4031 10.3193 26.9157C10.1449 27.1007 9.86467 27.0901 9.78645 26.8485C9.67694 26.5066 9.66544 26.0824 9.66544 25.6725C9.66544 21.4537 9.66544 17.2344 9.66544 13.0152C9.66544 12.7612 9.8412 12.4368 10.091 12.3904C10.2801 12.3559 10.495 12.3462 10.7094 12.349C10.9639 12.3522 11.0209 12.5123 10.8369 12.6885C10.5627 12.9517 10.2852 13.2181 10.0036 13.4877C9.8205 13.6635 9.67142 13.8167 9.67142 13.8291C9.67142 13.842 9.81958 13.7095 10.0032 13.5338C10.2995 13.2489 10.5907 12.9692 10.8811 12.6904C11.0642 12.5146 11.3232 12.3798 11.459 12.3885C11.5533 12.395 11.637 12.3987 11.7047 12.3987C13.183 12.3987 14.6618 12.3987 16.1402 12.3987C19.798 12.3987 23.4564 12.3987 27.1152 12.3987C27.925 12.3987 32.8538 11.7964 32.8538 13.0865C32.8538 14.0514 32.8538 15.0158 32.8538 15.9816C32.8538 16.2355 32.7075 16.5861 32.5266 16.7656C32.3987 16.8917 32.2704 17.0187 32.142 17.1452C31.9607 17.3242 31.8066 17.263 31.778 17.0104C31.6575 15.9521 31.2738 15.1902 30.2293 15.9305C29.2585 16.6184 28.2876 17.3062 27.3168 17.9937C26.5737 18.52 25.4666 18.9953 25.6728 20.0614C25.7639 20.5316 26.5079 21.0939 27.0909 21.5186C27.296 21.6677 27.3159 21.9355 27.1364 22.1153C27.1001 22.1517 27.0637 22.1876 27.0273 22.2239C26.847 22.4038 26.5374 22.425 26.3358 22.2704C26.0179 22.0261 25.7142 21.7873 25.4455 21.5517C24.9168 21.0888 24.4705 20.7617 23.7095 20.8118C23.196 20.845 22.7258 21.2448 22.3333 21.5227C21.7595 21.9276 21.321 21.9612 20.9281 21.8218C20.6884 21.7371 20.6695 21.4753 20.8554 21.3023C20.8954 21.2655 20.935 21.2282 20.975 21.1914C21.1609 21.0184 21.1876 20.9025 21.0486 20.9706C20.9645 21.0115 20.8863 21.0626 20.8168 21.1242C20.8168 21.1242 20.7174 21.2122 20.595 21.3212C20.4721 21.4302 20.2351 21.4197 20.0682 21.2931C19.9692 21.2181 19.8685 21.1413 19.7649 21.0667C19.7346 21.041 19.6973 21.0171 19.6458 20.9968C18.206 20.4327 17.4229 21.3745 16.4144 22.2695C15.2816 23.2743 13.6004 24.2852 12.9074 25.6633C12.8282 25.8202 12.9346 25.9757 13.0813 26.0337C13.8934 26.3576 14.746 26.2425 15.6156 26.2425C17.5044 26.2425 19.3936 26.2425 21.2828 26.2425C23.1716 26.2425 25.0608 26.2425 26.9496 26.2425C27.8583 26.2425 28.6571 26.3364 29.5009 26.0019C29.7002 25.9232 29.8028 25.7134 29.7057 25.5238C29.6307 25.3789 29.5437 25.2358 29.448 25.0955C29.304 24.8862 29.3146 24.5806 29.4927 24.3989C29.5345 24.3552 29.5768 24.3124 29.6178 24.2696C29.7954 24.0874 29.9923 23.9866 30.0586 24.0446C30.1253 24.1021 30.1943 24.1702 30.2192 24.1913C30.2435 24.2125 30.2882 24.2461 30.3218 24.2632C30.3544 24.2806 30.5628 24.4053 30.815 24.4394C31.5779 24.5438 31.8024 23.5454 31.8411 22.4429C31.8507 22.1885 31.991 21.8361 32.1687 21.6543C32.2906 21.5296 32.4111 21.4063 32.5326 21.2812C32.7112 21.0994 32.8542 20.9936 32.8542 21.0447C32.8542 21.075 32.8542 21.1063 32.8542 21.1371C32.8542 21.294 32.8869 21.8255 32.9145 22.5189C32.9242 22.7728 32.9016 23.008 32.8662 23.0457C32.8303 23.0825 32.8317 23.1395 32.8699 23.1722C32.908 23.2053 32.9444 23.4386 32.9481 23.6926C32.972 25.4884 32.8731 27.5497 32.2267 27.5497ZM32.5395 18.8536C32.3831 19.0206 32.2271 19.1881 32.0707 19.3556C31.8972 19.541 31.7675 19.4849 31.7822 19.2314C31.7913 19.0846 31.7996 18.9217 31.8075 18.7506C31.818 18.4965 31.963 18.14 32.136 17.9546C32.2713 17.8096 32.4056 17.6651 32.5395 17.5211C32.713 17.3352 32.8533 17.3904 32.8533 17.6444C32.8533 17.7825 32.8533 17.9201 32.8533 18.0571C32.8529 18.3107 32.713 18.6672 32.5395 18.8536ZM32.8529 19.4453C32.8529 19.6841 32.7079 20.0237 32.529 20.2036C32.396 20.3375 32.2634 20.4713 32.1314 20.6039C31.9524 20.7843 31.7969 20.7488 31.7817 20.5261C31.767 20.303 31.9014 19.9758 32.0799 19.7954C32.2322 19.6418 32.3812 19.4899 32.5294 19.3413C32.7075 19.161 32.8529 19.2074 32.8529 19.4453ZM31.755 19.9013C31.755 20.0099 31.7527 20.0545 31.75 20.0002C31.7486 19.9638 31.7481 19.9312 31.7481 19.9022C31.7481 19.8736 31.749 19.8401 31.75 19.8028C31.7532 19.748 31.755 19.7922 31.755 19.9013ZM30.804 23.2734C30.8178 23.527 30.7897 23.5605 30.5983 23.3931C29.5115 22.4425 28.4229 21.491 27.3356 20.5394C26.7568 20.0333 26.3169 19.559 27.1162 18.993C27.9494 18.4027 28.7823 17.8128 29.6155 17.222C29.9578 16.9795 30.8459 16.0404 30.8459 16.6994C30.8459 17.4857 30.8459 18.2725 30.8459 19.0588C30.8459 20.1268 30.8459 21.1956 30.8459 22.263C30.8459 22.46 30.7842 22.9228 30.804 23.2734ZM28.2766 25.1567C28.5213 25.3711 29.073 25.5602 28.612 25.5602C27.3563 25.5602 26.1002 25.5602 24.8441 25.5602C21.4365 25.5602 18.0284 25.5602 14.6199 25.5602C13.2318 25.5602 14.3793 25.0371 15.0888 24.4081C15.79 23.7855 17.4156 21.733 18.6482 21.572C18.9004 21.5397 19.2689 21.7343 19.4719 21.8871C20.1459 22.3933 20.9368 22.95 21.7788 22.6132C22.6144 22.2778 23.7173 21.1666 24.5713 21.9143C25.221 22.4825 25.8702 23.0512 26.5199 23.6194C27.1056 24.132 27.6908 24.6446 28.2766 25.1567ZM27.6844 22.7296C27.7106 22.702 27.7355 22.6749 27.7608 22.6472C27.9343 22.4618 28.2237 22.4416 28.4072 22.6017C28.5903 22.7623 28.5982 23.042 28.4234 23.2265C28.4054 23.2459 28.387 23.2651 28.369 23.284C28.1942 23.4685 27.903 23.4901 27.7143 23.3379C27.5256 23.1865 27.5114 22.915 27.6844 22.7296ZM28.4049 23.9314C28.2821 23.82 28.3253 23.5854 28.5043 23.405C28.5237 23.3857 28.543 23.3664 28.5619 23.3471C28.7413 23.1658 28.9874 23.1092 29.1126 23.2187C29.2373 23.3282 29.1945 23.5633 29.0155 23.7442C28.993 23.7667 28.9699 23.7892 28.9483 23.8113C28.7694 23.9921 28.5278 24.0432 28.4049 23.9314Z'
        fill={color}
      />
      <path
        d='M16.9277 19.8847C17.0077 19.4605 16.8568 19.1311 16.6033 18.8554C16.4316 18.6682 16.4077 18.4045 16.5885 18.226C16.6474 18.1685 16.7063 18.1105 16.7652 18.0525C16.9461 17.8735 17.2608 17.8482 17.4678 17.995C17.6592 18.1308 17.8511 18.2665 18.0425 18.4022C18.2495 18.549 18.2721 18.814 18.0918 18.9935C16.8131 20.2657 15.585 21.4877 14.409 22.6574C14.2286 22.8368 14.0827 23.0963 14.0827 23.2371V23.4925C14.0827 23.5467 14.0864 23.5969 14.0934 23.6415C14.1053 23.723 14.2751 23.6378 14.4518 23.4561C15.0113 22.8773 15.5717 22.2994 16.1289 21.7307C16.9258 20.9071 17.7154 20.0931 18.5003 19.2856C18.6774 19.1034 18.9885 19.0749 19.196 19.2217C19.5346 19.4614 19.8738 19.7021 20.2124 19.9413C20.2322 19.9555 20.2561 19.9689 20.2819 19.9809C22.0161 20.6895 23.3761 19.184 24.6852 18.2559C26.2882 17.1203 28.764 15.9866 29.9019 14.35C30.0197 14.1807 29.9925 13.9727 29.78 13.8959C28.9725 13.6041 28.1245 13.71 27.2714 13.71C25.374 13.71 23.4764 13.71 21.579 13.71C19.6354 13.71 17.6919 13.71 15.7484 13.71C14.8405 13.71 13.8794 13.5742 13.0176 13.8857C12.8193 13.9575 12.5285 14.1632 12.6978 14.4075C13.2076 15.1414 14.0399 15.7027 14.8594 16.2213C15.0743 16.357 15.1024 16.6114 14.9215 16.789C14.8641 16.8457 14.806 16.9027 14.7485 16.9593C14.5677 17.1378 14.2525 17.1627 14.0455 17.0164C13.4671 16.6059 12.8887 16.196 12.3095 15.7855C12.2869 15.7699 12.2625 15.757 12.2368 15.7474C12.2074 15.7336 12.1811 15.7216 12.1567 15.7124C12.1121 15.694 12.0748 15.5219 12.0748 15.3245C12.0748 15.1276 11.9271 15.1115 11.7445 15.2891C11.7233 15.3093 11.7026 15.3296 11.6814 15.3498C11.4992 15.5265 11.3414 15.6747 11.3285 15.6806C11.3166 15.6866 11.4541 15.5486 11.6364 15.3715C11.6722 15.3365 11.7081 15.301 11.7445 15.2656C11.9267 15.0885 11.9207 15.0825 11.7357 15.2564C11.6745 15.3139 11.6138 15.3719 11.5526 15.4303C11.3695 15.6061 11.1896 15.775 11.1537 15.8095C11.1182 15.8444 10.9452 16.0193 10.7626 16.196C10.4999 16.4509 10.2325 16.7099 9.95922 16.9736C9.59389 17.3481 9.98637 16.9731 10.7037 16.2769C10.8863 16.0998 11.0248 15.9691 11.0138 15.9853C11.0023 16.0009 10.8463 16.1583 10.6637 16.3354C10.446 16.5461 10.2242 16.7614 9.99833 16.981C9.81613 17.1581 9.66797 17.5068 9.66797 17.7613V17.8584C9.66797 18.1123 9.81153 18.1708 9.98913 17.9881C10.112 17.863 10.2339 17.7374 10.3568 17.6122C10.5344 17.43 10.6614 17.488 10.6554 17.7424C10.6499 17.96 10.6517 18.1804 10.6586 18.3971C10.666 18.6512 10.533 19.0027 10.354 19.1835C10.233 19.3054 10.1124 19.4273 9.99097 19.5497C9.81245 19.7305 9.66797 19.9155 9.66797 19.962C9.66797 20.0094 9.81935 19.9068 10.0048 19.7333C10.1221 19.6234 10.2394 19.5129 10.3568 19.402C10.5417 19.2277 10.7046 19.2921 10.723 19.5456C10.746 19.8631 10.7658 20.123 10.7658 20.2823C10.7658 20.3494 10.7607 20.4589 10.7538 20.5988C10.7451 20.7732 10.591 21.0594 10.4101 21.2384C10.2721 21.3745 10.1336 21.5112 9.99557 21.6483C9.81429 21.8273 9.66843 22.1775 9.66843 22.4319V22.944C9.66843 23.198 9.81199 23.2555 9.98867 23.0729C10.1212 22.9353 10.2532 22.7986 10.3853 22.662C10.5624 22.4798 10.7078 22.5382 10.723 22.7917C10.7235 22.8051 10.7244 22.8184 10.7253 22.8317C10.7414 23.0853 10.6241 23.4377 10.4474 23.6203C10.2942 23.7782 10.141 23.9365 9.98821 24.0938C9.81153 24.276 9.66843 24.5677 9.66843 24.744C9.66843 24.9202 9.81429 24.9179 9.99373 24.7375C10.2413 24.4909 10.4888 24.2433 10.7368 23.9967C10.7598 23.9742 10.7828 23.9508 10.8054 23.9287C10.8436 23.8909 10.9061 23.9917 10.9706 24.1421C11.0354 24.2931 10.9733 24.5452 10.7939 24.726C10.5265 24.9947 10.2592 25.2634 9.99235 25.5326C9.81291 25.713 9.66797 25.8749 9.66797 25.8943C9.66797 25.9136 9.81383 25.7838 9.99373 25.6044C10.2721 25.3265 10.5523 25.049 10.8316 24.7711C11.0124 24.5921 11.3189 24.6321 11.5715 24.6073C11.761 24.5884 11.9902 24.4707 12.2676 24.2245C13.203 23.394 14.1384 22.5644 15.0743 21.7339C15.5229 21.3368 16.8006 20.5578 16.9277 19.8847ZM16.2182 17.6669C16.1592 17.7281 16.0999 17.7889 16.041 17.8496C15.8639 18.0318 15.6237 18.1193 15.505 18.0419C15.4318 17.9941 15.3605 17.9463 15.2929 17.8989C15.2643 17.8791 15.2367 17.8593 15.2086 17.8395C15.1622 17.8068 15.2689 17.6324 15.4461 17.4502C15.5096 17.3853 15.5721 17.3214 15.6347 17.257C15.8123 17.0748 15.9816 16.9441 16.012 16.9648C16.0304 16.9773 16.0488 16.9897 16.0668 17.0021C16.1455 17.0578 16.2241 17.1134 16.3028 17.1691C16.4339 17.2611 16.3958 17.4838 16.2182 17.6669ZM14.1255 14.6905C13.9401 14.517 14.0054 14.3233 14.2581 14.2961C15.591 14.1513 17.1651 14.3909 18.3696 14.3909C21.2067 14.3909 24.0442 14.3909 26.8817 14.3909C27.4306 14.3909 27.9809 14.3909 28.5303 14.3909C28.7847 14.3909 28.7903 14.4443 28.5782 14.5828C28.1585 14.8557 27.5834 15.3438 27.317 15.5329C26.1263 16.3763 24.935 17.2202 23.7442 18.0636C23.0683 18.5421 22.2111 19.4642 21.3056 19.4642C21.0512 19.4642 20.6868 19.264 20.4797 19.1168C19.4836 18.4109 18.4865 17.7051 17.4904 16.9984C16.5048 16.2995 15.0918 15.5904 14.1255 14.6905ZM11.6704 23.572C11.6704 23.4888 11.6704 23.4069 11.6704 23.3245C11.6704 23.1878 11.675 22.9145 11.6755 22.7153C11.6764 22.5345 11.6764 22.3537 11.6764 22.3537C11.6731 22.1696 11.6718 21.9833 11.6709 21.7965C11.6699 21.5425 11.675 21.2503 11.6755 21.1445C11.6764 21.0488 11.6764 20.9527 11.6764 20.9527C11.7049 20.2155 11.8369 17.851 11.7937 16.8379C11.7827 16.5839 11.8981 16.5043 12.1052 16.652C13.2614 17.4709 14.4177 18.2909 15.574 19.1108C16.4689 19.7453 15.6214 20.2859 15.1047 20.7447C14.2931 21.4643 13.4823 22.1843 12.6707 22.9044C12.3647 23.175 11.6704 24.0777 11.6704 23.572Z'
        fill={color}
      />
      <path
        d='M30.0408 15.8007L30.1236 15.7423C30.3307 15.596 30.6532 15.3397 30.8437 15.1718C31.2233 14.8368 31.6029 14.5019 31.9811 14.1687C32.1716 14.0008 32.2641 13.8255 32.178 13.808C32.0906 13.79 31.8702 13.9336 31.688 14.1103C31.1244 14.6569 30.5607 15.2022 29.9966 15.7469C29.8135 15.9241 29.8328 15.9475 30.0408 15.8007Z'
        fill={color}
      />
      <path
        d='M10.0018 15.821C10.5746 15.2633 11.1585 14.6942 11.7506 14.1103C11.9319 13.9317 12.0778 13.5922 12.0778 13.3525C12.0778 13.1118 11.9319 13.0617 11.7516 13.2411C11.1659 13.8227 10.5811 14.402 9.99856 14.9813C9.81773 15.1602 9.67188 15.4925 9.67188 15.7239C9.67188 15.9544 9.82003 15.9986 10.0018 15.821Z'
        fill={color}
      />
      <path
        d='M25.3279 19.1371C25.5069 19.011 25.8 18.7662 25.985 18.591C27.588 17.0656 29.059 15.6614 30.3749 14.3975C30.4748 14.3008 30.5792 14.1982 30.6892 14.0924C30.8626 13.924 30.9901 13.7869 30.9735 13.7869C30.9574 13.7869 30.8461 13.8807 30.7241 13.9963C30.6022 14.1113 30.5999 14.1113 30.7186 13.9958C30.8378 13.8807 30.9013 13.7869 30.8608 13.7869C30.8203 13.7869 30.6395 13.9305 30.4564 14.1071C28.9959 15.522 27.5503 16.9299 26.1331 18.3213C25.9514 18.4994 25.9514 18.4989 26.1327 18.3208C28.0016 16.4818 30.5783 13.9572 30.1347 14.3524C28.5 15.9508 26.902 17.5124 25.3325 19.0455C25.1517 19.2227 25.149 19.2641 25.3279 19.1371Z'
        fill={color}
      />
      <path
        d='M31.0736 24.8838C30.9346 25.026 30.7966 25.1682 30.6577 25.3104C30.4801 25.4926 30.4271 25.6393 30.5394 25.6393C30.6516 25.6393 30.78 25.6025 30.8265 25.557L30.9111 25.4742C31.0409 25.3435 31.1711 25.2128 31.3023 25.0812C31.4812 24.9008 31.5747 24.7099 31.5111 24.6542C31.4467 24.599 31.2507 24.7021 31.0736 24.8838Z'
        fill={color}
      />
    </svg>
  </a>
);

export default Mail;
