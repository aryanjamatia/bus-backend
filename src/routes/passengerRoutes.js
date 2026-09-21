const router = require('express').Router();
const { getLiveBuses, getNearby, getEtaForStop, getNearbyService } = require('../controllers/passengerController');

router.get('/buses', getLiveBuses);
router.get('/nearby', getNearby);
router.get('/nearby-service', getNearbyService);
router.get('/eta/:stopId', getEtaForStop);

module.exports = router;
