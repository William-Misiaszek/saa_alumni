import { MegaProfile } from './MegaProfile';

/**
 * Retrieve user information from Mega Profile
 * .
 * @param {*} encodedSUID
 */
const getMpData = async (encodedSUID) => {
  const mp = new MegaProfile();
  const { contact } = await mp.get();
  const mpData = { ...contact };
  return mpData;
};

export default getMpData;
