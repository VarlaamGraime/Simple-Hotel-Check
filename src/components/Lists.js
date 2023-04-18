import React, { useRef } from 'react';
import styleLists from '../style/styleLists.css'
import SimpleSlider from './SimpleSlider';
import axios from 'axios';

const Lists = () => {
 


    return (
        <div className='cardLists'>
            <div className='flexHead'>
                <div className='blockLists'>
                        <h1 className='textLists'>Отели </h1>
                        <h1 className='textLists'>
                            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.33334L9.66667 10L1 18.6667" stroke="#A7A7A7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </h1>
                        <h1 className='textLists'>Москва </h1>
                </div>
                <h2 className='textDateLists'>07 июля 2020</h2>  
            </div>
            <div className='sliderWrapper'>
            <SimpleSlider/>
            </div>

            <div className='blockFavoriteAdd'>
                <h4 className='textFavoriteAdd'>Добавлено в избранное: 3 отеля</h4>    
                <div className='flexHead'>
                    <div>
                        <div className='elipseLists'></div>
                        <div className='iconRel'>
                            <svg className='houseIcon' width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6051 2.00708C9.60977 2.94157 6.85898 5.52739 4.49375 7.75044L0.195312 11.7931L0.200781 20.1281L0.208984 28.4631L0.269141 28.5821C0.301953 28.6489 0.38125 28.7504 0.444141 28.8056C0.671094 29.0145 0.378516 29 4.7125 29H8.61719L8.62266 25.3056C8.63086 21.6315 8.63086 21.614 8.68828 21.4834C8.75937 21.3151 8.89609 21.17 9.05469 21.0946C9.17773 21.0336 9.19687 21.0336 12.4016 21.0249C15.9672 21.0162 15.8141 21.0104 16.0164 21.199C16.1586 21.3325 16.2379 21.4805 16.2707 21.6721C16.2926 21.7882 16.3008 22.9897 16.3008 25.4217V29L20.3586 28.9942L24.4191 28.9855L24.5012 28.9014C24.5477 28.8549 24.6242 28.7185 24.6734 28.5966L24.7637 28.3761L24.7691 20.0759L24.7746 11.7757L18.6496 6.04398C15.177 2.79356 12.5 0.309317 12.4699 0.309317C12.4344 0.306416 11.7945 0.889748 10.6051 2.00708Z" fill="#41522E"/>
                            </svg>
                            <svg className='roofIcon' width="35" height="19" viewBox="0 0 35 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9359 1.33499C15.1648 2.06053 12.0586 4.98008 9.03711 7.82127C6.01289 10.6596 3.11719 13.3847 2.59766 13.8722C2.07812 14.3598 1.33984 15.0534 0.957031 15.4104C0.574219 15.7702 0.202344 16.1214 0.13125 16.1939L0 16.3245L0.902344 17.3983C1.39727 17.9875 1.82109 18.4692 1.84023 18.4692C1.86211 18.4663 3.48906 16.9572 5.45781 15.1143C15.7883 5.44442 17.4562 3.88887 17.4754 3.89468C17.4863 3.90048 18.7605 5.09326 20.3082 6.54723C21.8531 8.0012 25.3449 11.2806 28.0629 13.8374C30.7809 16.3942 33.0176 18.4866 33.0312 18.4866C33.0449 18.4866 33.0641 18.4721 33.0723 18.4576C33.0859 18.4344 33.1023 18.4373 33.1297 18.4605C33.1816 18.504 33.1023 18.5911 34.0566 17.4419C34.475 16.9398 34.8578 16.4813 34.9098 16.4232L35.0027 16.3187L32.7113 14.1741C31.4508 12.9929 28.4895 10.2184 26.127 8.00991C23.7672 5.79848 20.8797 3.09659 19.7094 2.00248L17.5875 0.0145172H17.4645H17.3414L15.9359 1.33499Z" fill="#41522E"/>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 className='nameHotel'>Moscow Marriott Grand Hotel</h3>
                        <h4 className='dateHotel'>7 июля 2020 - 1 день</h4>
                        <div className='starsRow'>
                                <svg className='starslists' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.65985 2.01548C7.19357 3.1303 6.62617 4.48729 6.39865 5.03215C6.17254 5.57553 5.98153 6.02589 5.98153 6.02589C5.98153 6.02589 5.54896 6.0628 5.0237 6.10267C4.49984 6.14254 3.54342 6.21489 2.89878 6.26362C2.25413 6.31382 1.37214 6.38027 0.939574 6.41276C0.507005 6.44524 0.117973 6.47625 0.0758401 6.48068L0 6.48954L0.0688178 6.55894C0.108142 6.59585 0.540712 7.00191 1.02946 7.46113C1.51961 7.92035 2.16144 8.52132 2.45638 8.79744C4.23581 10.466 4.64731 10.8514 4.66416 10.8647C4.68804 10.8839 4.76809 10.528 3.90295 14.2091C3.54342 15.7389 3.2527 16.9999 3.2527 16.9999C3.2527 16.9999 4.47316 16.2631 5.96047 15.3505C7.44637 14.438 8.67245 13.6938 8.68509 13.6968C8.69633 13.6997 9.24406 14.0541 9.89994 14.4823C10.5572 14.912 11.5361 15.5513 12.0768 15.9043C12.6175 16.2572 13.2158 16.6485 13.4068 16.7725C13.5964 16.898 13.7622 16.9999 13.7622 16.9999C13.7622 16.9999 13.7678 16.9748 13.7622 16.9438C13.7537 16.8936 13.1849 14.1427 12.6723 11.6753C12.5501 11.0817 12.449 10.5856 12.449 10.5723C12.449 10.5531 13.3605 9.74098 16.6581 6.81882C17.0205 6.4984 17.0247 6.49397 16.9811 6.48363C16.9559 6.47773 15.5613 6.33007 13.8815 6.15435C12.2018 5.97864 10.8142 5.8295 10.7974 5.82212C10.7763 5.81326 10.7103 5.65822 10.5179 5.16356C10.3803 4.80623 9.93926 3.66778 9.53899 2.6327C9.13873 1.59761 8.74689 0.583193 8.66824 0.380901C8.58959 0.177132 8.52218 0.00732422 8.51656 -5.91278e-05C8.51234 -0.00596619 8.12612 0.90066 7.65985 2.01548Z" fill="#CDBC1E"/>
                                </svg>
                                <svg className='starslists' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.65985 2.01548C7.19357 3.1303 6.62617 4.48729 6.39865 5.03215C6.17254 5.57553 5.98153 6.02589 5.98153 6.02589C5.98153 6.02589 5.54896 6.0628 5.0237 6.10267C4.49984 6.14254 3.54342 6.21489 2.89878 6.26362C2.25413 6.31382 1.37214 6.38027 0.939574 6.41276C0.507005 6.44524 0.117973 6.47625 0.0758401 6.48068L0 6.48954L0.0688178 6.55894C0.108142 6.59585 0.540712 7.00191 1.02946 7.46113C1.51961 7.92035 2.16144 8.52132 2.45638 8.79744C4.23581 10.466 4.64731 10.8514 4.66416 10.8647C4.68804 10.8839 4.76809 10.528 3.90295 14.2091C3.54342 15.7389 3.2527 16.9999 3.2527 16.9999C3.2527 16.9999 4.47316 16.2631 5.96047 15.3505C7.44637 14.438 8.67245 13.6938 8.68509 13.6968C8.69633 13.6997 9.24406 14.0541 9.89994 14.4823C10.5572 14.912 11.5361 15.5513 12.0768 15.9043C12.6175 16.2572 13.2158 16.6485 13.4068 16.7725C13.5964 16.898 13.7622 16.9999 13.7622 16.9999C13.7622 16.9999 13.7678 16.9748 13.7622 16.9438C13.7537 16.8936 13.1849 14.1427 12.6723 11.6753C12.5501 11.0817 12.449 10.5856 12.449 10.5723C12.449 10.5531 13.3605 9.74098 16.6581 6.81882C17.0205 6.4984 17.0247 6.49397 16.9811 6.48363C16.9559 6.47773 15.5613 6.33007 13.8815 6.15435C12.2018 5.97864 10.8142 5.8295 10.7974 5.82212C10.7763 5.81326 10.7103 5.65822 10.5179 5.16356C10.3803 4.80623 9.93926 3.66778 9.53899 2.6327C9.13873 1.59761 8.74689 0.583193 8.66824 0.380901C8.58959 0.177132 8.52218 0.00732422 8.51656 -5.91278e-05C8.51234 -0.00596619 8.12612 0.90066 7.65985 2.01548Z" fill="#CDBC1E"/>
                                </svg>
                                <svg className='starslists' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.65985 2.01548C7.19357 3.1303 6.62617 4.48729 6.39865 5.03215C6.17254 5.57553 5.98153 6.02589 5.98153 6.02589C5.98153 6.02589 5.54896 6.0628 5.0237 6.10267C4.49984 6.14254 3.54342 6.21489 2.89878 6.26362C2.25413 6.31382 1.37214 6.38027 0.939574 6.41276C0.507005 6.44524 0.117973 6.47625 0.0758401 6.48068L0 6.48954L0.0688178 6.55894C0.108142 6.59585 0.540712 7.00191 1.02946 7.46113C1.51961 7.92035 2.16144 8.52132 2.45638 8.79744C4.23581 10.466 4.64731 10.8514 4.66416 10.8647C4.68804 10.8839 4.76809 10.528 3.90295 14.2091C3.54342 15.7389 3.2527 16.9999 3.2527 16.9999C3.2527 16.9999 4.47316 16.2631 5.96047 15.3505C7.44637 14.438 8.67245 13.6938 8.68509 13.6968C8.69633 13.6997 9.24406 14.0541 9.89994 14.4823C10.5572 14.912 11.5361 15.5513 12.0768 15.9043C12.6175 16.2572 13.2158 16.6485 13.4068 16.7725C13.5964 16.898 13.7622 16.9999 13.7622 16.9999C13.7622 16.9999 13.7678 16.9748 13.7622 16.9438C13.7537 16.8936 13.1849 14.1427 12.6723 11.6753C12.5501 11.0817 12.449 10.5856 12.449 10.5723C12.449 10.5531 13.3605 9.74098 16.6581 6.81882C17.0205 6.4984 17.0247 6.49397 16.9811 6.48363C16.9559 6.47773 15.5613 6.33007 13.8815 6.15435C12.2018 5.97864 10.8142 5.8295 10.7974 5.82212C10.7763 5.81326 10.7103 5.65822 10.5179 5.16356C10.3803 4.80623 9.93926 3.66778 9.53899 2.6327C9.13873 1.59761 8.74689 0.583193 8.66824 0.380901C8.58959 0.177132 8.52218 0.00732422 8.51656 -5.91278e-05C8.51234 -0.00596619 8.12612 0.90066 7.65985 2.01548Z" fill="#CDBC1E"/>
                                </svg>
                                <svg className='starslists' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.65985 2.01554C7.19357 3.13037 6.62617 4.48735 6.39865 5.03221C6.17254 5.57559 5.98153 6.02595 5.98153 6.02595C5.98153 6.02595 5.54896 6.06287 5.0237 6.10273C4.49984 6.1426 3.54342 6.21495 2.89878 6.26368C2.25413 6.31388 1.37214 6.38033 0.939574 6.41282C0.507005 6.4453 0.117973 6.47631 0.0758401 6.48074L0 6.4896L0.0688178 6.559C0.108142 6.59591 0.540712 7.00197 1.02946 7.46119C1.51961 7.92041 2.16144 8.52138 2.45638 8.7975C4.23581 10.466 4.64731 10.8514 4.66416 10.8647C4.68804 10.8839 4.76809 10.5281 3.90295 14.2092C3.54342 15.7389 3.2527 16.9999 3.2527 16.9999C3.2527 16.9999 4.47316 16.2631 5.96047 15.3506C7.44637 14.4381 8.67245 13.6939 8.68509 13.6968C8.69633 13.6998 9.24406 14.0541 9.89994 14.4824C10.5572 14.912 11.5361 15.5514 12.0768 15.9043C12.6175 16.2572 13.2158 16.6485 13.4068 16.7725C13.5964 16.8981 13.7622 16.9999 13.7622 16.9999C13.7622 16.9999 13.7678 16.9748 13.7622 16.9438C13.7537 16.8936 13.1849 14.1427 12.6723 11.6754C12.5501 11.0818 12.449 10.5856 12.449 10.5724C12.449 10.5532 13.3605 9.74104 16.6581 6.81888C17.0205 6.49846 17.0247 6.49403 16.9811 6.48369C16.9559 6.47779 15.5613 6.33013 13.8815 6.15441C12.2018 5.9787 10.8142 5.82957 10.7974 5.82218C10.7763 5.81332 10.7103 5.65828 10.5179 5.16362C10.3803 4.80629 9.93926 3.66784 9.53899 2.63276C9.13873 1.59767 8.74689 0.583254 8.66824 0.380962C8.58959 0.177193 8.52218 0.00738525 8.51656 1.90735e-06C8.51234 -0.00590515 8.12612 0.900721 7.65985 2.01554Z" fill="#6C6845"/>
                                    <path d="M7.65985 2.01554C7.19357 3.13037 6.62617 4.48735 6.39865 5.03221C6.17254 5.57559 5.98153 6.02595 5.98153 6.02595C5.98153 6.02595 5.54896 6.06287 5.0237 6.10273C4.49984 6.1426 3.54342 6.21495 2.89878 6.26368C2.25413 6.31388 1.37214 6.38033 0.939574 6.41282C0.507005 6.4453 0.117973 6.47631 0.0758401 6.48074L0 6.4896L0.0688178 6.559C0.108142 6.59591 0.540712 7.00197 1.02946 7.46119C1.51961 7.92041 2.16144 8.52138 2.45638 8.7975C4.23581 10.466 4.64731 10.8514 4.66416 10.8647C4.68804 10.8839 4.76809 10.5281 3.90295 14.2092C3.54342 15.7389 3.2527 16.9999 3.2527 16.9999C3.2527 16.9999 4.47316 16.2631 5.96047 15.3506C7.44637 14.4381 8.67245 13.6939 8.68509 13.6968C8.69633 13.6998 9.24406 14.0541 9.89994 14.4824C10.5572 14.912 11.5361 15.5514 12.0768 15.9043C12.6175 16.2572 13.2158 16.6485 13.4068 16.7725C13.5964 16.8981 13.7622 16.9999 13.7622 16.9999C13.7622 16.9999 13.7678 16.9748 13.7622 16.9438C13.7537 16.8936 13.1849 14.1427 12.6723 11.6754C12.5501 11.0818 12.449 10.5856 12.449 10.5724C12.449 10.5532 13.3605 9.74104 16.6581 6.81888C17.0205 6.49846 17.0247 6.49403 16.9811 6.48369C16.9559 6.47779 15.5613 6.33013 13.8815 6.15441C12.2018 5.9787 10.8142 5.82957 10.7974 5.82218C10.7763 5.81332 10.7103 5.65828 10.5179 5.16362C10.3803 4.80629 9.93926 3.66784 9.53899 2.63276C9.13873 1.59767 8.74689 0.583254 8.66824 0.380962C8.58959 0.177193 8.52218 0.00738525 8.51656 1.90735e-06C8.51234 -0.00590515 8.12612 0.900721 7.65985 2.01554Z" fill="white" fill-opacity="0.6"/>
                                </svg>
                                <svg className='starslists' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.65985 2.01554C7.19357 3.13037 6.62617 4.48735 6.39865 5.03221C6.17254 5.57559 5.98153 6.02595 5.98153 6.02595C5.98153 6.02595 5.54896 6.06287 5.0237 6.10273C4.49984 6.1426 3.54342 6.21495 2.89878 6.26368C2.25413 6.31388 1.37214 6.38033 0.939574 6.41282C0.507005 6.4453 0.117973 6.47631 0.0758401 6.48074L0 6.4896L0.0688178 6.559C0.108142 6.59591 0.540712 7.00197 1.02946 7.46119C1.51961 7.92041 2.16144 8.52138 2.45638 8.7975C4.23581 10.466 4.64731 10.8514 4.66416 10.8647C4.68804 10.8839 4.76809 10.5281 3.90295 14.2092C3.54342 15.7389 3.2527 16.9999 3.2527 16.9999C3.2527 16.9999 4.47316 16.2631 5.96047 15.3506C7.44637 14.4381 8.67245 13.6939 8.68509 13.6968C8.69633 13.6998 9.24406 14.0541 9.89994 14.4824C10.5572 14.912 11.5361 15.5514 12.0768 15.9043C12.6175 16.2572 13.2158 16.6485 13.4068 16.7725C13.5964 16.8981 13.7622 16.9999 13.7622 16.9999C13.7622 16.9999 13.7678 16.9748 13.7622 16.9438C13.7537 16.8936 13.1849 14.1427 12.6723 11.6754C12.5501 11.0818 12.449 10.5856 12.449 10.5724C12.449 10.5532 13.3605 9.74104 16.6581 6.81888C17.0205 6.49846 17.0247 6.49403 16.9811 6.48369C16.9559 6.47779 15.5613 6.33013 13.8815 6.15441C12.2018 5.9787 10.8142 5.82957 10.7974 5.82218C10.7763 5.81332 10.7103 5.65828 10.5179 5.16362C10.3803 4.80629 9.93926 3.66784 9.53899 2.63276C9.13873 1.59767 8.74689 0.583254 8.66824 0.380962C8.58959 0.177193 8.52218 0.00738525 8.51656 1.90735e-06C8.51234 -0.00590515 8.12612 0.900721 7.65985 2.01554Z" fill="#6C6845"/>
                                    <path d="M7.65985 2.01554C7.19357 3.13037 6.62617 4.48735 6.39865 5.03221C6.17254 5.57559 5.98153 6.02595 5.98153 6.02595C5.98153 6.02595 5.54896 6.06287 5.0237 6.10273C4.49984 6.1426 3.54342 6.21495 2.89878 6.26368C2.25413 6.31388 1.37214 6.38033 0.939574 6.41282C0.507005 6.4453 0.117973 6.47631 0.0758401 6.48074L0 6.4896L0.0688178 6.559C0.108142 6.59591 0.540712 7.00197 1.02946 7.46119C1.51961 7.92041 2.16144 8.52138 2.45638 8.7975C4.23581 10.466 4.64731 10.8514 4.66416 10.8647C4.68804 10.8839 4.76809 10.5281 3.90295 14.2092C3.54342 15.7389 3.2527 16.9999 3.2527 16.9999C3.2527 16.9999 4.47316 16.2631 5.96047 15.3506C7.44637 14.4381 8.67245 13.6939 8.68509 13.6968C8.69633 13.6998 9.24406 14.0541 9.89994 14.4824C10.5572 14.912 11.5361 15.5514 12.0768 15.9043C12.6175 16.2572 13.2158 16.6485 13.4068 16.7725C13.5964 16.8981 13.7622 16.9999 13.7622 16.9999C13.7622 16.9999 13.7678 16.9748 13.7622 16.9438C13.7537 16.8936 13.1849 14.1427 12.6723 11.6754C12.5501 11.0818 12.449 10.5856 12.449 10.5724C12.449 10.5532 13.3605 9.74104 16.6581 6.81888C17.0205 6.49846 17.0247 6.49403 16.9811 6.48369C16.9559 6.47779 15.5613 6.33013 13.8815 6.15441C12.2018 5.9787 10.8142 5.82957 10.7974 5.82218C10.7763 5.81332 10.7103 5.65828 10.5179 5.16362C10.3803 4.80629 9.93926 3.66784 9.53899 2.63276C9.13873 1.59767 8.74689 0.583254 8.66824 0.380962C8.58959 0.177193 8.52218 0.00738525 8.51656 1.90735e-06C8.51234 -0.00590515 8.12612 0.900721 7.65985 2.01554Z" fill="white" fill-opacity="0.6"/>
                                </svg>
                        </div>
                    </div>
                    <div>
                        <svg className='likesIcons' width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z" fill="white" stroke="#C4C4C4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className='costsFlex'>
                            <h3 className='priceLists'>Price:</h3>
                            <h3 className='costLists'>23 924 ₽</h3>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lists;