import { dcnb } from 'cnbuilder';

export const root = ({ hasHero, isDark } = {}) =>
  dcnb(
    'global-header-desktop su-cc su-w-full su-hidden lg:su-block su-border-b su-border-solid su-border-black-90 print:su-hidden',
    {
      'su-bg-saa-black': !hasHero && isDark,
      'su-bg-gradient-to-b su-from-masthead-black-top su-to-masthead-black-bottom su-backface-hidden':
        hasHero || !isDark,
      'su-absolute': hasHero,
    }
  );
export const logo = 'su-w-[13rem] xl:su-w-[16.5rem]';
export const logoWrapper =
  'su-w-fit su-px-14 su-py-12 xl:su-px-17 su-bg-cardinal-red';
export const utilWrapper = 'su-flex su-flex-grow su-rs-mt-0';
export const utilNav = 'su-inline-block su-text-right su-flex-grow';
export const utilNavMenu =
  'su-list-unstyled su-flex su-justify-end su-items-center su-link-white su-link-no-underline su-text-18 children:su-inline-block children:su-leading-[3.4rem] children:su-mr-[2em] children:su-mb-0 su-underline-offset-[3px]';
export const utilNavItem =
  'first:su-ml-0 children:hocus:su-decoration-digital-red-xlight children:hocus:su-decoration-[0.12em]';
export const siteNameWrapper = 'su-basefont-23 su-mt-10 xl:su-mt-19 su-rs-mb-0';
export const siteName =
  'su-text-white su-font-bold hocus:su-text-white su-no-underline hocus:su-no-underline lg:su-text-[3.3rem] xl:su-text-m3';

// Mobile styles
export const rootMobile =
  'global-header-mobile su-relative su-w-full lg:su-hidden su-bg-cardinal-red-xdark';
export const bodyMobile = 'su-cc';
export const logoWrapperMobile =
  'su-flex su-flex-col su-items-start su-rs-py-0 su-mr-1em';
export const logoMobile =
  'su-text-white su-font-bold hocus:su-text-white su-no-underline hocus:su-no-underline su-text-24 su-leading-display';
export const logoImageMobile = 'su-w-[11rem] su-mb-01em';
export const utilNavMobile = 'su-cc su-text-right su-bg-digital-red';
export const utilNavMenuMobile =
  'su-list-unstyled su-flex su-items-center su-justify-end su-link-white su-link-no-underline su-text-13 sm:su-text-16 children:su-inline-block children:su-ml-[1.6em] xs:children:su-ml-[1.9em] children:su-mb-0 children:su-leading-[4rem] su-underline-offset-[3px]';
export const utilNavItemMobile = 'first:su-ml-0';
