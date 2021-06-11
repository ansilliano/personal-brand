import React from 'react';
import { useParams } from 'react-router-dom';
// db
import db from '../../db.json';
import Contact from '../Contact';
import MenuWork from '../Menu/MenuWork';
import BrandingPage from './BrandingPage';
import DesarrollartePage from './DesarrollartePage';
import HandcraftPage from './HandcraftPage';
import Branding from './icons/Branding';
import Desarrollarte from './icons/Desarrollarte';
import Handcraft from './icons/Handcraft';
import Illustration from './icons/Illustration';
import Sketching from './icons/Sketching';
import Windsurf from './icons/Windsurf';
import IllustrationPage from './IllustrationPage';
import SketchingPage from './SketchingPage';
import WindsurfPage from './WindsurfPage';

const pageComponent = {
  illustration: IllustrationPage,
  branding: BrandingPage,
  windsurf: WindsurfPage,
  sketching: SketchingPage,
  handcraft: HandcraftPage,
  desarrollarte: DesarrollartePage,
};

const icons = {
  illustration: Illustration,
  branding: Branding,
  windsurf: Windsurf,
  sketching: Sketching,
  handcraft: Handcraft,
  desarrollarte: Desarrollarte,
};

const DetailExperiments = () => {
  const { id } = useParams();

  const { experiments } = db;
  const path = 'experiments';

  const { Children } = experiments.find((item) => item.id === Number(id));

  return (
    <div className='base-container'>
      <Contact />
      <MenuWork items={experiments} icons={icons} path={path} />
      <section className='work-detail'>
        {React.createElement(pageComponent[Children])}
      </section>
    </div>
  );
};

export default DetailExperiments;
