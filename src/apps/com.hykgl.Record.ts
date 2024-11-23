import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hykgl.Record',
  name: '东南小说',
  groups: [
    {
      key: 1,
      name: '弹窗广告-关闭按钮右上角',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.csdy.yedw.ui.book.read.ReadBookActivity',
      rules:
        'FrameLayout > FrameLayout[childCount>4] > FrameLayout > ImageView',
      snapshotUrls: 'https://i.gkd.li/i/17878686',
    },
    {
      key: 2,
      name: '弹窗广告-关闭按钮右下角',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.csdy.yedw.ui.book.read.ReadBookActivity',
      rules:
        'FrameLayout[id="com.hykgl.Record:id/bannerContainer"] >n FrameLayout[childCount=3] > FrameLayout > ImageView',
      snapshotUrls: 'https://i.gkd.li/i/17878685',
    },
  ],
});
