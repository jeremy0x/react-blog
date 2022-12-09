import logo from '../logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className='footer__left'>
        <img src={logo} alt='react logo' className='logo' title='React logo' />
        <p>React Blog</p>
      </div>
      <p>
        <a
          href='https://github.com/jeremy0x'
          rel='noreferrer'
          title='GitHub Profile'
        >
          jeremy0x
        </a>{' '}
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
