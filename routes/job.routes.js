const router = require('express').Router();
const jobController = require('../controller/job.controller');

router.post('/assign', jobController.postJob);
router.get('/job', jobController.getJob);
router.delete('/unassign', jobController.deleteJob);

module.exports = router;