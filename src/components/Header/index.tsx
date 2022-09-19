import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import { HeaderFormContainer, HeaderContainer } from './Header.styles';

type HeaderProps = {
  // eslint-disable-next-line no-unused-vars
  trackThis: (str: string) => void;
};

const useHeader = (trackThis: HeaderProps['trackThis']) => {
  const [target, setTarget] = useState<string>('');

  const changeTarget = (evt: ChangeEvent<HTMLInputElement>) => setTarget(evt.target.value);

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    evt.stopPropagation();

    if (target) {
      trackThis(target);
    }
  };

  return {
    changeTarget,
    onSubmit,
  };
};

const Header = ({ trackThis }: HeaderProps) => {
  const { changeTarget, onSubmit } = useHeader(trackThis);

  return (
    <HeaderContainer>
      <h1>IP Address Tracker</h1>
      <HeaderFormContainer onSubmit={onSubmit} method="GET">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          required
          onChange={changeTarget}
        />
        <button type="submit">
          <Image src="/images/icon-arrow.svg" alt="" width={11} height={14} />
        </button>
      </HeaderFormContainer>
    </HeaderContainer>
  );
};

export default Header;
