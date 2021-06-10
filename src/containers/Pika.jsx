import React from 'react';
import Ai from '../components/icons/Ai';
import Figma from '../components/icons/Figma';
import Ps from '../components/icons/Ps';
import Xd from '../components/icons/Xd';
import BoxMetodology from '../components/Works/BoxMetodology';
import ButtonLink from '../components/Works/ButtonLink';
import One from '../components/Works/numbers/One';
import Two from '../components/Works/numbers/Two';
import PikaLogo from '../components/Works/PikaLogo';
import Shape from '../components/Works/Shape';
import TitleHeaders from '../components/Works/TitleHeaders';

const PikaPage = () => {
  const styles = {
    backgroundColor: '#b04458',
    left: '270px',
    width: '250%',
  };

  const style = {
    gridTemplateRows: '300px',
  };
  return (
    <div className='work-detail'>
      <div className='dailyUI'>
        <div className='dailyUI__intro layout-grid'>
          <img
            loading='lazy'
            src='https://storage.googleapis.com/assets-portafolio/pika_background.png'
            alt='pika'
          />
          <div className='pika__intro--info'>
            <div className='project-name'>
              <PikaLogo />
              <div style={styles} />
            </div>
          </div>
          <div className='dailyUI__description'>
            <div className='project-task'>
              <h4>Task</h4>
              <p>Design a website to rent apartments.</p>
            </div>
            <div className='project-tools'>
              <h4>Role</h4>
              <p>UI Designer.</p>
            </div>
            <div className='project-tools'>
              <h4>Tools</h4>
              <div>
                <Figma size={20} />
                <Ai size={20} />
                <Ps size={20} />
                <Xd size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className='layout-grid'>
          <TitleHeaders
            side='right'
            Children={React.createElement(One)}
            title='About Pika'
            subtitle='01_Introduction'
          />
          <div className='pika__text'>
            <img
              src='https://storage.googleapis.com/assets-portafolio/pika-assets/macbook-mockup.png'
              alt='macbook-pika'
            />
            <div>
              <strong>Pika</strong> was created in 2020 as an exercise for the
              &quot;UI and UX Interface Design Fundamentals Course&quot;.
              <br />
              Applying design thinking as the main methodology, it was possible
              to know the needs of users regarding the search for an apartment
              in Chile.
            </div>
          </div>
          <Shape />
          <TitleHeaders
            Children={React.createElement(One)}
            title='Challenge'
            subtitle='01_Introduction'
          />
          <div className='dailyUI__text'>
            <p>
              Currently there are more than 10 online platforms that allow the
              search for houses, apartments or offices to buy, sell or rent and
              they are well positioned, however, beyond representing great
              competition, the main challenge is how to reduce the number of
              intermediaries in this process and how to be able to filter the
              search specifically to meet those particular needs of the users.
            </p>
          </div>
          <TitleHeaders
            side='right'
            Children={React.createElement(One)}
            title='Methodology'
            subtitle='01_Introduction'
          />

          <div className='pika__container pika-grid' style={style}>
            <BoxMetodology
              title='inspiration'
              list={[
                {
                  itemId: 1,
                  subtitle: 'Discovery',
                  text: [
                    { id: 1, text: 'Requirements understanding.' },
                    { id: 2, text: 'Idea creation.' },
                  ],
                  grid: '1/2',
                },
                {
                  itemId: 2,
                  subtitle: 'Research',
                  text: [
                    { id: 1, text: 'User persona.' },
                    { id: 2, text: 'User flow.' },
                  ],
                  grid: '2/-1',
                },
              ]}
              grid='1/7'
              height='100%'
              heightBox='65%'
            />
            <BoxMetodology
              title='ideation'
              list={[
                {
                  subtitle: 'Design',
                  text: [
                    { id: 1, text: 'Design guidelines.' },
                    { id: 2, text: 'Sketch wireframing.' },
                    { id: 3, text: 'Grayscale wireframing.' },
                    { id: 4, text: 'Prototyping.' },
                  ],
                  grid: '2/-1',
                },
              ]}
              grid='4/10'
              height='100%'
              heightBox='100%'
              marginTop='0px'
              contextGrid='2/-1'
            />
            <BoxMetodology
              title='implementation'
              list={[
                {
                  subtitle: 'Testing',
                  text: [
                    { id: 1, text: 'Usability testing.' },
                    { id: 2, text: 'Audit process.' },
                  ],
                },
              ]}
              grid='10/-1'
              height='100%'
              heightBox='65%'
              contextGrid='1/-1'
            />
          </div>
          <TitleHeaders
            Children={React.createElement(Two)}
            title='Context'
            subtitle='02_Problem Statement'
          />
          <div className='pika__container pika-grid'>
            <img
              className='context__container--img'
              src='https://storage.googleapis.com/assets-portafolio/pika-assets/context-illustration.svg'
              alt='context-illustration'
            />
            <div className='context__container'>
              <div className='context__container--problem'>
                <ul>
                  <li>Problem</li>
                  <li>○ Very high rents.</li>
                  <li>
                    ○ Little information about the departments and their
                    characteristics.
                  </li>
                  <li>○ Quality-price ratio.</li>
                </ul>
              </div>
              <div className='context__container--solution'>
                <ul>
                  <li>Solution</li>
                  <li>○ Enviroment-specific information.</li>
                  <li>
                    ○ Curatorship of all departments that join to the platform.
                  </li>
                  <li>○ Specific filtering section.</li>
                </ul>
              </div>
            </div>
          </div>
          <Shape top='3400px' deg='180deg' transform={true} />
          <TitleHeaders
            side='right'
            Children={React.createElement(Two)}
            title='User Persona'
            subtitle='02_Problem Statement'
          />
          <div className='pika__container pika-grid'>
            <img
              src='https://storage.googleapis.com/assets-portafolio/pika-assets/user-persona-image.png'
              alt='user-persona'
            />
          </div>
          <ButtonLink
            text='go to prototype'
            link='https://xd.adobe.com/view/f2a6ca61-22a5-4c8e-bc69-818785476879-a7f5/'
          />
        </div>
      </div>
    </div>
  );
};

export default PikaPage;
