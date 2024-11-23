import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hykgl.Record',
  name: '东南小说',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.csdy.yedw.ui.book.read.ReadBookActivity',
      rules:
        'FrameLayout > FrameLayout[childCount>4] > FrameLayout > ImageView',
      snapshotUrls: 'https://i.gkd.li/i/17878686',
    },
  ],
});
