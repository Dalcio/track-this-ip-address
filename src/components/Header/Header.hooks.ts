import isValidDomain from 'is-valid-domain';
import { isIP } from 'is-ip';
import { ChangeEvent, FormEvent, useState } from 'react';
import { HeaderProps } from './Header.types';

export const useHeader = ({ trackThisDomain, trackThisIp }: HeaderProps) => {
  const [target, setTarget] = useState<string>('');
  const [error, setError] = useState<string>('');

  const changeTarget = (evt: ChangeEvent<HTMLInputElement>) => {
    setTarget(evt.target.value);

    if (error) setError('');
  };

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    evt.stopPropagation();

    if (target) {
      if (isValidDomain(target)) {
        trackThisDomain(target);
      } else if (isIP(target)) {
        trackThisIp(target);
      } else if (target.includes('https') || target.includes('http')) {
        const domain = target.replace(/https*:\/\//g, '').replace(/\/.*/g, '');

        if (isValidDomain(domain)) {
          trackThisDomain(domain);
        } else {
          setError(domain);
        }
      } else {
        setError('Invalid IP Address or domain');
      }
    }
  };

  return {
    changeTarget,
    onSubmit,
    error,
  };
};
