import Image from 'next/image';

import { useHeader } from './Header.hooks';
import { HeaderFormContainer, HeaderContainer } from './Header.styles';
import { HeaderProps } from './Header.types';

const Header = ({ trackThisDomain, trackThisIp }: HeaderProps) => {
  const { changeTarget, error, onSubmit } = useHeader({ trackThisDomain, trackThisIp });

  return (
    <HeaderContainer>
      <h1>IP Address Tracker</h1>
      <HeaderFormContainer onSubmit={onSubmit} method="GET">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          required
          onChange={changeTarget}
          className={(error && 'error') || undefined}
        />
        <button type="submit">
          <Image src="/images/icon-arrow.svg" alt="" width={11} height={14} />
        </button>
      </HeaderFormContainer>
      {error && <p className="error">{error}</p>}
    </HeaderContainer>
  );
};

export default Header;
