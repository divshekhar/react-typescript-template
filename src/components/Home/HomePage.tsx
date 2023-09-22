import { FC } from 'react';
import ReactTypescriptTemplateLogo from '../../assets/images/react-typescript-template.png';

const HomePage: FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold my-2">React Typescript Template</h1>
      <img
        src={ReactTypescriptTemplateLogo}
        width={500}
        className="mx-auto"
        alt="React-Typescript-Template"
      />
    </div>
  );
};

export default HomePage;
