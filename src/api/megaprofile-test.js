import { MegaProfile } from '../utilities/MegaProfile';

// Get A User Data. Delete this prior to merging branch into TSGG
// Do not enable for public use. This is for development/debugging purposes only.
// Data can be viewed at /api/megaprofile-test
// -----------------------------------------------------------------------------

export default async function handler(req, res) {
  try {
    const mp = new MegaProfile();
    const { data } = await mp.get();
    res.status(200).json(data);
    // res.status(200).json({ mesage: 'something is happening...' });
  } catch (error) {
    res.status(500).json(error.response.data);
  }
}
