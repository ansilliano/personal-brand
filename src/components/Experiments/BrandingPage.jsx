import React from 'react';
import DivergenteLogo from '../../assets/branding/divergente_logo.svg';
import Ai from '../icons/Ai';
import Figma from '../icons/Figma';
import Notion from '../icons/Notion';
import Ps from '../icons/Ps';
import Xd from '../icons/Xd';
import One from '../Works/numbers/One';
import Two from '../Works/numbers/Two';
import TitleHeaders from '../Works/TitleHeaders';
import Colors from './branding/Colors';
import Marca from './branding/Marca';

const BrandingPage = () => {
  const colors = [
    {
      color: '#405D63',
    },
    {
      color: '#5DACA9',
    },
    {
      color: '#7B858E',
    },
    {
      color: '#9E9BAB',
    },
    {
      color: '#2B2B33',
    },
    {
      color: '#E04B00',
    },
  ];

  return (
    <div className='work-detail'>
      <div className='dailyUI'>
        <div className='main_container'>
          <div className='branding__intro base-container-big'>
            <div className='experiments-container-without-margin work-detail'>
              <div className='sketching__intro--info'>
                <div className='experiments-name-project'>
                  <span>Branding</span>
                </div>
              </div>
              <div className='line__black' />
              <div className='experiments__description'>
                <div className='experiments-project-task'>
                  <h4>Task</h4>
                  <p>Design a brand guidelines as a freelancer.</p>
                </div>
                <div className='project-tools'>
                  <h4>Tools</h4>
                  <div>
                    <Figma size={20} />
                    <Ai size={20} />
                    <Xd size={20} />
                    <Ps size={20} />
                    <Notion size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='layout-grid layout-max-width'>
          <TitleHeaders
            Children={React.createElement(One, {})}
            title='Brand Design'
            subtitle='01_Introduction'
          />
          <div className='dailyUI__text'>
            <p>
              In this section I want to show you a compilation of works related
              to <strong>Brand creation</strong> that I did as a freelance
              worker. I used tools like Notion, Figma and Illustrator to create
              the proposals and share with clients. I also applied design
              thinking as a methodology to understand the client&lsquo;s needs,
              explore possibilities and materialize a final proposal.
            </p>
          </div>
          <TitleHeaders
            side='left'
            Children={React.createElement(Two, { side: 'left' })}
            title='Convergente'
            subtitle='02_Design'
          />
          <div className='dailyUI__container'>
            <div className='divergente__logo'>
              <img src={DivergenteLogo} alt='divergente--logo' />
            </div>
          </div>
          <div className='branding__container--line'>
            <p>Variaciones</p>
          </div>
          <div className='branding__container'>
            <Marca />
          </div>
          <div className='branding__container--line'>
            <p>Colores</p>
          </div>
          <div className='branding__colores branding__container'>
            {colors.map(({ color }) => (
              <Colors color={color} />
            ))}
          </div>
          <div className='branding__container--line'>
            <p>Tipografía</p>
          </div>
          <div className='branding__tipo branding__container'>
            <div className='tipography_one--jost'>
              <div className='typography'>
                <p className='typography__title'>Jost</p>
                <div className='typography__details'>
                  <div>
                    <p>AaBbCc123</p>
                  </div>
                </div>
                <div>
                  <p>
                    abcdefghijklmnopqrstuwxyz ABCDEFGHIJKLMNOPQRSTUWXYZ
                    £!@#$%^&*()_+-=[]{};’\,./:”|?
                  </p>
                </div>
              </div>
              <div className='typography__info--jost'>
                <div>
                  <div className='thin'>
                    <span>AaBbCc123</span>
                    <span>Thin</span>
                  </div>
                  <div className='extralight'>
                    <span>AaBbCc123</span>
                    <span>ExtraLight</span>
                  </div>
                  <div className='light'>
                    <span>AaBbCc123</span>
                    <span>Light</span>
                  </div>
                  <div className='regular'>
                    <span>AaBbCc123</span>
                    <span>Regular</span>
                  </div>
                  <div className='medium'>
                    <span>AaBbCc123</span>
                    <span>Medium</span>
                  </div>
                </div>
                <div>
                  <div className='semibold'>
                    <span>AaBbCc123</span>
                    <span>SemiBold</span>
                  </div>
                  <div className='bold'>
                    <span>AaBbCc123</span>
                    <span>Bold</span>
                  </div>
                  <div className='extrabold'>
                    <span>AaBbCc123</span>
                    <span>ExtraBold</span>
                  </div>
                  <div className='black'>
                    <span>AaBbCc123</span>
                    <span>Black</span>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  abcdefghijklmnopqrstuwxyz ABCDEFGHIJKLMNOPQRSTUWXYZ
                  £!@#$%^&*()_+-=[]{};’\,./:”|?
                </p>
              </div>
            </div>
            <div className='center-line' />
            <div className='tipography_two--source'>
              <div className='typography'>
                <p className='typography__title'>Source Serif Pro</p>
                <div className='typography__details'>
                  <div>
                    <p>AaBbCc123</p>
                  </div>
                </div>
                <div>
                  <p>
                    abcdefghijklmnopqrstuwxyz ABCDEFGHIJKLMNOPQRSTUWXYZ
                    £!@#$%^&*()_+-=[]{};’\,./:”|?
                  </p>
                </div>
              </div>
              <div className='typography__info--source'>
                <div>
                  <div className='thin'>
                    <span>AaBbCc123</span>
                    <span>Thin</span>
                  </div>
                  <div className='extralight'>
                    <span>AaBbCc123</span>
                    <span>ExtraLight</span>
                  </div>
                  <div className='light'>
                    <span>AaBbCc123</span>
                    <span>Light</span>
                  </div>
                  <div className='regular'>
                    <span>AaBbCc123</span>
                    <span>Regular</span>
                  </div>
                  <div className='medium'>
                    <span>AaBbCc123</span>
                    <span>Medium</span>
                  </div>
                </div>
                <div>
                  <div className='semibold'>
                    <span>AaBbCc123</span>
                    <span>SemiBold</span>
                  </div>
                  <div className='bold'>
                    <span>AaBbCc123</span>
                    <span>Bold</span>
                  </div>
                  <div className='extrabold'>
                    <span>AaBbCc123</span>
                    <span>ExtraBold</span>
                  </div>
                  <div className='black'>
                    <span>AaBbCc123</span>
                    <span>Black</span>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  abcdefghijklmnopqrstuwxyz ABCDEFGHIJKLMNOPQRSTUWXYZ
                  £!@#$%^&*()_+-=[]{};’\,./:”|?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingPage;
