import Image from 'next/image';
import SpinnerImage from '../../../public/SVG/Spinner.svg';
const Spinner = () => {
  return <Image src={SpinnerImage} width={50} height={50} alt="스피너" />;
};
export default Spinner;
