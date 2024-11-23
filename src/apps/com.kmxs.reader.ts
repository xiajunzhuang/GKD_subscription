import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kmxs.reader\t',
  name: '七猫免费小说',
  groups: [
    {
      key: 1,
      name: '书架界面-广告关闭确认按钮',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.kmxs.reader.home.ui.HomeActivity',
      rules: 'TextView[id="com.kmxs.reader:id/bubble_close"]',
      snapshotUrls: 'https://i.gkd.li/i/17878884',
    },
  ],
});