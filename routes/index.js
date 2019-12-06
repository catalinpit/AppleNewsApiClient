const express = require('express');
const anc = require('apple-news-client');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.post('/info', async (req, res) => {
  const client = new anc.AppleNewsClient({
    apiId: req.body.apiId,
    apiSecret: req.body.apiSecret,
  });

  const sections = await client.listSectionsAsync({ channelId: req.body.channelId });
  const channel = await client.readChannelAsync({ channelId: req.body.channelId });

  res.render('publicationInfo', { channelInfo: channel, sectionsList: sections });
});

module.exports = router;
